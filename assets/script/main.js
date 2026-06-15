const emojis = ['🌸','🌺','💗','🌷','💕','✨','🌹'];

for (let i = 0; i < 16; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  p.style.left = Math.random() * 100 + '%';
  p.style.top = '-30px';
  p.style.animationDuration = (6 + Math.random() * 8) + 's';
  p.style.animationDelay = (Math.random() * 10) + 's';
  p.style.fontSize = (14 + Math.random() * 12) + 'px';
  document.body.appendChild(p);
}

function openEnv() {
  document.getElementById('flap').classList.add('open');
  setTimeout(() => {
    document.getElementById('envView').style.display = 'none';
    document.getElementById('cardView').style.display = 'flex';
  }, 650);
}