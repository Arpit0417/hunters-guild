loadHunterData();

// XP and Status
document.getElementById("level").innerText = hunterData.level;
document.getElementById("quest-name").innerText = hunterData.currentQuest || "None";
document.getElementById("mini-quest").innerText = hunterData.miniQuest || "None";
document.getElementById("xp-count").innerText = hunterData.xp;

// XP Bar
const xpBar = document.getElementById("xp-bar");
const xpLabel = document.getElementById("xp-label");

function xpNeededForNextLevel(level) {
  if (level <= 5) return 250;
  else if (level <= 10) return 500;
  else if (level <= 30) return 1000;
  else if (level <= 50) return 2000;
  else if (level <= 70) return 3000;
  else return 5000;
}

const currentXP = hunterData.xp;
const currentLevel = hunterData.level;
const xpForNext = xpNeededForNextLevel(currentLevel);
const percentFill = Math.min((currentXP / xpForNext) * 100, 100);

xpBar.style.width = percentFill + "%";
xpLabel.innerText = `XP: ${currentXP} / ${xpForNext}`;

// MINI QUEST
const miniQuestName = hunterData.miniQuest || "None";
const miniQuestElem = document.getElementById("mini-quest-name");
const miniStatus = document.getElementById("mini-quest-status");
const miniBtn = document.getElementById("mini-quest-btn");
const miniToast = document.getElementById("mini-toast");

miniQuestElem.innerText = miniQuestName;

function isMiniQuestDoneToday() {
  const today = new Date().toDateString();
  return hunterData.miniQuestStatus?.date === today && hunterData.miniQuestStatus.done;
}
function goHome() {
  window.location.href = "index.html";
}


function completeMiniQuest() {
  const today = new Date().toDateString();
  hunterData.miniQuestStatus = { date: today, done: true };
  hunterData.xp += 10;
  saveHunterData();

  miniStatus.innerText = "Status: Completed!";
  miniBtn.disabled = true;
  document.getElementById("xp-count").innerText = hunterData.xp;

  // Update XP bar
  const newXP = hunterData.xp;
  const xpForNext = xpNeededForNextLevel(hunterData.level);
  const percentFill = Math.min((newXP / xpForNext) * 100, 100);
  xpBar.style.width = percentFill + "%";
  xpLabel.innerText = `XP: ${newXP} / ${xpForNext}`;

  // Show toast
  miniToast.style.display = "block";
  setTimeout(() => (miniToast.style.display = "none"), 2000);
}

// Load mini quest status
if (isMiniQuestDoneToday()) {
  miniStatus.innerText = "Status: Completed!";
  miniBtn.disabled = true;
} else {
  miniStatus.innerText = "Status: Not done today";
}
