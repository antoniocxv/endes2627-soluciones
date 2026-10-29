<#
    bajar.ps1 - Al EMPEZAR a trabajar en cualquier PC.
    Trae lo ultimo que se subio desde el otro PC.
    Uso: powershell -ExecutionPolicy Bypass -File .\bajar.ps1
#>
$ErrorActionPreference = 'Continue'
Set-Location $PSScriptRoot

Write-Host "`n=== Bajando cambios del repo privado" -ForegroundColor Cyan
if (git status --porcelain) {
    Write-Host "Tienes cambios sin subir en este PC. Lanza primero subir.ps1." -ForegroundColor Yellow
    Read-Host "Pulsa Intro para salir"; exit 1
}
git pull --rebase
if ($LASTEXITCODE -eq 0) { Write-Host "Al dia." -ForegroundColor Green } else { Write-Host "ERROR al bajar. Avisa a Claude." -ForegroundColor Red }
Read-Host "`nPulsa Intro para salir"
