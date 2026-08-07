# Sobe um servidor HTTP local só para esta pasta e abre o Portal no navegador.
# Não precisa instalar nada: usa só o PowerShell que já vem no Windows.

$ErrorActionPreference = 'Stop'
$raiz = $PSScriptRoot
Set-Location $raiz

$mimeTypes = @{
    '.html'  = 'text/html; charset=utf-8'
    '.htm'   = 'text/html; charset=utf-8'
    '.css'   = 'text/css; charset=utf-8'
    '.js'    = 'application/javascript; charset=utf-8'
    '.json'  = 'application/json; charset=utf-8'
    '.svg'   = 'image/svg+xml'
    '.png'   = 'image/png'
    '.jpg'   = 'image/jpeg'
    '.jpeg'  = 'image/jpeg'
    '.gif'   = 'image/gif'
    '.ico'   = 'image/x-icon'
    '.woff'  = 'font/woff'
    '.woff2' = 'font/woff2'
    '.ttf'   = 'font/ttf'
    '.pdf'   = 'application/pdf'
}

function Iniciar-Listener {
    param([int]$PortaInicial)
    for ($porta = $PortaInicial; $porta -lt $PortaInicial + 20; $porta++) {
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add("http://127.0.0.1:$porta/")
        try {
            $listener.Start()
            return @{ Listener = $listener; Porta = $porta }
        } catch {
            $listener.Close()
        }
    }
    throw "Não consegui achar uma porta livre entre $PortaInicial e $($PortaInicial + 19)."
}

$resultado = Iniciar-Listener -PortaInicial 8000
$listener = $resultado.Listener
$porta = $resultado.Porta
$url = "http://127.0.0.1:$porta/"

$Host.UI.RawUI.WindowTitle = "Portal de Processos - Pelegrini Pins (NAO FECHE esta janela)"
Write-Host ""
Write-Host "  Portal rodando em: $url" -ForegroundColor Cyan
Write-Host "  Deixe esta janela aberta enquanto usa o portal."
Write-Host "  Para encerrar: feche esta janela ou aperte Ctrl+C." -ForegroundColor DarkGray
Write-Host ""

Start-Process $url

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        try {
            $caminho = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
            if ($caminho -eq '/') { $caminho = '/index.html' }
            $caminho = $caminho.TrimStart('/')

            $arquivo = Join-Path $raiz $caminho
            $arquivoCompleto = [System.IO.Path]::GetFullPath($arquivo)

            if (-not $arquivoCompleto.StartsWith($raiz, [System.StringComparison]::OrdinalIgnoreCase)) {
                $response.StatusCode = 403
                $response.Close()
                continue
            }

            if (-not (Test-Path $arquivoCompleto -PathType Leaf)) {
                $response.StatusCode = 404
                $bytesErro = [System.Text.Encoding]::UTF8.GetBytes("404 - Arquivo nao encontrado: $caminho")
                $response.OutputStream.Write($bytesErro, 0, $bytesErro.Length)
                $response.Close()
                continue
            }

            $ext = [System.IO.Path]::GetExtension($arquivoCompleto).ToLowerInvariant()
            $tipo = $mimeTypes[$ext]
            if (-not $tipo) { $tipo = 'application/octet-stream' }

            $bytes = [System.IO.File]::ReadAllBytes($arquivoCompleto)
            $response.ContentType = $tipo
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } catch {
            try { $response.StatusCode = 500 } catch {}
        } finally {
            $response.Close()
        }
    }
} finally {
    $listener.Stop()
    $listener.Close()
}
