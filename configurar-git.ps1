<#
    configurar-git.ps1 - SOLO UNA VEZ, en el PC que tiene el material.
    Antes: crear en github.com dos repos VACIOS (sin README ni .gitignore):
        endes2627             -> Public
        endes2627-soluciones  -> Private
    Uso: powershell -ExecutionPolicy Bypass -File .\configurar-git.ps1
#>
$ErrorActionPreference = 'Continue'
Set-Location $PSScriptRoot

function Fallo($txt) { Write-Host "`nERROR: $txt" -ForegroundColor Red; Read-Host "Pulsa Intro para salir"; exit 1 }

# Identidad para los commits
if (-not (git config --global user.name))  { git config --global user.name  (Read-Host "Tu nombre para los commits") }
if (-not (git config --global user.email)) { git config --global user.email (Read-Host "Tu email de GitHub") }

if (Test-Path -LiteralPath ".git") {
    Write-Host "Esta carpeta ya es un repositorio git." -ForegroundColor Yellow
} else {
    $u = Read-Host "Tu usuario de GitHub"
    git init -b main
    git remote add origin "https://github.com/$u/endes2627-soluciones.git"
}

# El script de ordenar ya no hace falta
if (Test-Path -LiteralPath "ordenar-ud.ps1") { Move-Item -LiteralPath "ordenar-ud.ps1" -Destination "_papelera\" -Force }

git add -A
git commit -m "Material inicial ENDES 26/27 ordenado por unidades" -m "Co-Authored-By: Claude Opus 5.5 <noreply@anthropic.com>"
Write-Host "`nSubiendo el repo privado (la primera vez se abre el navegador para iniciar sesion en GitHub)..." -ForegroundColor Cyan
git push -u origin main
if ($LASTEXITCODE -ne 0) { Fallo "no se pudo subir el repo privado. Comprueba que endes2627-soluciones existe y esta vacio." }

& "$PSScriptRoot\publicar.ps1" -m "Material inicial ENDES 26/27"
Read-Host "`nListo. Pulsa Intro para salir"
