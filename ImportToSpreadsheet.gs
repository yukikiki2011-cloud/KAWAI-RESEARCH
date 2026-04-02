// シートごとに個別実行する関数（タイムアウト回避）
// 実行順: importKAWAI → importYANAGI → importTOMOYA → importTERAMACHI → importWEBER

function importKAWAI() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName("KAWAI");
  if(!s) return;
  s.clear();
  s.getRange(1,1,12,9).setValues([
    ["メディア","投稿日（推定）","タイトル／本文（抜粋）","カテゴリ","URL","メモ・要点","チェックすべき関連サイト","重要なワード","今後深堀すべきポイント"],
    ["X","2026-03-30","川合 卓也（KAWAI）プロフィール：デザイナー、世界観構築のプロフェッショナル。","デザイン/AI","https://x.com/kawai_design","雪舟館の全ビジュアル・世界観を統括。AIを道具として使いこなす感性。","https://github.com/yukikiki2011-cloud/KAWAI","デザイン思考, 美意識, AIクリエイティブ","AIによる能力拡張の具現化"],
    ["X","2026-04-02","Claude Code Guide 更新：v2.1.90。新コマンド /powerup (インタラクティブレッスン) 追加。","AI/教育","https://claude-code-dictionary.pages.dev/","ターミナル内で Claude Code の使い方を学べるインタラクティブレッスン機能が実装された。","https://claude-code-dictionary.pages.dev/","/powerup, チュートリアル, v2.1.90","インタラクティブ学習による導入コストの低減"],
    ["X","2026-04-02","Claude Code辞典 v2.1.89 更新：Auto mode 再試行(rキー)、新フック PermissionDenied 反映。","デザイン/AI","https://x.com/kawai_design","辞典の毎日更新を継続。開発効率を向上させる最新設定の公開。","https://claude-code-dictionary.pages.dev/","Claude Code, v2.1.89, CSSフック","新機能の実践活用"],
    ["X","2026-03-31","Claude Code 内部ソースから101個のフィーチャーフラグを発見。KAIROS等の自律動作機能に注目。","AI/開発","https://x.com/kawai_design","KAIROS（バックグラウンド自律動作、GitHub Webhook連携）の可能性を考察。","https://x.com/kawai_design","KAIROS, フィーチャーフラグ, 自律動作","リリース予定と影響の調査"],
    ["X","2026-03-30","Claude Code 権限確認回避術：trash/ フォルダへの mv を活用し作業効率化。","AI/開発効率","https://x.com/kawai_design","rmによる頻繁な承認待ちを避け、mvで擬似ゴミ箱へ移動させる全自動整理テクニック。","https://x.com/kawai_design","mv, trashフォルダ, 自動化","承認不要コマンドのワークフロー化"],
    ["SHIFT AI Blog","2026-03-28","Googleの新音楽生成モデル「Lyria 3 Pro」とは？料金や使い方、Suno・Udioとの違いを解説！","Gemini/トレンド","https://shift-ai.co.jp/blog/55211/","Lyria 3 ProはGoogle DeepMindが発表した最新AI音楽生成モデル。最長3分のフルソング生成・楽曲構造のプロンプト指定・画像からの音楽生成に対応。","Gemini / Suno AI / Udio / GUGA","Gemini, トレンド","Gemini の実務運用"],
    ["SHIFT AI Blog","2026-03-26","【2026年最新】Claude Codeの料金体系は？制限や用途別のおすすめプランも解説","Claude/ノウハウ","https://shift-ai.co.jp/blog/53404/","Claude Codeの料金体系を解説。個人向けProプラン（月額$20）からEnterprise向けまで複数プランがあり使用量に応じて選択可能。","Claude公式 / Claude APIドキュメント","Claude, ノウハウ","Claude の実務運用"],
    ["SHIFT AI Blog","2026-03-26","インフォグラフィックを作成できる生成AI12選！コツや生成時に役立つプロンプト・注意点まで網羅","生成AIツール/ノウハウ","https://shift-ai.co.jp/blog/53417/","Gemini・ChatGPT・Canvaなど12のツールを比較紹介。構成案作成から微調整まで段階的なプロンプト活用法。","Canva / Manus / Piktochart / Adobe Express / Visme","生成AIツール, ノウハウ","生成AIツール の実務運用"],
    ["SHIFT AI Blog","2025-12-06","Manusでスライドを自動生成する方法！生成のコツやコピペOKのプロンプトまで紹介","生成AIツール/ノウハウ","https://shift-ai.co.jp/blog/43721/","Manusはテーマから自動でプレゼン資料を生成するAIツール。構成設計から文章作成・デザインまで一貫して自動化。","Manus(https://manus.im)","生成AIツール, ノウハウ","生成AIツール の実務運用"],
    ["SHIFT AI Blog","2025-08-20","【画像を自由に操れる】画像生成AI「nano-banana」が登場！特徴や使い方を解説","生成AIツール/トレンド","https://shift-ai.co.jp/blog/34141/","Nano Banana ProはGemini 3 Pro基盤のGoogle開発画像生成モデル。日本語処理向上・最大14枚の画像合成が特徴。","Google DeepMind / NotebookLM / Genspark","生成AIツール, トレンド","生成AIツール の実務運用"],
    ["SHIFT AI Blog","2025-06-12","TikTokでAIマーメイド動画を作成する方法！作成できない時の対処法や注意点も","生成AIツール","https://shift-ai.co.jp/blog/26438/","TikTokの「AIマーメイドエフェクト」は顔写真1枚で人魚姿に変身できる無料AI機能。","TikTok / TikTok規約","生成AIツール","生成AIツール の実務運用"]
  ]);
}

