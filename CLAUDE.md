# SESSHUU-ANIMA-RESEARCH — 制作ルールブック

> "データは事実。SKILLSは解釈。変換の質がメンバーの力になる。"

---

## このリポジトリの役割

**雪舟館Animaメンバーの「才能を育てるデータベース」。**

各メンバーのSNS投稿・note記事・活動実績をCSVに収集し、
そのデータを解釈・変換して `sesshuu-anima` 側の `SKILLS.md` を育てる。

```
SESSHUU-ANIMA-RESEARCH（公開・データ収集）
    各メンバーのCSV（X・note等の投稿記録）
          ↓ Sonnet以上で変換（解釈が必要）
sesshuu-anima（非公開・組織設計）
    各メンバーのSKILLS.md（何ができるかの定義）
```

- **公開設定：** Public（GASとの連携のため）
- **自動収集：** バッチ処理（詳細は `RESEARCH-DB-CONFIG.md` 参照）
- **変換・更新：** Sonnet以上のモデルで実施。KUROが変換品質を確認。

---

## CSV管理対象メンバー

| CSV | 監視対象 | SKILLS最終更新 | 状態 |
|---|---|---|---|
| RESEARCH_KAWAI.csv | X・note・Threads・Voicy | 2026-04-20 v1.0 | ✅ |
| RESEARCH_TOMOYA.csv | X (@AIParaCareer) | 2026-04-22 v3.0 | ✅ |
| RESEARCH_YANAGI.csv | X (@ryonihonyanagi他) | 2026-04-22 v3.0 | ✅ |
| RESEARCH_KIUCHI.csv | X (@shota7180)・YouTube | 2026-04-22 v2.1 | ✅ |
| RESEARCH_TERAMACHI.csv | X・note・webwriter-school.net | 2026-04-22 v3.0 | ✅ |
| RESEARCH_WEBER.csv | X (@sesshuuX) | 未確認 | **⚠️ 要確認** |
| RESEARCH_SATOU.csv | X・note | 未確認 | **⚠️ 要確認** |

## CSV管理対象（チーム共通）

| CSV | 監視対象 | 更新フロー | 状態 |
|---|---|---|---|
| RESEARCH_SHIFTAI_BLOG.csv | [SHIFT AI TIMES Blog](https://shift-ai.co.jp/blog/) | **収集：** 既存バッチ統合（週3回以上） / **振り分け・解釈：** TOMOYA（週1・月曜） / **SKILLS反映：** Snow指示・KURO確認 | 🆕 新設 |

> **背景：** KIUCHIは木内翔大（SHIFT AI代表取締役CEO）。sesshuu-animaメンバーの多くがSHIFT AIのエコシステムに在籍（YANAGI=認定講師、TERAMACHI=認定ライター、TOMOYA=Manager等）。
> SHIFT AI Blogはチームの活動・成長を映す「鏡」。定期監視によりメンバーのSKILLS更新漏れを防ぐ。

---

## CSV → SKILLS変換ルール（KURO確認対象）

1. **CSVは事実、SKILLSは解釈** — 投稿内容から「何ができるか」を読み取る変換には判断が必要。Flash/Haikuに任せない。Sonnet以上を使う。
2. **全件読み戻し確認** — GAP思考禁止。1行ずつ対象IDと内容が一致しているか物理確認。
3. **変換後はKUROが差し戻し判定** — 根拠のないスキル記述・誇張・事実との乖離をKUROが検出。
4. **更新履歴を残す** — SKILLS.mdのバージョン番号と更新日を必ず明記。

---

## 変換フロー

```
Step 1: CSVの最新データを確認（本日分が入っているか）
Step 2: 前回SKILLS更新からの新着投稿を抽出
Step 3: Sonnet以上で「何ができるか」に変換（解釈）
Step 4: SKILLS.mdの該当箇所を更新（バージョンアップ）
Step 5: KUROが変換内容を確認・承認
Step 6: sesshuu-animaリポジトリにpush
```

---

## 注意事項

- このリポジトリはPublicのため、**個人情報・API KEY・認証情報を含めない**
- `RESEARCH-DB-CONFIG.md` にエージェント自律行動プロトコルが記載されている。必ず参照すること。
- スクリプト類（.py・.js・.ps1）は複数存在するが、**現役スクリプトはSESHUU_ANIMA_SYNC_V2.PS1**を軸とする。他は試作品。

---

*SESSHUU-ANIMA-RESEARCH CLAUDE.md v1.0 / 雪舟館 2026-04-22*
