// Handle Hunter Progression and XP Penalty
let hunterData = JSON.parse(localStorage.getItem('hunterData')) || {
    level: 1,
    xp: 0,
    xpThreshold: 250,
    currentQuest: "Push Pull Legs",
    currentDay: 1,
    lastCompletedDay: 0,
    cooldownUntil: null
  };
  
  function finishDay() {
    hunterData.lastCompletedDay = hunterData.currentDay;
    hunterData.currentDay += 1;
    saveHunterData();
  
    if (hunterData.currentDay > 6) {
      // Finished the quest!
      startCooldown();
      window.location.href = "quest_complete.html";
    } else {
      // Continue to next day
      window.location.href = "home_dashboard.html";
    }
  }
  
  function saveHunterData() {
    localStorage.setItem('hunterData', JSON.stringify(hunterData));
  }
  
  function checkPenalty() {
    let todayDay = hunterData.currentDay;
    let lastDay = hunterData.lastCompletedDay;
  
    if (todayDay - lastDay > 1) {
      applyPenalty();
    }
  }
  
  function applyPenalty() {
    const penaltyXP = Math.floor(hunterData.xp * 0.10); // 10% penalty
    hunterData.xp = Math.max(hunterData.xp - penaltyXP, 0);
    saveHunterData();
  
    alert("❌ You missed a day! XP Penalty Applied!");
  }
  
  function startCooldown() {
    const now = new Date();
    const cooldownTime = now.getTime() + (24 * 60 * 60 * 1000); // 24 hours
    hunterData.cooldownUntil = cooldownTime;
    saveHunterData();
  }
  
  checkPenalty();
  