function importYANAGI() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName("YANAGI");
  if(!s) return;
  s.clear();
  s.getRange(1,1,9,9).setValues([
    ["メディア","投稿日（推定）","タイトル／本文（抜粋）","カテゴリ","URL","メモ・要点","チェックすべき関連サイト","重要なワード","今後深堀すべきポイント"],
    ["X","2026-03-30","二本柳 亮（YANAGI）プロフィール：シンガーソングライター、AI・DX推進パートナー。SHIFT AI認定講師。","AI/クリエイティブ","https://x.com/ryonihonyanagi","音楽とテクノロジーの融合、アーティスト向けDX推進の基軸。","https://x.com/yanagi_shiftai","Art DX, AIエージェント, SHIFTAI","表現者の感性と技術力の融合"],
    ["SHIFT AI Blog","2025-12-06","NotebookLMにDeep Research機能が追加！使い方のコツやGemini・ChatGPTとの違いまで解説","Gemini/ノウハウ","https://shift-ai.co.jp/blog/43403/","NotebookLMのDeep Research機能は数百のWebサイトを自動調査し、信頼できる情報源付きのレポートを作成できる。","NotebookLM(https://notebooklm.google.com)","Gemini","Gemini の実務運用"],
    ["SHIFT AI Blog","2025-08-21","スプレッドシートのAI関数を使ってみてわかった！設定方法から活用方法まで","Gemini/ノウハウ","https://shift-ai.co.jp/blog/33929/","GoogleスプレッドシートでGeminiを直接利用できるAI関数機能。セル内で要約・分類・感情分析が可能。","Google Workspace / Workspace Labs","Gemini","Gemini の実務運用"],
    ["SHIFT AI Blog","2025-08-21","【未経験OK】AIエンジニアを目指せるプログラミングスクール10選！選び方のポイントも","AIキャリア・学習/ノウハウ","https://shift-ai.co.jp/blog/32359/","未経験者がAIエンジニアを目指すためのスクール10校を比較。","SAMURAI ENGINEER / DMM WEBCAMP / TechAcademy / キカガク","AIキャリア・学習, ノウハウ","AIキャリア・学習 の実務運用"],
    ["SHIFT AI Blog","2025-08-12","Geminiのファイル読み込みを完全マスター！方法やファイル形式・制限を解説","Gemini/ノウハウ","https://shift-ai.co.jp/blog/32275/","PDF・Excel・画像など複数形式に対応し最大100MBまでアップロード可能。","Gemini / Google AI Studio","Gemini","Gemini の実務運用"],
    ["SHIFT AI Blog","2025-06-13","NotebookLMで議事録を作成する方法！5つのプロンプトや注意点まで解説","Gemini/ノウハウ","https://shift-ai.co.jp/blog/26620/","NotebookLMはGoogleのAIノートツールで会議資料や音声データから自動で議事録作成が可能。","NotebookLM(https://notebooklm.google.com)","Gemini","Gemini の実務運用"],
    ["SHIFT AI Blog","2025-06-11","【使ってみた】OpenAIがo3-proをリリース！料金プランやo1-proとの違いも解説","ChatGPT/トレンド","https://shift-ai.co.jp/blog/26626/","OpenAI最高性能モデルo3-proはo1-proより高性能。","OpenAI Pricing(https://platform.openai.com/docs/pricing)","ChatGPT, トレンド","ChatGPT の実務運用"],
    ["SHIFT AI Blog","2025-04-11","Gemini APIの料金は？無料で使える範囲や使い方・3つの事例を紹介","Gemini/ノウハウ","https://shift-ai.co.jp/blog/20257/","Gemini APIは無料枠が充実。API料金体系・他社比較・事例を解説。","Google AI Studio / Gemini API / Google Colab","Gemini","Gemini の実務運用"]
  ]);
}

