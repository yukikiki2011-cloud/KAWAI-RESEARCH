# 引き継ぎメモ: PC3での作業再開 (2026年4月13日向け)

## 現在の状況 (2026-04-10 時点)
- Claude CodeでリサーチデータをCSVに追記する処理を行っていましたが、利用制限（Session limit）に到達して中断されました。
- 中断直前に、TOMOYAさんのリサーチデータを追記するためのPythonスクリプト `append_tomoya.py` が作成されていますが、**まだ実行されていません**。
- 他のメンバーのCSVファイル（`RESEARCH_TERAMACHI.csv`, `RESEARCH_WEBER.csv`, `RESEARCH_YANAGI.csv`）には、すでに更新（変更）が加わっています。

## 最新のGitステータス
```text
Unstaged changes (変更あり):
  RESEARCH_TERAMACHI.csv
  RESEARCH_WEBER.csv
  RESEARCH_YANAGI.csv

Untracked files (未追跡):
  append_tomoya.py
```

---

## ⚠️ いま（このPCで）やること
PC3にデータを引き継ぐために、**必ずこのPCで現在の状態をGitHubにPushしてください。**
以下のコマンドを実行します：
```powershell
git add .
git commit -m "WIP: save state before switching to PC3 (Claude limit hit, wait for tomoya append)"
git push
```

---

## 🚀 13日（月）にPC3でやること
1. **GitHubから最新を取得**
   ```powershell
   cd "\path\to\SESSHUU-ANIMA-RESEARCH"
   git pull
   ```

2. **TOMOYAデータの追記スクリプトを実行**
   ```powershell
   python append_tomoya.py
   ```
   ※これで `RESEARCH_TOMOYA.csv` にデータが追記されます。

3. **不要になったスクリプトを削除**
   ```powershell
   Rm append_tomoya.py
   ```

4. **Claude Code (または私) に「TOMOYAのデータ追記が終わったので続きから進めて」と指示**して、リサーチ・データ整理作業を再開してください。
