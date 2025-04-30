// UNIVERSAL HUNTER SAVE SYSTEM

let hunterData = JSON.parse(localStorage.getItem('hunterData')) || {
    level: 1,
    xp: 0,
    xpThreshold: 250,
    currentQuest: null,
    currentDay: 1,
    lastCompletedDay: 0,
    cooldownUntil: null,
    totalSetsCompleted: 0,
    totalRepsCompleted: 0,
    missedDays: 0
  };
  
  // Save Hunter Data
  function saveHunterData() {
    localStorage.setItem('hunterData', JSON.stringify(hunterData));
  }
  
  // Load Hunter Data (fresh update)
  function loadHunterData() {
    hunterData = JSON.parse(localStorage.getItem('hunterData')) || hunterData;
  }
  
  // Add XP and Handle Level Up
  function addXP(amount) {
    hunterData.xp += amount;
  
    while (hunterData.xp >= hunterData.xpThreshold) {
      hunterData.xp -= hunterData.xpThreshold;
      hunterData.level += 1;
      hunterData.xpThreshold = calculateNextXPThreshold(hunterData.level);
  
      alert(`⚡ LEVEL UP! Now you are Level ${hunterData.level}!`);
    }
  
    saveHunterData();
  }
  
  // Calculate XP needed for next level
  function calculateNextXPThreshold(level) {
    if (level <= 5) return 250;
    else if (level <= 10) return 500;
    else if (level <= 30) return 1000;
    else if (level <= 50) return 2000;
    else if (level <= 70) return 3000;
    else return 5000;
  }
  
  // After Completing a Day
  function completeDay(setsDone, repsDone) {
    hunterData.totalSetsCompleted += setsDone;
    hunterData.totalRepsCompleted += repsDone;
    hunterData.lastCompletedDay = hunterData.currentDay;
    hunterData.currentDay += 1;
  
    if (hunterData.currentDay > 6) {
      startQuestCooldown();
    }
  
    saveHunterData();
  }
  
  // Start 24 Hour Cooldown
  function startQuestCooldown() {
    const now = new Date();
    hunterData.cooldownUntil = now.getTime() + (24 * 60 * 60 * 1000); // 24 hours
    saveHunterData();
  }
  
  // Handle Missed Days (Apply Penalty)
  function applyMissedDayPenalty() {
    const penaltyXP = Math.floor(hunterData.xp * 0.10);
    hunterData.xp = Math.max(hunterData.xp - penaltyXP, 0);
    hunterData.missedDays += 1;
    saveHunterData();
  
    alert("❌ Missed Day! XP Penalty Applied!");
  }
  