function importTOMOYA() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName("TOMOYA");
  if(!s) return;
  s.clear();
  s.getRange(1,1,16,9).setValues([
    ["メディア","投稿日（推定）","タイトル／本文（抜粋）","カテゴリ","URL","メモ・要点","チェックすべき関連サイト","重要なワード","今後深堀すべきポイント"],
    ["X","2026-03-30","安永 倫也（TOMOYA）プロフィール：SHIFT AIマネージャー、戦略参謀、ブランドアーキテクト。","AI/ビジネス","https://x.com/AIParaCareer","AIリテラシー教育（AIParaCareer）、SME向け戦略立案の専門家。","https://x.com/shota7180","戦略参謀, AIキャリアデザイン, Felo AI","構造×美意識×ロジックの三位一体"],
    ["X","2026-03-30","木内 翔大（TOMOYA/SHIFT AI代表）：SHIFT AI代表、エンジニア出身の起業家。","AI/ビジネス","https://x.com/shota7180","日本をAI先進国にするビジョン、大規模AIエコシステムの構築。","https://shiftai.jp/","SHIFT AI, 日本AI先進国化, 経営戦略","グローバルなAIトレンドの国内実装"],
    ["X","2026-04-02","YouTube公開：ターミナル完結！Claude Codeの使い方と設定 9分解説。","AI/教育","https://x.com/shota7180","導入から運用まで、エンジニア・非エンジニア問わず役立つターミナルAI活用術。","https://www.youtube.com/@shota_kiuchi","Claude Code, YouTube, 導入ガイド","ターミナルAIの普及速度"],
    ["X","2026-04-01","2026 AIトレンド通信 3月号リリース。テーマ『SaaSの死』を深く考察。","AI/ビジネス","https://x.com/shota7180","AIエージェントの普及によるSaaSモデルの変化と、次世代ビジネスモデルの展望。","https://shiftai.jp/","AIトレンド, SaaSの死, 戦略参謀","ビジネス構造の地殻変動"],
    ["X","2026-03-31","Claude Code × Codexプラグイン連携：ターミナル上での開発・レビューを最大効率化。","AI/開発","https://x.com/shota7180","ターミナル内だけでコード生成とレビューを完結させるシームレスな開発フロー。","https://x.com/shota7180","Codex, Claude Code, シームレス開発","プラグインエコシステム"],
    ["X","2026-03-31","Antigravity vs Cursor vs VS Code 頂上決戦。YANAGI, TERAMACHI, TOMOYAが各リーダーを担当。","AI/コーディング","https://x.com/shota7180","SHIFT AI主催のコーディングバトル。各AIツールの特性を活かした開発手法の競演。","https://shiftai.jp/","Antigravity, Cursor, コーディングバトル","ツール選定基準の標準化"],
    ["SHIFT AI Blog","2025-12-06","SHIFT AIで沖縄からキャリアを変える！地方でも可能なAI副業の始め方","AIキャリア・学習/ノウハウ","https://shift-ai.co.jp/blog/43970/","1,000本以上の動画教材・全47都道府県でのオフラインイベントにより地方在住者もAIスキル習得可能。","SHIFT AI / GUGA","AIキャリア・学習, ノウハウ","AIキャリア・学習 の実務運用"],
    ["SHIFT AI Blog","2025-08-21","AIは公平に・そして一貫して判断できるのか？──最新研究から読み解くAIの倫理観","有識者インタビュー","https://shift-ai.co.jp/blog/34318/","生成AIは「帰結主義」と「義務論」の異なる倫理観を持ち制限がある。AIの倫理的判断能力に関する最新研究。","モラル・マシン / arXiv論文","有識者インタビュー","有識者インタビュー の実務運用"],
    ["SHIFT AI Blog","2025-06-11","【前編】近い将来・日本に飢えが訪れる 鈴木宣弘が考える日本の食糧事情の未来とは？","AIビジネス活用","https://shift-ai.co.jp/blog/26673/","日本の食糧事情と未来に関する有識者の考察。","","AIビジネス活用","AIビジネス活用 の実務運用"],
    ["SHIFT AI Blog","2025-04-12","クラウドワークスAIは商用利用できる？安心して使う方法やおすすめ副業も紹介！","AIビジネス活用/ノウハウ","https://shift-ai.co.jp/blog/20579/","日本語対応で操作が簡単な生成AIツール。テキスト・画像・動画などを自動生成でき商用利用が可能。","クラウドワークスAI(https://ordermaid.ai)","AIビジネス活用, ノウハウ","AIビジネス活用 の実務運用"],
    ["SHIFT AI Blog","2025-04-11","【フロントランナーに聞く:02】AIが描くコーナーキックの理想形","有識者インタビュー/インタビュー","https://shift-ai.co.jp/blog/19615/","Google DeepMind開発のTacticAIがコーナーキック防御戦術を90%精度で提案。","Google DeepMind TacticAI / Barca Innovation Hub","有識者インタビュー, インタビュー","有識者インタビュー の実務運用"],
    ["SHIFT AI Blog","2025-04-09","AIに奪われない仕事ランキング13選！特徴と将来も安心な職種とは？","AIキャリア・学習/ノウハウ","https://shift-ai.co.jp/blog/19791/","感情理解・創造力・個別対応が求められる職種はAIに奪われにくい。","GUGA(https://guga.or.jp)","AIキャリア・学習, ノウハウ","AIキャリア・学習 の実務運用"],
    ["SHIFT AI Blog","2025-04-09","クラウドワークス初心者は月収いくら稼げる？4つのコツで収入アップ","AI副業/ノウハウ","https://shift-ai.co.jp/blog/20054/","得意分野への特化・低単価案件の回避・継続案件の獲得・AIツール活用の4つのコツを紹介。","クラウドワークス / GUGA","AI副業, ノウハウ","AI副業 の実務運用"],
    ["SHIFT AI Blog","2025-04-08","【2026年】東京の社会人向けAIスクール7選！教室選びの注意点も解説","AIキャリア・学習/ノウハウ","https://shift-ai.co.jp/blog/19885/","Winスクール・アビバ・ヒューマンアカデミーなど東京の社会人向けAIスクール7校を比較。","Winスクール / アビバ / ヒューマンアカデミー","AIキャリア・学習, ノウハウ","AIキャリア・学習 の実務運用"],
    ["SHIFT AI Blog","2025-01-21","生成AIを学べるおすすめスクール13校を徹底比較！損しないための選び方も解説","AIキャリア・学習/ノウハウ","https://shift-ai.co.jp/blog/15253/","レベル・サポート体制・学習期間と料金を選定基準として13校を比較。","キカガク / DMM生成AI CAMP / ホリエモンAI学校 / スキルアップAI","AIキャリア・学習, ノウハウ","AIキャリア・学習 の実務運用"]
  ]);
}

