<script>
  export let resultCharacter = null;
  export let resultScores = [];
  export let onRestart = () => {};
</script>

<div class="result-page">
  <div class="result-header">
    <h2>🎊 你的測驗結果</h2>
    <p>根據你的答題傾向，最符合你的角色是⋯⋯</p>
  </div>

  {#if resultCharacter}
    <div class="character-result" style="border-color: {resultCharacter.color}; box-shadow: 10px 10px 0 {resultCharacter.color};">
      <span class="character-emoji">{resultCharacter.emoji}</span>
      {#if resultCharacter.image}
        <img class="character-photo" src={resultCharacter.image} alt={`${resultCharacter.name} 角色圖片`} loading="lazy" />
      {/if}
      <div class="character-name">{resultCharacter.name}</div>
      <div class="character-trait">{resultCharacter.trait}</div>
      <p class="character-desc">{resultCharacter.desc}</p>
    </div>

    {#if resultCharacter.reportImage}
      <div class="report-image-container">
        <h3>📄 學習特質分析報告書</h3>
        <img class="report-image" src={resultCharacter.reportImage} alt="分析報告書" loading="lazy" />
        <a class="btn btn-primary download-btn" href={resultCharacter.reportImage} download>📥 下載報告書</a>
      </div>
    {/if}

    {#if resultCharacter.realExample}
      <div class="real-example-card" style="border-color: {resultCharacter.color}; box-shadow: 6px 6px 0 {resultCharacter.color};">
        <h3>🌟 實際案例<br>{resultCharacter.realExample.title}</h3>
        <p>{resultCharacter.realExample.content}</p>
      </div>
    {/if}
  {/if}

  {#if resultScores && resultScores.length > 0}
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
  {/if}

  <div class="result-actions">
    <button class="btn btn-coral" on:click={onRestart}>🔄 重新測驗</button>
    <a class="btn btn-secondary" href="/blog">📚 去看文章</a>
  </div>
</div>

<style>
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
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(20px) rotate(1deg); }
    to { opacity: 1; transform: translateY(0) rotate(0); }
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
</style>
