const caseButton = document.getElementById('openCaseButton');
const caseResult = document.getElementById('caseResult');

const drops = [
  { name: 'Common Study Token', rarity: 'Common', color: '#c8d1ea' },
  { name: 'Rare Quiz Blaster Skin', rarity: 'Rare', color: '#4cc9f0' },
  { name: 'Epic Memory Crown', rarity: 'Epic', color: '#9b5cff' },
  { name: 'Legendary Logic Aura', rarity: 'Legendary', color: '#ffcf5a' },
  { name: 'Mythic Founder Wings', rarity: 'Mythic', color: '#ff6b8a' },
];

caseButton?.addEventListener('click', () => {
  const roll = Math.random();
  let drop = drops[0];

  if (roll > 0.97) drop = drops[4];
  else if (roll > 0.9) drop = drops[3];
  else if (roll > 0.72) drop = drops[2];
  else if (roll > 0.45) drop = drops[1];

  caseResult.textContent = `You unlocked: ${drop.name} · ${drop.rarity}`;
  caseResult.style.color = drop.color;
  caseButton.textContent = 'Open Again · 600 EduCoin';
});