function importTERAMACHI() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName("TERAMACHI");
  if(!s) return;
  s.clear();
  s.getRange(1,1,7,9).setValues([
    ["メディア","投稿日（推定）","タイトル／本文（抜粋）","カテゴリ","URL","メモ・要点","チェックすべき関連サイト","重要なワード","今後深堀すべきポイント"],
    ["X","2026-03-30","Tera（TERAMACHI）：AIディレクター、コンテンツディレクター。","SEO/AI","https://x.com/tewriter_0327","SEOとマーケティングを融合させたCV重視のコンテンツ設計。AIによる効率化と人間力のシナジーを追求。","https://x.com/seiichi_satoweb","SEO, コンテンツディレクション, AI Director","CV重視の高品質コンテンツ設計"],
    ["X","2026-03-30","佐藤 誠一（TERAMACHI）：SEO & AIプロダクトエンジニア。","SEO/AI","https://x.com/seiichi_satoweb","11年のSEO経験とAIプロダクト開発。AI記事作成システムの構築、プロンプト開発の専門家。","https://x.com/tewriter_0327","AIエンジニアリング, SEO自動化, システム開発","SEO自動化と売上成長の技術的実装"],
    ["SHIFT AI Blog","2025-12-06","ChatGPTが文字数を守らない時の3つの対処法！プロンプトや注意点も紹介","ChatGPT/ノウハウ","https://shift-ai.co.jp/blog/43948/","制約を箇条書きで明示、短く書かせてから拡張、段落数を固定する3つの対処法を解説。","ChatGPT(https://chatgpt.com)","ChatGPT, ノウハウ","ChatGPT の実務運用"],
    ["SHIFT AI Blog","2025-06-13","ChatGPT登場でブログはオワコン？理由や活用のメリットデメリットを解説","ChatGPT/ノウハウ","https://shift-ai.co.jp/blog/26779/","専門性・一次情報・ストーリー性を備えた記事の価値。AIを効率化ツールとして活用するブログ運営。","Google Search Central / Search Engine Land","ChatGPT, ノウハウ","ChatGPT の実務運用"],
    ["SHIFT AI Blog","2025-01-21","生成AIのハルシネーションとは？発生する原因と3つの対策をわかりやすく解説","AIキャリア・学習/ノウハウ","https://shift-ai.co.jp/blog/15186/","誤情報を事実のように出力する現象の対策。プロンプト改善・ファクトチェックなど。","GUGA(https://guga.or.jp)","AIキャリア・学習, ノウハウ","AIキャリア・学習 の実務運用"],
    ["SHIFT AI Blog","2025-01-20","AI翻訳の副業は稼げる？怪しいと言われる理由や実態・初心者が始める方法まで解説！","AI副業/ノウハウ","https://shift-ai.co.jp/blog/15156/","ポストエディット方式が主流。専門分野特化と効率的なAI活用で稼ぎやすくなる。","クラウドワークス / ランサーズ","AI副業, ノウハウ","AI副業 の実務運用"]
  ]);
}

