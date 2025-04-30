// Dummy Workout Plan for PPL Day 1
const exercises = [
    { exercise: "Bench Press", sets: 4, reps: 10 },
    { exercise: "Incline Dumbbell Press", sets: 3, reps: 10 },
    { exercise: "Seated Shoulder Press", sets: 3, reps: 10 },
    { exercise: "Lateral Raises", sets: 3, reps: 15 },
    { exercise: "Triceps Rope Pushdown", sets: 3, reps: 12 },
    { exercise: "Overhead Tricep Extension", sets: 2, reps: 15 },
    { exercise: "Hanging Leg Raises", sets: 3, reps: 15 }
  ];
  
  let currentExercise = 0;
  let totalXP = 0;
  let totalSets = 0;
  let totalReps = 0;
  let level = 1;
  
  // New Slower Level Progression System
  function xpNeededForNextLevel(lvl) {
    if (lvl <= 5) return 250;
    else if (lvl <= 10) return 500;
    else if (lvl <= 30) return 1000;
    else if (lvl <= 50) return 2000;
    else if (lvl <= 70) return 3000;
    else return 5000;
  }
  
  let xpThreshold = xpNeededForNextLevel(level);
  
  function loadExercise() {
    const exercise = exercises[currentExercise];
    if (!exercise) {
      finishDay();
      return;
    }
  
    document.getElementById("main-content").innerHTML = `
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
  
    // Show XP Floating
    const xpFloating = document.getElementById('xp-floating');
    xpFloating.innerText = `+${exerciseXP} XP`;
    xpFloating.classList.remove('hidden');
    setTimeout(() => xpFloating.classList.add('hidden'), 1000);
  
    currentExercise++;
    setTimeout(loadExercise, 1200);
  }
  
  function finishDay() {
    document.getElementById("main-content").innerHTML = `
      <h2>DAY 1 COMPLETE! 🎉</h2>
      <p>Total Sets Done: ${totalSets}</p>
      <p>Total Reps Done: ${totalReps}</p>
      <p>XP Gained: ${totalXP}</p>
      <p>Redirecting to Home...</p>
    `;
  
    checkLevelUp();
  
    setTimeout(() => {
      window.location.href = "index.html"; // you can later customize this
    }, 5000);
  }
  
  function checkLevelUp() {
    if (totalXP >= xpThreshold) {
      level++;
      xpThreshold = xpNeededForNextLevel(level);
  
      const rank = getHunterRank(level);
      document.getElementById('new-rank').innerText = rank;
  
      const popup = document.getElementById('levelup-popup');
      popup.classList.add('show');
      setTimeout(() => popup.classList.remove('show'), 2500);
    }
  }
  
  function getHunterRank(lvl) {
    if (lvl <= 5) return "Rookie Hunter";
    else if (lvl <= 10) return "D-Class Hunter";
    else if (lvl <= 30) return "C-Class Hunter";
    else if (lvl <= 50) return "B-Class Hunter";
    else if (lvl <= 70) return "A-Class Hunter";
    else return "S-Class Hunter";
  }
  
  loadExercise();
  