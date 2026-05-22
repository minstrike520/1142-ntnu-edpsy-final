<script>
  // ============================================================
  // DATA
  // ============================================================
  const CHARACTERS = [
    {
      id: 'A',
      name: '影山飛雄',
      emoji: '🦅',
      color: '#7c4dff',
      trait: '觀察模仿型',
      image: '/kageyama_tobio.webp',
      reportImage: '/report_kageyama_tobio.jpg',
      desc: '你擅長觀察高手的解題與規劃，將關鍵步驟內化成自己的學習系統。',
      realExample: {
        title: '【美國籃球巨星：科比·布萊恩 (Kobe Bryant)】',
        content: '傳奇球星 Kobe Bryant 在剛進入 NBA 時，將「籃球之神」麥可·喬丹 (Michael Jordan) 視為終極楷模。Kobe 不僅反覆觀看喬丹的比賽錄影帶，逐幀拆解他的後仰跳投、腳步移動和突破時機，甚至連喬丹在場上的小動作和垃圾話都一併模仿。Kobe 透過這種高度專注的「觀察學習」與不斷「再生」練習，最終將喬丹的技術轉化為自己的武器，成為新一代的傳奇。這正是透過注意、保持、再生與動機，完美複製楷模成功的經典案例。'
      }
    },
    {
      id: 'B',
      name: '北信介',
      emoji: '🧭',
      color: '#ff7043',
      trait: '自我調整型',
      image: '/kita_shinsuke.webp',
      reportImage: '/report_kita_shinsuke.jpg',
      desc: '你擅長用內在對話監控自己，靠紀律與自我指導穩定推進。',
      realExample: {
        title: '【日本傳奇棒球名將：鈴木一朗】',
        content: '鈴木一朗以驚人的自律與「自我調節」聞名於世。他從國小開始，每天不論颳風下雨都堅持練球，並在日記中寫下精準的自我反思與下一步計畫。到了大聯盟，他每天進球場的時間、拉筋的動作順序、賽前吃的食物、甚至球具的擺放位置，都精準到近乎制式化。一朗曾說：「達成夢想的方法，就是累積每一個微不足道的小步驟。」他不是靠突發的靈感，而是靠高度的自我監控與常規建立來維持巔峰狀態。'
      }
    },
    {
      id: 'C',
      name: '日向翔陽',
      emoji: '🎨',
      color: '#26a69a',
      trait: '雙碼整合型',
      image: '/hinata_shouyou.jpg',
      reportImage: '/report_hinata_shouyou.jpg',
      desc: '你用圖像與文字雙軌處理資訊，將抽象概念轉化成清晰畫面。',
      realExample: {
        title: '【世紀天才科學家：阿爾伯特·愛因斯坦 (Albert Einstein)】',
        content: '愛因斯坦曾透露，他在思考科學理論時，大腦裡最先出現的往往不是數學公式或文字，而是「視覺圖像」與「空間感」。例如，他在推導狹義相對論時，是在腦中想像「自己正騎在一束光線上前進，手上拿著鏡子」的畫面；在思考廣義相對論時，則是想像「時空像一張被鉛球壓凹的彈簧床」。他將這些抽象的文字概念與具體的視覺表徵進行雙碼整合，最終才轉化為數學公式。'
      }
    },
    {
      id: 'D',
      name: '及川徹',
      emoji: '🔥',
      color: '#f06292',
      trait: '自我實現型',
      image: '/oikawa_tooru.jpg',
      reportImage: '/report_oikawa_tooru.jpg',
      desc: '你被內在成長驅動，重視意義感與舞台感，投入時爆發力十足。',
      realExample: {
        title: '【發明大王：湯瑪斯·愛迪生 (Thomas Edison)】',
        content: '愛迪生在研發電燈泡的過程中，經歷了數千次的失敗。外界普遍認為他很痛苦、面臨巨大挫折，但愛迪生卻說：「我從未失敗過，我只是成功發現了數千種行不通的方法。」對他而言，研究不是為了應付誰，而是為了滿足內心對真理探索的最高渴望。當他在實驗室裡達到廢寢忘食的「心流」狀態時，生理的疲憊和外界的雜音都被自動屏蔽，這種純粹由內在動機驅使、不斷突破自我極限的過程，正是 Maslow 所說的「自我實現」。'
      }
    },
    {
      id: 'E',
      name: '孤爪研磨',
      emoji: '🎮',
      color: '#66bb6a',
      trait: '操作制約型',
      image: '/kozume_kenma.jpg',
      reportImage: '/report_kozume_kenma.jpg',
      desc: '你偏好明確的回饋機制，用獎勵與後果塑造穩定的讀書習慣。',
      realExample: {
        title: '【知名心理學家與作家：B.F. 史金納 (B.F. Skinner)】',
        content: '提出操作制約理論的心理學大師 Skinner 本人，就是這個理論的最佳實踐者！他在撰寫龐大的學術論文與著作時，為了克服拖延症，每天都會為自己設定極其精準的字數目標。每當他寫滿一定的字數，他就會拉動一個自製的計數器，給自己一個小小的「正增強」（例如：允許自己休息幾分鐘、喝杯咖啡或聽一段音樂）。他正是透過這種將大任務拆解成小關卡，並給予即時回饋的方式，高效完成了大量的學術成就。'
      }
    }
  ];

  const REPORTS = {
    A: {
      title: '學習特質分析報告書 (A)',
      subtitle: '【模仿的天才：影山飛雄型】—— 觀察模仿型學習者',
      coreTheory: 'Bandura 社會學習論（Social Learning Theory）',
      keyMechanism: '注意（Attention）➡️ 保持（Retention）➡️ 再現（Reproduction）➡️ 動機（Motivation）',
      sections: [
        
      ]
    },
    B: {
      title: '學習特質分析報告書 (B)',
      subtitle: '【大腦控制塔：北信介型】—— 自我調整型學習者',
      coreTheory: 'Meichenbaum 認知行為改變技術（Cognitive Behavior Modification）',
      keyMechanism: '自我對話（Self-Talk）➡️ 自我指導（Self-Guidance）➡️ 認知行為監控',
      sections: [
        {
          heading: '一、特質概述與行為模式',
          paragraphs: [
            '你就像稻荷崎隊長北信介，不依賴瞬間的爆發力或熱血，而是依靠無懈可擊的「常態與紀律」。你是極度理性的「大腦指揮官」，讀書時習慣在內心跟自己對話、下指令。當發現自己分心時，你不會陷入情緒化的焦慮，而是冷靜地對自己進行微監控：「專心點，再撐 10 分鐘就把這段看完。」'
          ]
        },
        {
          heading: '二、理論深度剖析',
          paragraphs: [
            '根據麥肯鮑姆（Meichenbaum）的認知行為改變技術，你非常擅長運用「自我指導訓練」（Self-Instructional Training）來改變自己的認知與行為：'
          ],
          bullets: [
            {
              label: '語言導引行為：',
              text: '你將外在的學習規則內化為自身的「內部語言（Inner Speech）」。透過在心中條列步驟、自我提問與確認，成功排除外界干擾。'
            },
            {
              label: '高度的後設認知：',
              text: '你對自己的思維狀態瞭如指掌，能像第三人稱一樣客觀評估目前的學習進度與專注度，並即時修正。'
            }
          ]
        },
        {
          heading: '三、潛在盲點與優化建議',
          bullets: [
            {
              label: '潛在盲點：',
              text: '過度緊繃、追求完美的步驟。一旦計劃被突發事件打亂，容易產生過度的自我譴責，或因為大腦長期處於監控狀態而感到心智疲勞。'
            }
          ],
          numbered: [
            '允許「容錯率」：在規劃時間表時，刻意留出「空白彈性時間（Buffer Time）」，接受計劃趕不上變化的現實。',
            '正面語言替代：自我對話時，多使用「我可以試試看…」的積極語句，少用「我必須/我絕對不能…」的強迫性語句。'
          ]
        }
      ]
    },
    C: {
      title: '學習特質分析報告書 (C)',
      subtitle: '【多媒體防禦家：日向翔陽型】—— 雙碼整合型學習者',
      coreTheory: 'Mayer 多媒體學習理論（Multimedia Learning Theory）& Paivio 雙碼理論',
      keyMechanism: '雙重軌道（Dual Channels）➡️ 有限容量（Limited Capacity）➡️ 主動處理（Active Processing）',
      sections: [
        {
          heading: '一、特質概述與行為模式',
          paragraphs: [
            '這類型的學習者如同充滿畫面感的日向翔陽，對於死板、密密麻麻的純文字課本有著天然的排斥，但對圖像、動畫、圖表和色彩卻有著驚人的直覺。你喜歡看懶人包、動畫演示影片，且在讀書讀不下去時，會主動透過「動手畫」心智圖、流程圖或表格，把抽象概念具象化，大腦才能真正活化。'
          ]
        },
        {
          heading: '二、理論深度剖析',
          paragraphs: [
            '根據梅耶（Mayer）的多媒體學習理論與雙碼理論（Dual-Coding Theory），你的大腦運作高度依賴「視覺與語文雙軌並進」：'
          ],
          bullets: [
            {
              label: '雙重軌道處理：',
              text: '你的大腦在處理資訊時，視覺通道（圖像、符號）與聽覺/語文通道（文字、聲音）是獨立且同時運作的。當兩者產生聯結時，你的理解力會呈指數型上升。'
            },
            {
              label: '主動構建心理表徵：',
              text: '你將文字轉化為心智圖的過程，正是多媒體學習中最核心的「主動處理」——選擇資訊、組織資訊，並與既有知識進行整合。'
            }
          ]
        },
        {
          heading: '三、潛在盲點與優化建議',
          bullets: [
            {
              label: '潛在盲點：',
              text: '容易被「精美的視覺」分散注意力（例如花了三小時在把筆記畫得很漂亮，卻沒記住核心觀念）；另外，面對完全沒有圖表的純文字申論或論述題時，容易感到挫折。'
            }
          ],
          numbered: [
            '先核心、後美化：畫心智圖或表格時，先用單色原子筆快速勾勒邏輯架構，確認理解正確後，再用顏色做重點標記。',
            '文字圖像化訓練：面對純文字教材時，嘗試在腦海中想像一個「情境畫面」或「動態影片」，主動建立視覺編碼。'
          ]
        }
      ]
    },
    D: {
      title: '學習特質分析報告書 (D)',
      subtitle: '【內發動力機：及川徹型】—— 自我實現型學習者',
      coreTheory: 'Maslow 需求層次論（Hierarchy of Needs）',
      keyMechanism: '成長需求（Growth Needs）➡️ 內發動機（Intrinsic Motivation）➡️ 自我實現',
      sections: [
        {
          heading: '一、特質概述與行為模式',
          paragraphs: [
            '你如同青葉城西的隊長及川徹，擁有極強的自尊心與不甘認輸的驕傲。外在的獎勵（如零用錢、獎品）很難真正打動你，外在的逼迫也只會讓你反彈。能讓你挑燈夜戰的，永遠是那種「渴望變強」、「渴望超越昨天的自己」、「證明自己能做到」的內在渴望。你高度重視讀書時的身心狀態與環境氛圍，因為你需要一個能讓你完全投入、展現潛能的舞台。'
          ]
        },
        {
          heading: '二、理論深度剖析',
          paragraphs: [
            '根據馬斯洛（Maslow）的需求層次論，你屬於典型的「成長需求（Growth Needs）」驅動者：'
          ],
          bullets: [
            {
              label: '自我實現趨向：',
              text: '你的學習動機來自於「知」的渴望與自我潛能的發揮。當你解開一道難題時，帶給你最大快樂的是那種純粹的、從內心湧現的自我實現感與成長感。'
            },
            {
              label: '身心飽和度：',
              text: '成長需求要在「基本需求（如睡眠、安全感、受尊重的氛圍）」得到滿足後才會強烈展現。因此，當你心情煩躁或環境吵雜時，基本需求受阻，內發動機就會暫時熄火。'
            }
          ]
        },
        {
          heading: '三、潛在盲點與優化建議',
          bullets: [
            {
              label: '潛在盲點：',
              text: '情緒與動機起伏較大。當這門學科讓你找不到「意義感」，或是環境讓你覺得不舒服、不受尊重時，你可能會出現嚴重的拖延症或直接放棄。'
            }
          ],
          numbered: [
            '重塑學科意義：面對枯燥的必修科目，不要硬讀。試著去尋找這門學科與你未來夢想、或個人核心能力之間的「隱藏聯結」，賦予它內在價值。',
            '打造儀式感環境：為自己固定的讀書時間建立「神聖空間」（如特定的咖啡廳、乾淨的書桌、抗噪耳機），確保基本需求快速沉澱，釋放內發動力。'
          ]
        }
      ]
    },
    E: {
      title: '學習特質分析報告書 (E)',
      subtitle: '【行為塑造師：孤爪研磨型】—— 操作制約型學習者',
      coreTheory: 'Skinner 操作制約理論（Operant Conditioning）',
      keyMechanism: '效果律（Law of Effect）➡️ 正/負增強（Positive/Negative Reinforcement）➡️ 誘因結構',
      sections: [
        {
          heading: '一、特質概述與行為模式',
          paragraphs: [
            '你就像音駒的高中生腦袋孤爪研磨，把學習當作一場「打怪升級」的遊戲。你不太相信抽象的熱血或夢想，你更相信實質的「反饋機制」。你非常擅長透過「給自己甜頭」來誘騙大腦開始工作。不論是讀完兩章就能滑手機、吃大餐（正增強），或是為了今晚能熬夜看影集而逼自己下午讀完（負增強避開後果），你的行為完全由「結果」來決定。'
          ]
        },
        {
          heading: '二、理論深度剖析',
          paragraphs: [
            '根據斯金納（Skinner）的操作制約理論與桑代克的法律效果律，你的行為模式深受「後果（Consequences）」的塑造：'
          ],
          bullets: [
            {
              label: '正/負增強的交互運用：',
              text: '你是設計「增強物（Reinforcers）」的天才。滿意的結果會加強該學習行為的重複可能性，而不滿意的後果（如被當、沒時間玩）則會促使你採取行動去規避。'
            },
            {
              label: '即時反饋依賴：',
              text: '你的大腦對「即時獎勵」非常敏感。這也是為什麼明確的積分、搶答加分或排名的制約機制最能激發你在課堂上的幹勁。'
            }
          ]
        },
        {
          heading: '三、潛在盲點與優化建議',
          bullets: [
            {
              label: '潛在盲點：',
              text: '容易產生「獎勵飽和」或「走捷徑」心理。如果獎勵不夠吸引人，動機就會瞬間崩潰；有時為了趕快拿到滑手機的獎勵，可能會流於表面敷衍的讀書，而沒有真正理解。'
            }
          ],
          numbered: [
            '代幣制度（Token Economy）：不要每讀 10 分鐘就給一次大獎。改用累積點數制（例如：專心 25 分鐘得一點，集滿四點才能換一個大獎勵），拉長行為堅持的時間。',
            '間歇增強（Intermittent Reinforcement）：當讀書習慣逐漸養成後，刻意讓獎勵變得「隨機」，例如讀完後擲骰子決定今晚能玩多久遊戲，這種不可預測性會讓大腦多巴胺分泌更旺盛，行為更持久。'
          ]
        }
      ]
    }
  };

  const QUESTIONS = [
    {
      id: 1,
      scenario: '🧭 情境：接觸陌生高難度科目',
      text: '當你開始接觸一個全新、難度極高的陌生科目時，你的第一步通常是？',
      tag: '學習起點',
      options: [
        { text: '去找班上學霸的筆記，或是上網看大神分享的「神級讀書 VLOG」，觀察他們怎麼規劃與解題。', score: { A: 3 } },
        { text: '先在心裡跟自己對話、下指令，冷靜規劃步驟：「好，我先花十分鐘看目錄，把不懂的標出來」。', score: { B: 3 } },
        { text: '上網找圖解、懶人包或有動畫演示的教學影片，覺得看圖比死看密密麻麻的純文字好懂太多了。', score: { C: 3 } },
        { text: '覺得「身心狀態」最重要！如果沒睡飽、環境太吵或心情很煩，我絕對一頁課本也讀不進去。', score: { D: 3 } },
        { text: '為自己設定一個即時獎勵（如：讀完這兩章，我就能滑手機 15 分鐘或吃頓好料），才有動力開始。', score: { E: 3 } }
      ]
    },
    {
      id: 2,
      scenario: '📵 情境：讀書分心',
      text: '讀書讀到一半，當你突然發現自己分心、想玩手機時，你通常怎麼拉回注意力？',
      tag: '自我調節',
      options: [
        { text: '想像那些實力很強的楷模，告訴自己：「這時候那些高手一定還在堅持，我也不能輸！」', score: { A: 3 } },
        { text: '啟動大腦內部對話，對自己進行微監控：「專心點！再撐 10 分鐘這部分就看完了，把注意力拉回來！」', score: { B: 3 } },
        { text: '改用另一種方式整理資訊，把課本文字動手畫成心智圖、表格或流程圖，強迫大腦主動動起來。', score: { C: 3 } },
        { text: '停下來思考這門科目對我的意義，告訴自己這是為了「我的未來夢想」而讀，而不是為了應付考試。', score: { D: 3 } },
        { text: '提醒自己如果不趕快讀完，今天晚上就不能去看想看的影集了（利用負增強避開討厭的後果）。', score: { E: 3 } }
      ]
    },
    {
      id: 3,
      scenario: '🧠 情境：新題型挑戰',
      text: '面對考試或模擬考中從未見過的超創新題型，你的大腦第一時間會？',
      tag: '臨場反應',
      options: [
        { text: '試圖回想高手或老師遇過類似考題時的應變邏輯，嘗試模仿他們的解題思路。', score: { A: 3 } },
        { text: '像冷靜的指揮官一樣在心裡引導自己：「不要慌，先列出已知條件、再推導公式，一步步來」。', score: { B: 3 } },
        { text: '在腦中主動整合題目給的文字脈絡與圖表資訊，尋找視覺與語文訊息之間的隱藏聯結。', score: { C: 3 } },
        { text: '相信自己的潛能，這是我超越極限、自我實現的機會，決定靠自己的內發意志力克服它。', score: { D: 3 } },
        { text: '想到如果這題寫對、成績變好，我就能獲得滿意的結果（如：家人的讚賞或自我獎勵），因此充滿幹勁。', score: { E: 3 } }
      ]
    },
    {
      id: 4,
      scenario: '✨ 情境：學習成就感',
      text: '當你花了很多精力，終於理解一個超難的概念時，你的「成就感」主要來自？',
      tag: '學習動機',
      options: [
        { text: '我終於掌握了這個技能，能像我一直崇拜、注意的楷模一樣利落地解開難題了。', score: { A: 3 } },
        { text: '這種從一開始不會、到透過「自我對話與指導」成功掌控自己行為的過程，讓我極有成就感。', score: { B: 3 } },
        { text: '這種大腦雙軌運作成功，把混亂的文字與抽象的圖像整合出清晰心理表徵的「看懂感」。', score: { C: 3 } },
        { text: '感受到自己內在的進步與成長，這種純粹「超越昨天自己」的自我實現感。', score: { D: 3 } },
        { text: '理解這個概念能讓我在接下來的考試中獲得好分數、或是避免被當的悲慘後果（效果律）。', score: { E: 3 } }
      ]
    },
    {
      id: 5,
      scenario: '🏫 情境：課堂偏好',
      text: '如果能自由挑選，你最喜歡什麼樣的課堂環境或學習方式？',
      tag: '學習環境',
      options: [
        { text: '老師上課時會親自、詳細地示範每一個解題步驟，讓我能百分之百複製並模仿每一個細節。', score: { A: 3 } },
        { text: '老師上課不拖泥帶水，會留給我們自學、自我監控進度以及遇到問題自我調整的空間。', score: { B: 3 } },
        { text: '簡報和板書設計得極具美感與圖文邏輯，能引導我的聽覺與視覺同時主動處理訊息。', score: { C: 3 } },
        { text: '氛圍真誠、互相尊重，且給予學生高度的自由選擇權，激發我們內發性的自願探索。', score: { D: 3 } },
        { text: '有明確的積分獎勵、搶答加分或排名的制約機制，每達成一個章節就有即時的滿意結果。', score: { E: 3 } }
      ]
    },
    {
      id: 6,
      scenario: '🚀 情境：高效讀書',
      text: '回顧你過往最好的學習經驗，你覺得自己能「高效讀書」的絕對關鍵是？',
      tag: '關鍵策略',
      options: [
        { text: '找到一個實力強大的「楷模」，並透過觀察與模仿他的讀書模式，讓自己少走很多彎路。', score: { A: 3 } },
        { text: '培養強大的「內心對話程序」，在讀書時隨時監控自己的認知進度與專注度。', score: { B: 3 } },
        { text: '拒絕純文字的密集疲勞轟炸，善用多媒體與圖文整合，活化大腦的雙重軌道處理。', score: { C: 3 } },
        { text: '點燃內發性的熱情，不是為了任何外在考卷或逼迫，而是自己真正渴望變強。', score: { D: 3 } },
        { text: '幫大腦設計一套獎懲分明的操作系統，透過增強物來強烈塑造出固定的讀書慣性。', score: { E: 3 } }
      ]
    }
  ];

  const letters = ['A', 'B', 'C', 'D', 'E'];

  // ============================================================
  // STATE
  // ============================================================
  let step = 'start'; // 'start' | 'quiz' | 'result'
  let currentQuestionIndex = 0;
  let userAnswers = new Array(QUESTIONS.length).fill(null);
  
  let resultCharacter = null;
  let resultScores = null;

  // Derived state
  $: currentQ = QUESTIONS[currentQuestionIndex];
  $: progressPct = Math.round(((currentQuestionIndex + 1) / QUESTIONS.length) * 100);
  $: isLastQuestion = currentQuestionIndex === QUESTIONS.length - 1;

  // ============================================================
  // LOGIC
  // ============================================================
  function startQuiz() {
    step = 'quiz';
    currentQuestionIndex = 0;
    userAnswers = new Array(QUESTIONS.length).fill(null);
    window.scrollTo(0, 0);
  }

  function selectOption(idx) {
    userAnswers[currentQuestionIndex] = idx;
  }

  function changeQuestion(dir) {
    const next = currentQuestionIndex + dir;
    if (next >= 0 && next < QUESTIONS.length) {
      currentQuestionIndex = next;
    }
  }

  function submitQuiz() {
    // Calculate scores
    const scores = { A: 0, B: 0, C: 0, D: 0, E: 0 };
    userAnswers.forEach((ans, qi) => {
      if (ans === null) return;
      const optionScore = QUESTIONS[qi].options[ans].score;
      Object.entries(optionScore).forEach(([k, v]) => { scores[k] += v; });
    });

    // Find winner
    const winnerId = Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
    resultCharacter = CHARACTERS.find(c => c.id === winnerId);
    
    // Prepare detailed scores
    const total = Object.values(scores).reduce((a, b) => a + b, 0) || 1;
    resultScores = CHARACTERS.map(c => ({
      ...c,
      pct: Math.round((scores[c.id] / total) * 100),
      isWinner: c.id === winnerId
    }));

    step = 'result';
    launchConfetti();
    window.scrollTo(0, 0);
  }

  function restartQuiz() {
    step = 'start';
    currentQuestionIndex = 0;
    userAnswers = new Array(QUESTIONS.length).fill(null);
    window.scrollTo(0, 0);
  }

  function launchConfetti() {
    const colors = ['#ffd94a','#ff7043','#26a69a','#7c4dff','#f06292','#66bb6a','#ffa726'];
    for (let i = 0; i < 60; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.cssText = `
        left:${Math.random()*100}vw;
        top:${-20 + Math.random()*20}px;
        background:${colors[Math.floor(Math.random()*colors.length)]};
        width:${6+Math.random()*10}px;
        height:${6+Math.random()*10}px;
        border-radius:${Math.random()>0.5?'50%':'2px'};
        animation-duration:${2+Math.random()*2.5}s;
        animation-delay:${Math.random()*1.2}s;
      `;
      document.body.appendChild(piece);
      piece.addEventListener('animationend', () => piece.remove());
    }
  }
