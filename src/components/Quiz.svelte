<script>
  import { CHARACTERS, QUESTIONS } from '../data/quizData';
  import QuizStart from './QuizStart.svelte';
  import QuizQuestion from './QuizQuestion.svelte';
  import QuizResult from './QuizResult.svelte';

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
    userAnswers = [...userAnswers]; // Trigger reactivity
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
  <QuizStart 
    totalQuestions={QUESTIONS.length} 
    onStart={startQuiz} 
  />
{:else if step === 'quiz'}
  <QuizQuestion 
    currentQuestionIndex={currentQuestionIndex}
    totalQuestions={QUESTIONS.length}
    currentQ={currentQ}
    selectedOptionIndex={userAnswers[currentQuestionIndex]}
    progressPct={progressPct}
    isLastQuestion={isLastQuestion}
    onSelectOption={selectOption}
    onPrev={() => changeQuestion(-1)}
    onNext={() => changeQuestion(1)}
    onSubmit={submitQuiz}
  />
{:else if step === 'result'}
  <QuizResult 
    resultCharacter={resultCharacter}
    resultScores={resultScores}
    onRestart={restartQuiz}
  />
{/if}
