# 3台目PC セットアップ手順（2026-04-20更新）

このファイルを開いたら上から順番に実行するだけ。

---

## STEP 0：GitHub CLI インストール

PowerShellで実行：

```powershell
winget install --id GitHub.cli --silent
```

完了したら**PowerShellを閉じて新しく開く**。

---

## STEP 1：GitHub 認証

```powershell
gh auth login
```

ブラウザが開く → GitHubにログイン → 完了。

---

## STEP 2：claude-config を同期

```powershell
git -C "C:/Users/$env:USERNAME/.claude" pull origin main
```

---

## STEP 3：週次セキュリティチェック登録

Claude Codeのチャットに以下をコピペして送信：

```
週1回（月曜朝9時）、このPCの ~/.claude/ セキュリティ設定を自動チェックするスケジュールを登録してください。タスクID: weekly-claude-security-check
```

---

## 完了

以上で3台目のセットアップは終わり。

---

*以下は過去の引き継ぎメモ（参考）*

2026-04-10: TOMOYAデータ追記スクリプト append_tomoya.py が未実行で中断。
