loadHunterData();

document.getElementById('hunter-level').innerText = hunterData.level;
document.getElementById('hunter-xp').innerText = hunterData.xp || 0;
document.getElementById('quests-completed').innerText = hunterData.questsCompleted || 0;
document.getElementById('hunter-title').innerText = getHunterRank(hunterData.level);

// Placeholder for Name (can be edited later)
document.getElementById('hunter-name').innerText = hunterData.name || "Unknown Hunter";

function getHunterRank(level) {
  if (level <= 5) return "Rookie Hunter";
  else if (level <= 10) return "D-Class Hunter";
  else if (level <= 30) return "C-Class Hunter";
  else if (level <= 50) return "B-Class Hunter";
  else if (level <= 70) return "A-Class Hunter";
  else return "S-Class Hunter";
}

function goHome() {
  window.location.href = "index.html";
}
