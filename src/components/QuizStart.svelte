<script>
  export let totalQuestions = 0;
  export let onStart = () => {};
</script>

<div class="quiz-start">
  <h2>🎭 你是哪種心理類型？</h2>
  <p>這份測驗以《排球少年!!》中的五位學生為原型，每位角色代表一種獨特的學習與思維風格。<br>回答 {totalQuestions} 個情境問題，看看你最像誰！</p>
  
  <div class="instructions">
    <h3>📋 測驗說明</h3>
    <ul>
      <li>共 {totalQuestions} 題，每題有 5 個選項</li>
      <li>每個選項對應一種角色的思維傾向</li>
      <li>沒有標準答案，選最直覺的那個</li>
      <li>測完會出現你的匹配角色與特質報表</li>
    </ul>
  </div>
  
  <button class="btn btn-primary start-btn" on:click={onStart}>🚀 開始測驗</button>
</div>

<style>
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
</style>
