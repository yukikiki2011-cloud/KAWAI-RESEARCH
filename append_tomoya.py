import csv

rows = [
    ["prtimes","2025-01-14","SHIFT AIコミュニティ会員1万人達成 1月21日に記念イベント開催","コミュニティ","https://prtimes.jp/main/html/rd/p/000000095.000116644.html","会員1万人達成。250名超参加のリアルイベント開催","shift-ai.co.jp","コミュニティ会員数 / MEET UP 2025","会員数増加の速度推移"],
    ["prtimes","2025-03-02","2025 AIトレンド通信 2月号 2025年の生成AI業界を徹底予想","メディア","https://prtimes.jp/main/html/rd/p/000000114.000116644.html","AIエージェント元年・GPU需要・AI規制強化をテーマに予測","prtimes.jp","AIエージェント元年 / GPU需要","毎月のトレンド通信発行タイミング"],
    ["prtimes","2025-03-31","2025 AIトレンド通信 3月号 Geminiの新機能リリースを徹底解説","メディア","https://prtimes.jp/main/html/rd/p/000000123.000116644.html","Gemini 2.5 Pro experimentalの発表・Canvas機能を中心に解説","prtimes.jp","Gemini 2.5 / Canvas","Gemini vs Claude vs ChatGPT の比較記事戦略"],
    ["prtimes","2025-04-08","SHIFT AI for Biz AI検索エンジンコース受付開始","法人向けサービス","https://prtimes.jp/main/html/rd/p/000000125.000116644.html","AI検索エンジン（Perplexityなど）の活用を学ぶ法人向けeラーニングコース","shift-ai.co.jp","AI検索エンジン / Perplexity / 法人研修","法人向けコース拡充の月次リリース頻度"],
    ["prtimes","2025-04-24","47都道府県で超少人数AI共同作業会 ゆるっと作業会 47PROJECT 全日程確定","コミュニティ","https://prtimes.jp/main/html/rd/p/000000152.000116644.html","地域AI格差解消を目的に47都道府県で作業会を7月までに全都道府県開催","shift-ai.co.jp","47PROJECT / ゆるっと作業会 / 地域格差","地方会員への訴求戦略"],
    ["prtimes","2025-05-21","SHIFT AI代表 木内翔大 書籍 AIのド素人ですが10年後も仕事とお金に困らない方法を教えて下さい！発売","書籍出版","https://shift-ai.co.jp/news/post-24754/","KADOKAWA刊。AI初心者向けにAI時代を生き抜く方法を提示","kadokawa.co.jp","書籍出版 / KADOKAWA / AI初心者向け","累計部数・書籍をきっかけとした新規会員流入効果"],
    ["prtimes","2025-05-22","SHIFT AI代表 木内翔大 ひろゆき氏とYouTube番組ReHacQで対談 真のAI人材を語る","メディア出演","https://prtimes.jp/main/html/rd/p/000000141.000116644.html","ReHacQにてひろゆきと対談。AI失業の現状・真のAI人材・キャリア戦略をテーマに議論","youtube.com","ReHacQ / ひろゆき / AI失業 / 真のAI人材","YouTube対談の視聴数・SNS拡散効果"],
    ["prtimes","2025-05-29","SHIFT AI for Biz Difyコース提供開始","法人向けサービス","https://prtimes.jp/main/html/rd/p/000000142.000116644.html","ノーコードAIアプリ開発ツールDifyの活用コースを法人向けに提供開始","prtimes.jp","Dify / ノーコード / AIアプリ開発 / 法人","Difyを使った業務自動化案件の増加傾向分析"],
    ["prtimes","2025-05-30","SHIFT AI for Biz Microsoft 365 Copilotコース提供開始","法人向けサービス","https://prtimes.jp/main/html/rd/p/000000143.000116644.html","Microsoft 365 Copilotの活用を学ぶ法人向けeラーニングコース","prtimes.jp","Microsoft 365 Copilot / 法人研修","MicrosoftとSHIFT AIの協業可能性"],
    ["prtimes","2025-06-03","SHIFT AI コミュニティ会員2万人達成","コミュニティ成長","https://prtimes.jp/main/html/rd/p/000000150.000116644.html","2025年6月3日に累計会員2万人突破。初学者から経営層まで幅広い層に浸透","shift-ai.co.jp","会員2万人 / AI人材 / コミュニティ","会員属性の変化"],
    ["prtimes","2025-06-18","重版決定 木内翔大 書籍 発売後わずか1週間で5000部増刷","書籍","https://prtimes.jp/main/html/rd/p/000000151.000116644.html","AIのド素人ですがが発売後1週間で5000部増刷決定","kadokawa.co.jp","重版 / 5000部 / AIキャリア書籍","書籍の累計部数推移と読者層の分析"],
    ["prtimes","2025-06-30","2025 AIトレンド通信 6月号 主要AIツール別 最新動向","メディア","https://prtimes.jp/main/html/rd/p/000000154.000116644.html","6月の主要AIツールの最新アップデートを総まとめ","prtimes.jp","AIツール別動向 / OpenAI / Anthropic","毎月トレンド通信に掲載されるツール別の言及頻度の変化"],
    ["prtimes","2025-07-22","SHIFT AI代表 木内翔大 書籍累計3.6万部突破の中 出版記念講演会を開催","書籍・イベント","https://prtimes.jp/main/html/rd/p/000000158.000116644.html","7月19日ベルサール日本橋で300名超参加の出版記念講演会を開催","service.shift-ai.co.jp","出版記念講演 / 3.6万部 / AIキャリア戦略","講演イベントからのコミュニティ入会転換率の推計"],
    ["prtimes","2025-07-31","2025 AIトレンド通信 7月号 主要AIツール別 最新動向","メディア","https://prtimes.jp/main/html/rd/p/000000163.000116644.html","Grok 4・Perplexity Cometなどを解説","prtimes.jp","Grok 4 / Perplexity Comet / ChatGPT新機能","xAI（Grok）の台頭がSHIFT AIの講義コンテンツに与える影響"],
    ["prtimes","2025-08-26","1500名規模のリアルイベント SHIFT AI 2nd Anniversary を開催","コミュニティ・イベント","https://prtimes.jp/main/html/rd/p/000000169.000116644.html","2周年記念リアルイベントを8月30日ベルサール高田馬場で開催。1500名想定","service.shift-ai.co.jp","2nd Anniversary / AI人材表彰","2周年イベント参加者の業種・地域構成分析"],
    ["prtimes","2025-08-30","2025 AIトレンド通信 8月号 ビジネスに直結する注目アップデート","メディア","https://prtimes.jp/main/html/rd/p/000000173.000116644.html","8月の主要AIツール別アップデートをビジネス活用視点でまとめ","prtimes.jp","OpenAI / Anthropic / ビジネスAI活用 / 月次レポート","8月以降のAIエージェント普及加速との連動性"],
    ["prtimes","2025-10-06","SHIFT AI for Biz Claude Codeコース を提供開始","法人向けサービス","https://prtimes.jp/main/html/rd/p/000000184.000116644.html","Claude Codeコースを法人向けeラーニングで新規提供開始","prtimes.jp","Claude Code / AIコーディング / エンジニア向け","エンジニア向けAIコーディングコースの需要増加"],
    ["prtimes","2025-10-28","SHIFT AI for Biz 画像生成AIコース を2025年10月31日より提供開始","法人向けサービス","https://prtimes.jp/main/html/rd/p/000000191.000116644.html","画像生成AIの理論から実務活用まで学ぶ法人向けコース","prtimes.jp","画像生成AI / クリエイティブ / 法人向け","クリエイティブ職のAIリスキリング需要"],
    ["prtimes","2025-10-31","2025 AIトレンド通信 10月号 SHIFT AIが厳選するAI業界の必見アップデート","メディア","https://prtimes.jp/main/html/rd/p/000000195.000116644.html","10月のAI業界アップデート総まとめ","prtimes.jp","AI業界 / 月次レポート / 10月号","GPT-5やGemini 3の動向と法人向けコース内容の連動性"],
    ["prtimes","2025-11-18","SHIFT AI for Biz Claude Codeコース を大幅アップデート","法人向けサービス","https://prtimes.jp/main/html/rd/p/000000202.000116644.html","Claude Codeコースを大型アップデート。実践演習・基礎機能解説・応用テクニックを追加","prtimes.jp","Claude Code / コースアップデート / AIコーディング","Claude Codeの普及速度とSHIFT AIコース受講者数の相関"],
    ["prtimes","2025-11-30","2025 AIトレンド通信 11月号 SHIFT AIが厳選するAI業界の必見アップデート","メディア","https://prtimes.jp/main/html/rd/p/000000211.000116644.html","11月のAI業界トレンドまとめ。GPT-5・Gemini 3などの次世代モデルの進化を解説","prtimes.jp","GPT-5 / Gemini 3 / 次世代AIモデル","次世代モデルのリリース予測とSHIFT AIコース改訂タイミング"],
    ["prtimes","2025-12-19","AIは1年でここまで進化した！2025年のAIニュース振り返りと2026年の衝撃予想","年間まとめ","https://prtimes.jp/main/html/rd/p/000000216.000116644.html","2025年AI総括。DeepSeek-R1・Claude 3.7・Computer Use・Atlasを総括。2026年末に自律稼働AIが実現と予測","prtimes.jp","2025年AI総括 / AIエージェント / 自律稼働 / 2026年予測","2026年の自律AIエージェント商用化がSHIFT AIビジネスに与える影響"],
    ["prtimes","2026-01-13","AI失業はもう他人事ではない。2026年あなたの仕事と価値を守り抜く生存戦略","イベント告知","https://prtimes.jp/main/html/rd/p/000000223.000116644.html","2026年1月24日に全国47都道府県ライブビューイング開催。木内翔大・小澤健祐・川合卓也が登壇","service.shift-ai.co.jp","AI失業元年 / 生存戦略 / 47都道府県","AI失業の危機感を訴求するイベント集客の効果"],
    ["prtimes","2026-01-24","日本はAI失業を乗り越えられるか？47都道府県で提示された真のAI人材への転換イベントレポート","イベントレポート","https://prtimes.jp/main/html/rd/p/000000230.000116644.html","2026年1月24日開催イベントのレポート。47都道府県をリアルタイム接続","prtimes.jp","47都道府県 / AI人材転換 / 生存戦略","イベント参加者の属性の詳細分析"],
    ["prtimes","2026-01-30","2026 AIトレンド通信 1月号 AIに依存するとバカになるの真実","メディア","https://prtimes.jp/main/html/rd/p/000000232.000116644.html","MIT・ペンシルバニア大学等の研究を分析。AI依存による理解力低下・学習の浅化を指摘","prtimes.jp","AIバイアス / AI依存リスク / 学習低下","AI利用の深化に伴う教育・学習効果への影響"],
    ["prtimes","2026-02-27","2026 AIトレンド通信 2月号 AI失業の足音とAIエージェント時代の衝撃","メディア","https://prtimes.jp/main/html/rd/p/000000244.000116644.html","ILO 世界の労働者の4分の1がAIで職務の根本的変革を迫られる。自律型AIを指揮する能力の必要性を提言","prtimes.jp","AI失業 / ILO / AIエージェント / 労働市場二極化","AIエージェント時代における指揮する側のスキルセット深堀り"],
    ["prtimes","2026-03-16","47都道府県同時開催のAI×ショート動画戦略カンファレンスを4月18日に実施","イベント告知","https://prtimes.jp/main/html/rd/p/000000249.000116644.html","2026年4月18日ベルサール虎ノ門と全国47都道府県サテライト会場で同時開催。約500名規模","service.shift-ai.co.jp","AI×ショート動画 / 全国カンファレンス","動画マーケティング×AI活用という新領域への展開"],
    ["prtimes","2026-03-27","SHIFT AI 公式YouTubeチャンネル SHIFT AI ch 始動","YouTubeチャンネル","https://prtimes.jp/main/html/rd/p/000000252.000116644.html","公式YouTubeチャンネルSHIFT AI chが3月27日に始動。芸人・森田哲矢参加のエンタメシリーズ","youtube.com/@SHIFTAIch","SHIFT AI ch / YouTube公式 / 判断軸","YouTubeチャンネル立ち上げによるオーガニック流入増加"],
    ["prtimes","2026-03-31","2026 AIトレンド通信 3月号 SaaSの死が告げる企業システムの終焉","メディア","https://prtimes.jp/main/html/rd/p/000000254.000116644.html","SaaSocalypseをテーマに。AnthropicのClaude Coworkの登場がSaaS市場を破壊。FDEという新職種を提言","prtimes.jp","SaaSの死 / AIエージェント / FDE / Claude Cowork","SaaSからAIエージェント基盤への移行がSHIFT AIビジネスに与える機会"],
    ["GPT（AIParaCareer）","2025-06-01","SHIFT AI 副業ライティング先生（ChatGPT GPT）","GPTサービス","https://chatgpt.com/g/g-3zvMPoGRS-shift-ai-fu-ye-raiteinkuxian-sheng","AIParaCareerが作成・公開したChatGPT GPT。SHIFT AI関連の副業ライティングに特化","chatgpt.com","AIParaCareer / GPT / 副業ライティング","AIParaCareer（安永倫也）の独自GPT開発と収益化モデルの深堀り"],
    ["SHIFT AI 実績インタビュー","2024-12-01","地方×AIで100万人に1人の人材に。未経験から月収100万円のリアル","インタビュー・事例","https://service.shift-ai.co.jp/result/interview/interview-01/","安永倫也（AIコンサルタント）がSHIFT AIでAIスキルを習得し福祉業界での業務自動化を実現。月収100万円達成","service.shift-ai.co.jp","安永倫也 / AIコンサルタント / 福祉業界 / 業務自動化","安永倫也のその後の活動（AIParaCareer）と雪舟館メンバーとしての位置づけ"],
]

with open("RESEARCH_TOMOYA.csv", "a", newline="", encoding="utf-8") as f:
    writer = csv.writer(f)
    writer.writerows(rows)

with open("RESEARCH_TOMOYA.csv", encoding="utf-8") as f:
    print(f"TOMOYA total: {sum(1 for _ in f)} lines")
