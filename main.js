// ─── Binary Rain ───
const canvas = document.getElementById('binary-rain');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const fontSize = 14;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array(columns).fill(1);

function drawRain() {
  ctx.fillStyle = 'rgba(5, 10, 21, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0ea5e9';
  ctx.font = fontSize + 'px JetBrains Mono, monospace';

  for (let i = 0; i < drops.length; i++) {
    const char = Math.random() > 0.5 ? '1' : '0';
    ctx.fillText(char, i * fontSize, drops[i] * fontSize);
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    const speed = 0.5;
    drops[i] += speed;
  }
  requestAnimationFrame(drawRain);
}
drawRain();

window.addEventListener('resize', () => {
  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
});

// ─── Nav Scroll Effect ───
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ─── Scroll Reveal ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// ─── Mobile Menu ───
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

// ─── Toast ───
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.transform = 'translateX(-50%) translateY(0)';
  t.style.opacity = '1';
  t.style.pointerEvents = 'auto';
  setTimeout(() => {
    t.style.transform = 'translateX(-50%) translateY(80px)';
    t.style.opacity = '0';
    t.style.pointerEvents = 'none';
  }, 3000);
}

// ─── Form Submit ───
function handleSubmit(e) {
  e.preventDefault();
  showToast('✓ message encrypted & queued for delivery');
  e.target.reset();
}

// ─── Init Lucide Icons ───
lucide.createIcons();
