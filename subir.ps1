<#
    subir.ps1 - Al TERMINAR de trabajar en cualquier PC.
    Sube todo al repo privado y actualiza el publico.
    Uso: powershell -ExecutionPolicy Bypass -File .\subir.ps1 [-m "mensaje"]
#>
param([string]$m)
$ErrorActionPreference = 'Continue'
Set-Location $PSScriptRoot
if (-not $m) { $m = "Actualizacion $(Get-Date -Format 'yyyy-MM-dd HH:mm') desde $env:COMPUTERNAME" }

Write-Host "`n=== Repo privado (endes2627-soluciones)" -ForegroundColor Cyan
git add -A
if (git status --porcelain) {
    git status --short
    git commit -q -m $m
}
git pull --rebase -q
if ($LASTEXITCODE -ne 0) {
    Write-Host "`nCONFLICTO: el mismo archivo se cambio en los dos PCs. No toques nada y avisa a Claude." -ForegroundColor Red
    Read-Host "Pulsa Intro para salir"; exit 1
}
git push -q
if ($LASTEXITCODE -ne 0) { Write-Host "ERROR al subir el repo privado" -ForegroundColor Red; Read-Host "Pulsa Intro"; exit 1 }
Write-Host "Repo privado al dia." -ForegroundColor Green

& "$PSScriptRoot\publicar.ps1" -m $m
Read-Host "`nPulsa Intro para salir"
