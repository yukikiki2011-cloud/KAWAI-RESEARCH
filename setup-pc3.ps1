# 3台目PC セットアップスクリプト
# GitHub CLI インストール → 認証 → claude-config 同期

Write-Host "=== STEP 1: GitHub CLI インストール ===" -ForegroundColor Cyan
winget install --id GitHub.cli --silent
if ($LASTEXITCODE -ne 0) {
    Write-Host "winget失敗。手動インストールが必要です。" -ForegroundColor Red
    Start-Process "https://github.com/cli/cli/releases/latest/download/gh_2.67.0_windows_amd64.msi"
    Write-Host "ブラウザでインストーラーが開きます。インストール後このスクリプトを再実行してください。"
    exit 1
}

# PATH を再読み込み
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH", "User")

Write-Host "=== STEP 2: GitHub 認証 ===" -ForegroundColor Cyan
gh auth login

Write-Host "=== STEP 3: claude-config 同期 ===" -ForegroundColor Cyan
git -C "C:/Users/$env:USERNAME/.claude" pull origin main

Write-Host "=== 完了 ===" -ForegroundColor Green
Write-Host "次：Claude Code を開いて週次セキュリティチェックを登録してください。"
