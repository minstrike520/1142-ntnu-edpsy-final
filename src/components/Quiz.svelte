<script>
  // ============================================================
  // DATA
  // ============================================================
  const CHARACTERS = [
    {
      id: 'A',
      name: '阿瑟 — 分析師',
      emoji: '🦉',
      color: '#7c4dff',
      trait: '深度思考型',
      desc: '你是《學習冒險隊》中沉穩的智慧擔當阿瑟。你習慣蒐集資訊、仔細分析後才行動，思維嚴謹、邏輯清晰。你最大的優勢是深度理解，偶爾需要注意不要過度分析而陷入「分析癱瘓」。'
    },
    {
      id: 'B',
      name: '蘿拉 — 探索者',
      emoji: '🦊',
      color: '#ff7043',
      trait: '勇於嘗試型',
      desc: '你是勇敢的探索者蘿拉！你喜歡在行動中學習，不怕犯錯、勇於嘗試新事物。你的學習動力來自好奇心，能快速適應變化。保持這份衝勁，同時記得偶爾停下來整合所學！'
    },
    {
      id: 'C',
      name: '米米 — 協作者',
      emoji: '🐬',
      color: '#26a69a',
      trait: '社交學習型',
      desc: '你是溫暖有活力的協作者米米！你在團隊互動中學習效率最高，善於傾聽、整合意見，也能激勵他人。你的同理心是最強的學習工具，在群體中你會發光！'
    },
    {
      id: 'D',
      name: '奇奇 — 創意師',
      emoji: '🦋',
      color: '#f06292',
      trait: '跨域連結型',
      desc: '你是充滿創意的跨域思考者奇奇！你擅長把不同領域的知識連結在一起，產生獨特見解。你的學習方式非線性，卻能創造出令人驚喜的成果。學習對你而言是一場創作！'
    },
    {
      id: 'E',
      name: '艾里 — 堅守者',
      emoji: '🐢',
      color: '#66bb6a',
      trait: '深耕練習型',
      desc: '你是穩健的堅守者艾里！你相信「熟能生巧」，透過反覆練習與刻意訓練達到精熟。你不追求速度，但你的學習成果往往最紮實持久。「慢慢來，比較快」是你的座右銘！'
    }
  ];

  const QUESTIONS = [
    {
      id: 1,
      scenario: '📖 情境：你剛拿到一本全新的教科書',
      text: '你拿到一本從未接觸過的新科目教科書，你第一個動作是？',
      tag: '學習起點',
      options: [
        { text: '先翻到目錄，把整本架構看完再開始。', score: { A: 3 } },
        { text: '直接翻到最有趣的章節，跳著讀。', score: { B: 3 } },
        { text: '拍照傳給同學，問他們哪部分最重要。', score: { C: 3 } },
        { text: '隨手翻翻，看圖表和標題，找感覺。', score: { D: 3 } },
        { text: '從第一頁開始，一字不漏地讀完第一章。', score: { E: 3 } }
      ]
    },
    {
      id: 2,
      scenario: '🤔 情境：你遇到一道不會的難題',
      text: '考試或作業中遇到一道完全不懂的題目，你的反應是？',
      tag: '面對挑戰',
      options: [
        { text: '先標記起來，把其他題做完後回來研究。', score: { A: 2, E: 1 } },
        { text: '立刻嘗試各種解法，就算寫錯也沒關係。', score: { B: 3 } },
        { text: '偷偷問旁邊的同學，或想等等討論。', score: { C: 3 } },
        { text: '用類比或故事想像它的意思，換個角度思考。', score: { D: 3 } },
        { text: '回憶練習過的類題，一步一步套用公式。', score: { E: 3 } }
      ]
    },
    {
      id: 3,
      scenario: '📝 情境：準備重要考試',
      text: '距離大考還有兩週，你會怎麼制定複習計畫？',
      tag: '備考策略',
      options: [
        { text: '建立詳細時間表，每天要完成哪些章節全寫清楚。', score: { A: 3 } },
        { text: '大概掃一下，遇到不懂的馬上搜尋或嘗試。', score: { B: 3 } },
        { text: '揪朋友一起讀書，互相出題考彼此。', score: { C: 3 } },
        { text: '做一張心智圖，把所有知識點連起來。', score: { D: 3 } },
        { text: '把歷年考古題一題一題刷完，刻意練習弱點。', score: { E: 3 } }
      ]
    },
    {
      id: 4,
      scenario: '🎮 情境：學習新技能',
      text: '你要學一個全新的技能（如彈吉他、寫程式），你會怎麼開始？',
      tag: '技能習得',
      options: [
        { text: '先找理論資料看完，搞清楚底層原理再動手。', score: { A: 3 } },
        { text: '直接上手摸索，邊做邊學，犯錯就改。', score: { B: 3 } },
        { text: '找一個已經會的朋友帶著我入門。', score: { C: 3 } },
        { text: '搜尋有沒有好玩或非典型的學習資源。', score: { D: 3 } },
        { text: '找到一套固定課程，每天練習固定時間。', score: { E: 3 } }
      ]
    },
    {
      id: 5,
      scenario: '💬 情境：組員報告意見不同',
      text: '小組報告時，你提出的方向和其他人想法不同，你怎麼辦？',
      tag: '團隊合作',
      options: [
        { text: '提出數據和邏輯依據，理性說明自己的想法。', score: { A: 3 } },
        { text: '先說「不然就試試看我的方法，不行再換」。', score: { B: 3 } },
        { text: '想辦法找到融合大家想法的中間方案。', score: { C: 3 } },
        { text: '把兩個方案腦力激盪，看能不能碰出新火花。', score: { D: 3 } },
        { text: '按照大家之前說好的分工方式執行就好。', score: { E: 3 } }
      ]
    },
    {
      id: 6,
      scenario: '😵 情境：讀到腦霧',
      text: '你已經讀書兩小時，開始感到疲倦，注意力渙散，你會？',
      tag: '自我調節',
      options: [
        { text: '查一下專注力的研究，看怎樣休息最科學。', score: { A: 3 } },
        { text: '乾脆換去嘗試另一個科目或新方法轉換心情。', score: { B: 3 } },
        { text: '傳訊息給朋友抱怨，或約人聊幾分鐘再繼續。', score: { C: 3 } },
        { text: '用音樂或塗鴉幫大腦充電，激發另一種感知。', score: { D: 3 } },
        { text: '按計畫設15分鐘計時器休息，時間到繼續。', score: { E: 3 } }
      ]
    },
    {
      id: 7,
      scenario: '🔍 情境：主題報告研究',
      text: '老師出了一個開放性主題報告，你最先做什麼？',
      tag: '自主研究',
      options: [
        { text: '拆解問題，列出「需要知道什麼」的清單。', score: { A: 3 } },
        { text: '直接Google搜尋，看跳出什麼有趣的東西。', score: { B: 3 } },
        { text: '問同學選什麼題目，一起討論方向。', score: { C: 3 } },
        { text: '往自己興趣的方向走，找一個別人沒想到的角度。', score: { D: 3 } },
        { text: '先收集夠多資料，再開始動筆。', score: { E: 3 } }
      ]
    },
    {
      id: 8,
      scenario: '🌙 情境：睡前回顧',
      text: '你在睡前想要「鞏固今天所學」，你的做法是？',
      tag: '記憶鞏固',
      options: [
        { text: '在筆記本上整理今天學到的重點知識。', score: { A: 3 } },
        { text: '思考明天可以怎麼應用今天學到的東西。', score: { B: 2, D: 1 } },
        { text: '把今天印象最深的事情說給家人或朋友聽。', score: { C: 3 } },
        { text: '用顏色或圖像在腦海中重現今天的內容。', score: { D: 3 } },
        { text: '用間隔重複APP複習今天新增的記憶卡片。', score: { E: 3 } }
      ]
    },
    {
      id: 9,
      scenario: '🎯 情境：你收到一個批評',
      text: '老師批評你的報告「太過表面、缺乏深度」，你的第一反應是？',
      tag: '成長回應',
      options: [
        { text: '仔細分析哪些地方不夠深，找出根本問題。', score: { A: 3 } },
        { text: '馬上重寫，邊做邊想怎麼改進。', score: { B: 3 } },
        { text: '找同學看看他們覺得哪裡可以加強。', score: { C: 3 } },
        { text: '換一個更創新的切入點重新詮釋主題。', score: { D: 3 } },
        { text: '對照老師給的評分標準，按項目一一改進。', score: { E: 3 } }
      ]
    },
    {
      id: 10,
      scenario: '🚀 情境：學習成就感',
      text: '什麼樣的學習經驗會讓你覺得「今天超有收穫」？',
      tag: '學習動力',
      options: [
        { text: '終於搞清楚一個困惑很久的原理，豁然開朗。', score: { A: 3 } },
        { text: '親手完成一個新東西，哪怕不完美。', score: { B: 3 } },
        { text: '和他人一起解決了難題，過程很有趣。', score: { C: 3 } },
        { text: '發現兩個不同領域的知識竟然有共通之處。', score: { D: 3 } },
        { text: '完成了今天的學習計畫，達到預設目標。', score: { E: 3 } }
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
    <p>這份測驗以《筆記學院》中的五位學生為原型，每位角色代表一種獨特的學習與思維風格。<br>回答 10 個情境問題，看看你最像誰！</p>
    
    <div class="instructions">
      <h3>📋 測驗說明</h3>
      <ul>
        <li>共 10 題，每題有 5 個選項</li>
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
      <div class="character-name">{resultCharacter.name}</div>
      <div class="character-trait">{resultCharacter.trait}</div>
      <p class="character-desc">{resultCharacter.desc}</p>
    </div>

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
