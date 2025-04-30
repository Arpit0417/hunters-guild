loadHunterData();

const mainQuests = [
  {
    title: "Push Pull Legs",
    preview: "PPL allows you to train each muscle group twice a week, beneficial for muscle growth."
  },
  {
    title: "Bro's Split",
    preview: "Train a different muscle group each day, great for beginners and muscle building."
  },
  {
    title: "Home Workout",
    preview: "Perfect for people who can't go to gym."
  }
];

const miniQuests = [
  { title: "Morning/Night Walk" },
  { title: "Click a Picture" },
  { title: "Write a Journey" }
];

function renderQuests() {
  const mainContainer = document.getElementById('main-quests');
  const miniContainer = document.getElementById('mini-quests');

  mainQuests.forEach(quest => {
    const card = document.createElement('div');
    card.className = 'quest-card';
    card.innerHTML = `<h3>${quest.title}</h3><p class="preview-text">${quest.preview}</p>`;
    card.onclick = () => selectQuest(card, 'main');
    mainContainer.appendChild(card);
  });

  miniQuests.forEach(quest => {
    const card = document.createElement('div');
    card.className = 'quest-card';
    card.innerHTML = `<h3>${quest.title}</h3>`;
    card.onclick = () => selectQuest(card, 'mini');
    miniContainer.appendChild(card);
  });
}

let selectedMain = null;
let selectedMini = null;

function selectQuest(card, type) {
  if (type === 'main') {
    if (selectedMain) selectedMain.classList.remove('selected');
    selectedMain = card;
  } else {
    if (selectedMini) selectedMini.classList.remove('selected');
    selectedMini = card;
  }
  card.classList.add('selected');

  card.ondblclick = () => {
    card.classList.remove('selected');
    if (type === 'main') selectedMain = null;
    else selectedMini = null;
  };
}

function confirmQuests() {
  if (!selectedMain) {
    alert('Please select a Main Quest!');
    return;
  }

  const mainQuestTitle = selectedMain.querySelector("h3").innerText;
  const miniQuestTitle = selectedMini ? selectedMini.querySelector("h3").innerText : null;

  // Save to hunterData
  hunterData.currentQuest = mainQuestTitle === "Bro's Split" ? "BrosSplit"
                          : mainQuestTitle === "Home Workout" ? "HomeWorkout"
                          : "Push Pull Legs";
  hunterData.miniQuest = miniQuestTitle || null;
  hunterData.currentDay = 1;
  hunterData.cooldownUntil = null;
  saveHunterData();

  const popup = document.getElementById('success-popup');
  popup.classList.add('show');
  popup.classList.remove('hidden');

  setTimeout(() => {
    popup.classList.remove('show');
    popup.classList.add('hidden');
    window.location.href = "index.html";
  }, 2000);
}

renderQuests();