function importWEBER() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName("WEBER");
  if(!s) return;
  s.clear();
  s.getRange(1,1,5,9).setValues([
    ["メディア","投稿日（推定）","タイトル／本文（抜粋）","カテゴリ","URL","メモ・要点","チェックすべき関連サイト","重要なワード","今後深堀すべきポイント"],
    ["X","2026-03-30","WEBER：ウェビナー設計士、コミュニティ・マネージャー。","コミュニティ/デザイン","https://x.com/sesshuuX","雪舟館のウェビナー・コミュニティ運営を統括。参加者の体験設計と信頼構築の専門家。","https://github.com/yukikiki2011-cloud/sesshuu-anima/tree/main/WEBER","ウェビナー, コミュニティ設計, 体験デザイン","オンライン・オフライン統合体験の構築"],
    ["SHIFT AI Blog","2025-12-06","ChatGPTと友達になる方法！自分好みの友達にするためのプロンプトや注意点まで解説","ChatGPT/ノウハウ","https://shift-ai.co.jp/blog/43660/","プロンプト設定によりChatGPTを24時間対応の友達として活用。感情を気にせず相談でき話し方もカスタマイズ可能。","ChatGPT(https://chatgpt.com)","ChatGPT, ノウハウ","ChatGPT の実務運用"],
    ["SHIFT AI Blog","2025-06-13","AI業界第一人者による生成AIセミナー【無料・初心者向け】","AIキャリア・学習/ノウハウ","https://shift-ai.co.jp/blog/26774/","SHIFT AIが開催するAI初心者向け無料セミナー。累計申込10万人・満足度94.3%。","BCG / GUGA","AIキャリア・学習, ノウハウ","AIキャリア・学習 の実務運用"],
    ["SHIFT AI Blog","2025-01-21","AIを活用した副業スクールのおすすめ5選と後悔しないための5つのポイント","AI副業/ノウハウ","https://shift-ai.co.jp/blog/15129/","SHIFT AI・クラウドワークスAI道場などの5校を比較。主催者・副業種類・料金で選ぶ方法。","クラウドワークスAI道場 / DMM WEBCAMP / ホリエモンAI学校","AI副業, ノウハウ","AI副業 の実務運用"]
  ]);
}

// 全シート一括実行（上記を順番に呼び出す）
function importAll() {
  importKAWAI();
  SpreadsheetApp.flush();
  importYANAGI();
  SpreadsheetApp.flush();
  importTOMOYA();
  SpreadsheetApp.flush();
  importTERAMACHI();
  SpreadsheetApp.flush();
  importWEBER();
}
