# 引き継ぎメモ (2026-04-03 02:12 更新)

## 現在の状況

### ✅ 完了済み
1. **スプレッドシート（Research_Data_DB）への同期スクリプト**: `SyncScript.txt` で全5シートへの書き込みに成功。
2. **Apps Scriptの使い方**: `SyncScript.txt` の中身をApps Scriptに貼り付け → 関数 `runSync` を実行するだけ。

### 🔴 未解決：KAWAIデータ不足（70件以上 → 11件しかない）
- **PC B（別PC）で生成した70件以上のリサーチ結果**が、GitHubにPushされていない。
- 現在のCSV（`RESEARCH_KAWAI.csv`）には11件しか含まれていない。
- `SyncScript.txt` も同じ11件のデータしか持っていない。

## PC B で実行すべきこと（4/6頃）

### STEP 1: データの確認
```powershell
cd "$env:USERPROFILE\OneDrive\ドキュメント\GitHub\KAWAI-RESEARCH"
Get-Content RESEARCH_KAWAI.csv | Measure-Object -Line
```
→ 70件以上あることを確認する。

### STEP 2: GitHubにPush
```powershell
git add .
git commit -m "Add full 70+ KAWAI research data"
git push
```

### STEP 3: SyncScript.txt の更新
- CSVデータが増えた場合、`SyncScript.txt` も更新が必要。
- Antigravityに「CSVデータをSyncScript.txtに反映して」と依頼する。

### STEP 4: PC C（自宅PC）で同期
```powershell
cd "$env:USERPROFILE\OneDrive\ドキュメント\GitHub\KAWAI-RESEARCH"
git pull
```
→ その後、スプレッドシートのApps Scriptで `runSync` を再実行。

## スプレッドシート情報
- 名称: `Research_Data_DB`
- タブ: KAWAI, YANAGI, TOMOYA, TERAMACHI, WEBER
- 同期方法: `SyncScript.txt` → Apps Script → `runSync`

## 参照チャット
- Antigravity チャットID: `410adb4e-934f-4a01-98ee-2017ba115fa9`
- 内容: GitHub pull/push、日記整理、スプレッドシート同期、KAWAIデータ不足の調査
