<script>
  export let currentQuestionIndex = 0;
  export let totalQuestions = 0;
  export let currentQ = null;
  export let selectedOptionIndex = null;
  export let progressPct = 0;
  export let isLastQuestion = false;

  export let onSelectOption = (idx) => {};
  export let onPrev = () => {};
  export let onNext = () => {};
  export let onSubmit = () => {};

  const letters = ['A', 'B', 'C', 'D', 'E'];
</script>

<div class="quiz-wrapper">
  <div class="quiz-header-bar">
    <h2>🎭 學習型人格測驗</h2>
    <p>選出最符合你直覺反應的選項，不需要想太多！</p>
  </div>
  
  <div class="progress-bar-wrap">
    <div class="progress-bar-fill" style="width:{progressPct}%"></div>
  </div>
  <div class="progress-text">第 {currentQuestionIndex + 1} 題 / 共 {totalQuestions} 題</div>

  {#key currentQuestionIndex}
    {#if currentQ}
      <div class="question-card">
        <span class="question-tag">{currentQ.tag}</span>
        <div class="question-scenario">{currentQ.scenario}</div>
        <div class="question-text">{currentQ.text}</div>
        
        <div class="options-list">
          {#each currentQ.options as opt, i}
            <div 
              class="option-item" 
              class:selected={selectedOptionIndex === i}
              on:click={() => onSelectOption(i)}
              on:keydown={(e) => e.key === 'Enter' && onSelectOption(i)}
              role="button"
              tabindex="0"
            >
              <span class="option-letter">{letters[i]}</span>
              <span class="option-text">{opt.text}</span>
            </div>
          {/each}
        </div>
      </div>
    {/if}
  {/key}

  <div class="quiz-nav">
    <button 
      class="btn-prev" 
      on:click={onPrev} 
      disabled={currentQuestionIndex === 0}
    >← 前一個</button>
    
    {#if !isLastQuestion}
      <button class="btn-next" on:click={onNext}>下一個 →</button>
    {:else}
      <button class="btn-submit" on:click={onSubmit}>🎉 查看結果</button>
    {/if}
  </div>
</div>

<style>
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

  @media (max-width: 768px) {
    .question-card { padding: 28px 22px; }
    .quiz-nav { flex-direction: column; }
    .quiz-nav button { justify-content: center; }
  }
</style>
