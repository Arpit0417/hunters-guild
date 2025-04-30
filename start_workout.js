loadHunterData();

let exercises = [];

if (hunterData.currentQuest === "Push Pull Legs") {
  exercises = workoutPlans[hunterData.currentDay] || [];
} else if (hunterData.currentQuest === "BrosSplit") {
  exercises = broSplitPlans[hunterData.currentDay] || [];
} else if (hunterData.currentQuest === "HomeWorkout") {
  exercises = homeWorkoutPlans[hunterData.currentDay] || [];
}

let currentExercise = 0;
let totalSets = 0;
let totalReps = 0;
let totalXP = 0;

function loadExercise() {
  if (currentExercise >= exercises.length) {
    finishDay();
    return;
  }

  const exercise = exercises[currentExercise];

  document.getElementById('main-content').innerHTML = `
    <div class="exercise-card">
      <h2>${exercise.exercise}</h2>

      <label>Sets: <span id="sets-value">${exercise.sets}</span></label>
      <input type="range" min="1" max="10" value="${exercise.sets}" id="sets-slider" oninput="document.getElementById('sets-value').innerText=this.value">

      <label>Reps: <span id="reps-value">${exercise.reps}</span></label>
      <input type="range" min="1" max="30" value="${exercise.reps}" id="reps-slider" oninput="document.getElementById('reps-value').innerText=this.value">

      <label>Weight (kg): <span id="weight-value">20</span></label>
      <input type="range" min="0" max="200" value="20" id="weight-slider" oninput="document.getElementById('weight-value').innerText=this.value">

      <button class="save-button" onclick="saveExercise()">Save Exercise ✅</button>
    </div>
  `;
}

function saveExercise() {
  const sets = parseInt(document.getElementById('sets-slider').value);
  const reps = parseInt(document.getElementById('reps-slider').value);
  const weight = parseInt(document.getElementById('weight-slider').value);

  totalSets += sets;
  totalReps += sets * reps;

  let baseXP = 50;
  let bonusXP = (weight * 0.5) + (reps * 2);
  let exerciseXP = Math.floor(baseXP + bonusXP);

  totalXP += exerciseXP;
  addXP(exerciseXP);

  const xpFloating = document.getElementById('xp-floating');
  xpFloating.innerText = `+${exerciseXP} XP`;
  xpFloating.classList.remove('hidden');
  xpFloating.classList.add('show');
  setTimeout(() => {
    xpFloating.classList.remove('show');
    xpFloating.classList.add('hidden');
  }, 1000);

  document.getElementById('success-sound').play();

  currentExercise++;
  setTimeout(loadExercise, 1200);
}

function addXP(xp) {
  hunterData.xp += xp;
  checkLevelUp();
}

function xpNeededForNextLevel(level) {
  if (level <= 5) return 250;
  else if (level <= 10) return 500;
  else if (level <= 30) return 1000;
  else if (level <= 50) return 2000;
  else if (level <= 70) return 3000;
  else return 5000;
}

function checkLevelUp() {
  const popup = document.getElementById('levelup-popup');
  let leveledUp = false;

  while (hunterData.xp >= hunterData.xpThreshold) {
    hunterData.xp -= hunterData.xpThreshold;
    hunterData.level += 1;
    hunterData.xpThreshold = xpNeededForNextLevel(hunterData.level);
    leveledUp = true;
  }

  if (leveledUp) {
    const rank = getHunterRank(hunterData.level);
    document.getElementById('new-rank').innerText = rank;
    popup.classList.remove('hidden');
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 2500);
  }
}

function getHunterRank(level) {
  if (level <= 5) return "Rookie Hunter";
  else if (level <= 10) return "D-Class Hunter";
  else if (level <= 30) return "C-Class Hunter";
  else if (level <= 50) return "B-Class Hunter";
  else if (level <= 70) return "A-Class Hunter";
  else return "S-Class Hunter";
}

function finishDay() {
  document.getElementById("main-content").innerHTML = `
    <h2>DAY ${hunterData.currentDay} COMPLETE! 🎉</h2>
    <p>Total Sets Done: ${totalSets}</p>
    <p>Total Reps Done: ${totalReps}</p>
    <p>XP Gained: ${totalXP}</p>
    <p>Taking you back to the Guild... 🏠</p>
  `;

  if (hunterData.currentDay < 6) {
    hunterData.currentDay += 1;
    const now = new Date();
    hunterData.cooldownUntil = new Date(now.getTime() + 12 * 60 * 60 * 1000).toISOString(); // 12hr cooldown
  } else {
    hunterData.questsCompleted = (hunterData.questsCompleted || 0) + 1;
    hunterData.currentQuest = null;
    hunterData.currentDay = 1;
  }

  saveHunterData();

  setTimeout(() => {
    window.location.href = "index.html";
  }, 5000);
}

loadExercise();
