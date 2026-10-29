<#
    publicar.ps1 - Copia SOLO el material del alumnado a ..\endes2627 y lo sube al repo publico.
    Lo llama subir.ps1; no hace falta lanzarlo a mano.
    La carpeta endes2627 se genera: NO editar nada en ella.
#>
param([string]$m)
$ErrorActionPreference = 'Continue'

$src = $PSScriptRoot
$dst = Join-Path (Split-Path $src -Parent) 'endes2627'
if (-not $m) { $m = "Actualizacion $(Get-Date -Format 'yyyy-MM-dd HH:mm')" }

# ---------------- QUE NO SE PUBLICA ----------------
# Carpetas (por nombre, a cualquier nivel)
$xd = @('.git', '_papelera', '_fuentes', '_plantillas', '_curso-anterior', '_publico')
# Archivos (patrones, a cualquier nivel)
$xf = @(
    '*guion del profesorado*', '*solucionario*', '*solucion de referencia*',
    '*moodle.xml', '*vaciado*', 'Informe-Moodle*', '*Diario de sesiones*',
    '*.mbz', '*.ps1', 'ESTADO.md', 'README.md', '.gitignore',
    '~$*', 'Thumbs.db', 'desktop.ini'
)
# ---------------------------------------------------

Write-Host "`n=== Publicando material del alumnado en $dst" -ForegroundColor Cyan

if (-not (Test-Path -LiteralPath "$dst\.git")) {
    $priv = git -C $src remote get-url origin
    $pub  = $priv -replace 'endes2627-soluciones', 'endes2627'
    git clone $pub $dst
    if ($LASTEXITCODE -ne 0) { Write-Host "ERROR: no se pudo clonar $pub" -ForegroundColor Red; exit 1 }
}

git -C $dst rev-parse --verify HEAD *> $null
if ($LASTEXITCODE -eq 0) { git -C $dst pull --ff-only -q }

robocopy $src $dst /MIR /XD $xd /XF $xf /NJH /NJS /NDL /NP /NFL | Out-Null
if ($LASTEXITCODE -ge 8) { Write-Host "ERROR en la copia (robocopy $LASTEXITCODE)" -ForegroundColor Red; exit 1 }
$usuario = ((git -C $dst remote get-url origin) -split '/')[-2]
$utf8 = New-Object System.Text.UTF8Encoding($false)
$readme = [IO.File]::ReadAllText("$src\_publico\README.md", $utf8).Replace('<usuario>', $usuario)
[IO.File]::WriteAllText("$dst\README.md", $readme, $utf8)

git -C $dst add -A
if (git -C $dst status --porcelain) {
    git -C $dst status --short
    git -C $dst commit -q -m $m
    git -C $dst push -u origin main
    if ($LASTEXITCODE -ne 0) { Write-Host "ERROR: no se pudo subir el repo publico" -ForegroundColor Red; exit 1 }
    Write-Host "Repo publico actualizado." -ForegroundColor Green
} else {
    Write-Host "Repo publico: sin cambios." -ForegroundColor DarkGray
}
