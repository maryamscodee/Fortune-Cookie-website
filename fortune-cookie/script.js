// =========================================
//  FORTUNE COOKIE — script.js
// =========================================

// ---- Fortune List (40 fortunes) ----
const FORTUNES = [
  "Something wonderful is closer than you think.",
  "Your next idea may be your best one.",
  "Good things take time. Keep going.",
  "A small decision today can change your tomorrow.",
  "The best is yet to come — keep the door open.",
  "Kindness given freely returns tenfold.",
  "Adventure awaits those bold enough to seek it.",
  "You have more strength than you know.",
  "A fresh start begins the moment you decide.",
  "Patience is the quiet form of power.",
  "Every expert was once a beginner. Begin.",
  "Your creativity is your greatest gift — use it.",
  "The stars are aligned in your favour today.",
  "One kind word can change someone's entire day.",
  "You are exactly where you need to be right now.",
  "Great journeys begin with a single small step.",
  "Believe in the magic of new beginnings.",
  "What you seek is also seeking you.",
  "Laughter is the shortest distance between two hearts.",
  "Your future is brighter than it seems tonight.",
  "Be curious. The answers will follow.",
  "The right moment is always now.",
  "Persistence turns obstacles into stepping stones.",
  "A warm smile is the universal language of kindness.",
  "Trust the timing of your life.",
  "Courage is not the absence of fear — it's moving forward anyway.",
  "The seeds you plant today will bloom in their own time.",
  "Home is wherever you bring your whole heart.",
  "Small acts of generosity ripple further than you know.",
  "Your story is not over yet — the best chapters lie ahead.",
  "Look for beauty in unexpected places.",
  "Stillness is where your answers live.",
  "Celebrate the small wins — they add up.",
  "Wisdom grows in quiet moments of reflection.",
  "You are capable of extraordinary things.",
  "Every day is a fresh page in your story.",
  "Let go of what no longer serves you.",
  "The universe conspires in favour of the curious mind.",
  "Joy is not a destination — it's the journey itself.",
  "Today's challenge is tomorrow's strength.",
];

// ---- State ----
let lastFortuneIndex = -1;  // Track last shown fortune to avoid repeats
let isAnimating = false;     // Prevent double-clicks during animation

// ---- DOM References ----
const openBtn     = document.getElementById('openBtn');
const nextBtn     = document.getElementById('nextBtn');
const fortuneSlip = document.getElementById('fortuneSlip');
const fortuneText = document.getElementById('fortuneText');
const cookieWrapper = document.getElementById('cookieWrapper');

// ---- Initialize ----
function init() {
  generateStars();
  cookieWrapper.classList.add('idle'); // Start idle floating animation
  openBtn.addEventListener('click', handleOpenFortune);
  nextBtn.addEventListener('click', handleNextFortune);
}

// ---- Get a Random Fortune (no immediate repeat) ----
function getRandomFortune() {
  if (FORTUNES.length === 1) return FORTUNES[0];

  let index;
  do {
    index = Math.floor(Math.random() * FORTUNES.length);
  } while (index === lastFortuneIndex);

  lastFortuneIndex = index;
  return FORTUNES[index];
}

// ---- Handle "Open Your Fortune" click ----
function handleOpenFortune() {
  if (isAnimating) return;
  isAnimating = true;
  openBtn.disabled = true;

  // Stop idle float
  cookieWrapper.classList.remove('idle');

  // 1. Crack the cookie
  cookieWrapper.classList.add('cracking');

  // 2. After crack animation, hide cookie and show fortune
  setTimeout(() => {
    cookieWrapper.classList.add('cracked');   // fade cookie out
    showFortune();
  }, 500);

  // 3. Reveal the "Get Another Fortune" button after the slip appears
  setTimeout(() => {
    nextBtn.hidden = false;
    // Small entrance animation for next button
    nextBtn.style.animation = 'none';
    requestAnimationFrame(() => {
      nextBtn.style.animation = '';
    });
    isAnimating = false;
  }, 1050);
}

// ---- Handle "Get Another Fortune" click ----
function handleNextFortune() {
  if (isAnimating) return;
  isAnimating = true;

  // Hide the fortune slip with a quick fade
  fortuneSlip.classList.remove('visible');
  fortuneSlip.style.opacity = '0';
  fortuneSlip.style.transform = 'translate(-50%, -50%) scale(0.85)';
  fortuneSlip.style.transition = 'opacity 0.25s ease, transform 0.25s ease';

  setTimeout(() => {
    // Reset fortune slip styles
    fortuneSlip.style.transition = '';
    fortuneSlip.style.transform = '';

    // Reset and re-show cookie
    resetCookie();

    // After cookie resets, let user click again
    setTimeout(() => {
      openBtn.disabled = false;
      openBtn.hidden = false;
      nextBtn.hidden = true;
      isAnimating = false;
      cookieWrapper.classList.add('idle');
    }, 500);
  }, 300);
}

// ---- Show fortune on the slip ----
function showFortune() {
  const fortune = getRandomFortune();
  fortuneText.textContent = fortune;

  // Reset state
  fortuneSlip.style.opacity    = '';
  fortuneSlip.style.transform  = '';
  fortuneSlip.classList.remove('visible');

  // Force reflow so animation replays
  void fortuneSlip.offsetWidth;

  fortuneSlip.classList.add('visible');
}

// ---- Reset cookie back to its original un-cracked state ----
function resetCookie() {
  // Remove all cracking-related classes
  cookieWrapper.classList.remove('cracking', 'cracked', 'resetting');

  // Force a reflow to reset CSS animations
  void cookieWrapper.offsetWidth;

  cookieWrapper.classList.add('resetting');

  // Remove resetting flag after one frame
  requestAnimationFrame(() => {
    cookieWrapper.classList.remove('resetting');
  });
}

// ---- Generate star background particles ----
function generateStars() {
  const container = document.getElementById('stars');
  const COUNT = 60;

  for (let i = 0; i < COUNT; i++) {
    const star = document.createElement('div');
    star.className = 'star';

    const size  = Math.random() * 2.5 + 1;      // 1–3.5 px
    const x     = Math.random() * 100;           // % left
    const y     = Math.random() * 100;           // % top
    const dur   = (Math.random() * 3 + 2).toFixed(1) + 's';   // 2–5s
    const delay = (Math.random() * 4).toFixed(1) + 's';       // 0–4s

    star.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${x}%;
      top: ${y}%;
      --dur: ${dur};
      --delay: ${delay};
    `;

    container.appendChild(star);
  }
}

// ---- Kick everything off ----
init();