</script>

{#if step === 'start'}
  <div class="quiz-start">
    <h2>🎭 你是哪種心理類型？</h2>
    <p>這份測驗以《排球少年!!》中的五位學生為原型，每位角色代表一種獨特的學習與思維風格。<br>回答 {QUESTIONS.length} 個情境問題，看看你最像誰！</p>
    
    <div class="instructions">
      <h3>📋 測驗說明</h3>
      <ul>
        <li>共 {QUESTIONS.length} 題，每題有 5 個選項</li>
        <li>每個選項對應一種角色的思維傾向</li>
        <li>沒有標準答案，選最直覺的那個</li>
        <li>測完會出現你的匹配角色與特質報表</li>
      </ul>
    </div>
    
    <button class="btn btn-primary start-btn" on:click={startQuiz}>🚀 開始測驗</button>
  </div>
{:else if step === 'quiz'}
  <div class="quiz-wrapper">
    <div class="quiz-header-bar">
      <h2>🎭 學習型人格測驗</h2>
      <p>選出最符合你直覺反應的選項，不需要想太多！</p>
    </div>
    
    <div class="progress-bar-wrap">
      <div class="progress-bar-fill" style="width:{progressPct}%"></div>
    </div>
    <div class="progress-text">第 {currentQuestionIndex + 1} 題 / 共 {QUESTIONS.length} 題</div>

    {#key currentQuestionIndex}
      <div class="question-card">
        <span class="question-tag">{currentQ.tag}</span>
        <div class="question-scenario">{currentQ.scenario}</div>
        <div class="question-text">{currentQ.text}</div>
        
        <div class="options-list">
          {#each currentQ.options as opt, i}
            <div 
              class="option-item" 
              class:selected={userAnswers[currentQuestionIndex] === i}
              on:click={() => selectOption(i)}
              on:keydown={(e) => e.key === 'Enter' && selectOption(i)}
              role="button"
              tabindex="0"
            >
              <span class="option-letter">{letters[i]}</span>
              <span class="option-text">{opt.text}</span>
            </div>
          {/each}
        </div>
      </div>
    {/key}

    <div class="quiz-nav">
      <button 
        class="btn-prev" 
        on:click={() => changeQuestion(-1)} 
        disabled={currentQuestionIndex === 0}
      >← 前一個</button>
      
      {#if !isLastQuestion}
        <button class="btn-next" on:click={() => changeQuestion(1)}>下一個 →</button>
      {:else}
        <button class="btn-submit" on:click={submitQuiz}>🎉 查看結果</button>
      {/if}
    </div>
  </div>
{:else if step === 'result'}
  <div class="result-page">
    <div class="result-header">
      <h2>🎊 你的測驗結果</h2>
      <p>根據你的答題傾向，最符合你的角色是⋯⋯</p>
    </div>

    <div class="character-result" style="border-color: {resultCharacter.color}; box-shadow: 10px 10px 0 {resultCharacter.color};">
      <span class="character-emoji">{resultCharacter.emoji}</span>
      {#if resultCharacter && resultCharacter.image}
        <img class="character-photo" src={resultCharacter.image} alt={`${resultCharacter.name} 角色圖片`} loading="lazy" />
      {/if}
      <div class="character-name">{resultCharacter.name}</div>
      <div class="character-trait">{resultCharacter.trait}</div>
      <p class="character-desc">{resultCharacter.desc}</p>
    </div>

    {#if resultCharacter && resultCharacter.reportImage}
      <div class="report-image-container">
        <h3>📄 學習特質分析報告書</h3>
        <img class="report-image" src={resultCharacter.reportImage} alt="分析報告書" loading="lazy" />
        <a class="btn btn-primary download-btn" href={resultCharacter.reportImage} download>📥 下載報告書</a>
      </div>
    {/if}

    {#if resultCharacter && resultCharacter.realExample}
      <div class="real-example-card" style="border-color: {resultCharacter.color}; box-shadow: 6px 6px 0 {resultCharacter.color};">
        <h3>🌟 實際案例<br>{resultCharacter.realExample.title}</h3>
        <p>{resultCharacter.realExample.content}</p>
      </div>
    {/if}

    <div class="scores-breakdown">
      <h3>📊 各角色傾向分析</h3>
      <div id="scoresDetail">
        {#each resultScores as score}
          <div class="score-row">
            <div class="score-label">
              {score.emoji} 
              {#if score.isWinner}
                <strong>{score.id}</strong>
              {:else}
                {score.id}
              {/if}
            </div>
            <div class="score-track">
              <div class="score-fill" style="width:{score.pct}%;background:{score.color};"></div>
            </div>
            <div class="score-num">{score.pct}%</div>
          </div>
        {/each}
      </div>
    </div>

    <div class="result-actions">
      <button class="btn btn-coral" on:click={restartQuiz}>🔄 重新測驗</button>
      <a class="btn btn-secondary" href="/blog">📚 去看文章</a>
    </div>
  </div>
{/if}

<style>
  /* Local Scoped Styles */
  .quiz-start {
    max-width: 780px; margin: 0 auto; padding: 60px 24px;
    text-align: center;
  }
  .quiz-start h2 {
    font-family: 'Caveat', cursive; font-size: 3rem; font-weight: 700; margin-bottom: 20px;
  }
  .quiz-start p {
    font-size: 1.15rem; color: var(--gray); line-height: 1.8; margin-bottom: 40px;
  }
  .quiz-start .instructions {
    background: var(--paper); border: 3px dashed var(--ink); border-radius: 20px;
    padding: 32px; text-align: left; max-width: 500px; margin: 0 auto 48px;
    box-shadow: 6px 6px 0 var(--pink);
  }
  .quiz-start .instructions h3 {
    font-size: 1.3rem; font-weight: 800; margin-bottom: 16px; text-align: center;
  }
  .quiz-start .instructions ul { list-style: none; }
  .quiz-start .instructions li {
    font-size: 1.05rem; margin-bottom: 12px; display: flex; gap: 10px; align-items: flex-start;
  }
  .quiz-start .instructions li::before { content: '✨'; font-size: 1.1rem; }
  .start-btn { font-size: 1.15rem; padding: 16px 32px; border-radius: 16px; }

  /* Quiz Core */
  .quiz-wrapper {
    max-width: 780px; margin: 0 auto; padding: 40px 24px 100px;
  }
  .quiz-header-bar {
    text-align: center; margin-bottom: 32px;
  }
  .quiz-header-bar h2 {
    font-family: 'Caveat', cursive; font-size: 2.2rem; font-weight: 700;
    margin-bottom: 8px;
  }
  .quiz-header-bar p { color: var(--gray); font-size: 0.9rem; }

  /* Progress */
  .progress-bar-wrap {
    background: rgba(255,255,255,0.7); border: 3px solid var(--ink);
    border-radius: 40px; padding: 6px; margin-bottom: 8px;
    box-shadow: 3px 3px 0 var(--ink);
  }
  .progress-bar-fill {
    height: 18px; border-radius: 30px;
    background: linear-gradient(90deg, var(--coral), var(--yellow));
    transition: width 0.5s cubic-bezier(.36,.07,.19,.97);
    position: relative; min-width: 18px;
  }
  .progress-bar-fill::after {
    content: '✏️';
    position: absolute; right: -4px; top: -4px;
    font-size: 1.1rem;
  }
  .progress-text {
    text-align: right; font-size: 0.85rem; color: var(--gray);
    font-weight: 700; margin-bottom: 24px;
    font-family: 'Caveat', cursive; font-size: 1rem;
  }

  /* Question card */
  .question-card {
    background: var(--paper); border: 3px solid var(--ink);
    border-radius: 24px; padding: 40px 36px;
    box-shadow: 8px 8px 0 var(--ink);
    position: relative; overflow: hidden;
    margin-bottom: 24px;
    animation: cardIn 0.4s ease both;
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(20px) rotate(1deg); }
    to { opacity: 1; transform: translateY(0) rotate(0); }
  }

  .question-tag {
    display: inline-block;
    background: var(--purple); color: #fff;
    font-size: 0.78rem; font-weight: 800;
    padding: 4px 14px; border-radius: 20px;
    border: 2px solid var(--ink); margin-bottom: 16px;
    font-family: 'Nunito', sans-serif;
  }

  .question-scenario {
    background: rgba(255,217,74,0.3);
    border-left: 4px solid var(--yellow);
    padding: 12px 16px; border-radius: 0 12px 12px 0;
    font-size: 0.85rem; color: var(--gray);
    margin-bottom: 20px; font-style: italic;
  }

  .question-text {
    font-size: clamp(1.1rem, 3vw, 1.35rem);
    font-weight: 700; line-height: 1.6;
    margin-bottom: 28px;
    font-family: 'Noto Serif TC', serif;
  }

  /* Options */
  .options-list { display: flex; flex-direction: column; gap: 12px; }
  .option-item {
    display: flex; align-items: flex-start; gap: 14px;
    background: var(--cream); border: 3px solid var(--light-gray);
    border-radius: 16px; padding: 16px 20px;
    cursor: pointer; transition: all 0.18s;
    position: relative;
  }
  .option-item:hover {
    border-color: var(--teal); background: rgba(38,166,154,0.07);
    transform: translateX(6px);
    box-shadow: 4px 4px 0 var(--teal);
  }
  .option-item.selected {
    border-color: var(--coral); background: rgba(255,112,67,0.1);
    box-shadow: 4px 4px 0 var(--coral);
  }
  .option-letter {
    width: 32px; height: 32px; border-radius: 50%;
    background: var(--light-gray); border: 2px solid var(--ink);
    display: flex; align-items: center; justify-content: center;
    font-weight: 800; font-size: 0.85rem; flex-shrink: 0;
    transition: all 0.18s;
  }
  .option-item.selected .option-letter {
    background: var(--coral); color: #fff; border-color: var(--coral);
  }
  .option-text { font-size: 0.95rem; line-height: 1.5; }

  /* Nav buttons */
  .quiz-nav {
    display: flex; justify-content: space-between; gap: 16px;
    padding: 20px; background: var(--paper);
    border: 3px solid var(--ink); border-radius: 20px;
    box-shadow: 5px 5px 0 var(--ink);
  }
  .quiz-nav button {
    font-family: 'Nunito', sans-serif; font-weight: 800; font-size: 1rem;
    padding: 12px 28px; border-radius: 12px; border: 3px solid var(--ink);
    cursor: pointer; transition: all 0.15s; display: flex; align-items: center; gap: 8px;
  }
  .quiz-nav button:disabled { opacity: 0.35; cursor: not-allowed; transform: none !important; box-shadow: none !important; }
  .btn-prev { background: var(--cream); color: var(--ink); box-shadow: 4px 4px 0 var(--ink); }
  .btn-prev:hover:not(:disabled) { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
  .btn-next { background: var(--coral); color: #fff; box-shadow: 4px 4px 0 var(--ink); }
  .btn-next:hover:not(:disabled) { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }
  .btn-submit { background: var(--teal); color: #fff; box-shadow: 4px 4px 0 var(--ink); }
  .btn-submit:hover:not(:disabled) { transform: translate(-2px, -2px); box-shadow: 6px 6px 0 var(--ink); }

  /* Result Page */
  .result-page {
    max-width: 860px; margin: 0 auto;
    padding: 40px 24px 100px;
  }
  .result-header { text-align: center; margin-bottom: 40px; }
  .result-header h2 { font-family: 'Caveat', cursive; font-size: 2.8rem; font-weight: 700; margin-bottom: 12px; }

  .character-result {
    background: var(--paper); border: 4px solid var(--ink);
    border-radius: 28px; padding: 40px 36px;
    text-align: center; margin-bottom: 32px;
    animation: cardIn 0.5s ease both;
  }
  .character-emoji { font-size: 5rem; margin-bottom: 16px; display: block; }
  .character-photo {
    width: min(220px, 60vw); height: auto; display: block; margin: 0 auto 18px;
    border-radius: 18px; border: 3px solid var(--ink); box-shadow: 6px 6px 0 var(--ink);
    background: #fff;
  }
  .character-name {
    font-family: 'Caveat', cursive; font-size: 2.4rem; font-weight: 700;
    margin-bottom: 8px;
  }
  .character-trait {
    display: inline-block; background: var(--yellow); color: var(--ink);
    font-weight: 800; font-size: 0.9rem;
    padding: 6px 20px; border-radius: 20px; border: 2px solid var(--ink);
    margin-bottom: 20px;
  }
  .character-desc {
    font-size: 1.05rem; line-height: 1.75; color: var(--gray);
    max-width: 560px; margin: 0 auto;
  }

  .scores-breakdown {
    background: var(--paper); border: 3px solid var(--ink);
    border-radius: 20px; padding: 28px 32px;
    box-shadow: 6px 6px 0 var(--ink); margin-bottom: 28px;
  }
  .scores-breakdown h3 {
    font-family: 'Caveat', cursive; font-size: 1.6rem; margin-bottom: 20px;
  }
  .score-row {
    display: flex; align-items: center; gap: 14px;
    margin-bottom: 16px;
  }
  .score-label {
    width: 120px; font-size: 0.85rem; font-weight: 700; flex-shrink: 0;
    display: flex; align-items: center; gap: 6px;
  }
  .score-track {
    flex: 1; height: 20px; background: var(--light-gray);
    border-radius: 30px; border: 2px solid var(--ink); overflow: hidden;
  }
  .score-fill {
    height: 100%; border-radius: 30px;
    transition: width 1s ease 0.3s;
  }
  .score-num {
    width: 36px; text-align: right; font-size: 0.85rem; font-weight: 800;
    color: var(--gray);
  }

  .report-image-container {
    background: var(--paper); border: 3px solid var(--ink); border-radius: 24px;
    padding: 32px; box-shadow: 6px 6px 0 var(--ink); margin-bottom: 32px;
    text-align: center;
  }
  .report-image-container h3 {
    font-family: 'Caveat', cursive; font-size: 2rem; margin-bottom: 16px;
  }
  .report-image {
    max-width: 100%; height: auto; border: 3px solid var(--ink); border-radius: 12px;
    margin-bottom: 24px; display: block;
  }
  .download-btn {
    display: inline-block; background: var(--teal); color: #fff;
    border: 3px solid var(--ink); box-shadow: 4px 4px 0 var(--ink);
    padding: 12px 28px; border-radius: 12px; font-weight: 800; font-size: 1rem;
    text-decoration: none; transition: transform 0.2s, box-shadow 0.2s;
  }
  .download-btn:hover {
    box-shadow: 6px 6px 0 var(--ink); transform: translate(-2px, -2px);
  }

  .real-example-card {
    background: var(--paper); border: 3px solid var(--ink); border-radius: 24px;
    padding: 32px; box-shadow: 6px 6px 0 var(--ink); margin-bottom: 32px;
    text-align: left;
  }
  .real-example-card h3 {
    font-size: 1.4rem; line-height: 1.5; margin-bottom: 12px; font-weight: 800;
  }
  .real-example-card p {
    color: var(--gray); line-height: 1.8; font-size: 1.05rem;
  }

  .result-actions { display: flex; gap: 16px; flex-wrap: wrap; justify-content: center; }
  .btn-coral {
    background: var(--coral); color: #fff;
    border: 3px solid var(--ink); box-shadow: 4px 4px 0 var(--ink);
    padding: 12px 28px; border-radius: 12px; font-weight: 800; font-size: 0.95rem; cursor: pointer;
  }
  .btn-coral:hover { box-shadow: 6px 6px 0 var(--ink); transform: translate(-2px, -2px); }

  @media (max-width: 768px) {
    .question-card { padding: 28px 22px; }
    .quiz-nav { flex-direction: column; }
    .quiz-nav button { justify-content: center; }
  }
</style>
