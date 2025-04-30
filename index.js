let hunterData = JSON.parse(localStorage.getItem('hunterData')) || {
  level: 1,
  xp: 0,
  xpThreshold: 250,
  currentQuest: null,
  currentDay: 1
};

function isCooldownActive() {
  if (!hunterData.cooldownUntil) return false;
  const now = new Date();
  return now < new Date(hunterData.cooldownUntil);
}

function getCooldownRemaining() {
  const diff = new Date(hunterData.cooldownUntil) - new Date();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  return `${hours}h ${mins}m`;
}

function updateHomeInfo() {
  document.getElementById('hunter-level').innerText = `Level ${hunterData.level}`;
  document.getElementById('xp-status').innerText = `XP: ${hunterData.xp} / ${hunterData.xpThreshold}`;
  document.getElementById('current-day').innerText = `Day: ${hunterData.currentDay}`;

  if (isCooldownActive()) {
    document.getElementById('current-quest').innerText = `Cooldown: ${getCooldownRemaining()}`;
  } else if (hunterData.currentQuest) {
    document.getElementById('current-quest').innerText = `Quest: ${hunterData.currentQuest}`;
  } else {
    document.getElementById('current-quest').innerText = "No Active Quest";
  }
}

function startQuest() {
  if (isCooldownActive()) {
    alert("You've already completed today's quest. Come back after cooldown ends!");
    return;
  }

  triggerTransition(() => {
    if (hunterData.currentQuest) {
      window.location.href = "start_workout.html"; 
    } else {
      window.location.href = "quest_selection.html";
    }
  });
}

function goDashboard() {
  triggerTransition(() => {
    window.location.href = "home_dashboard.html";
  });
}

function goProfile() {
  triggerTransition(() => {
    window.location.href = "profile.html"; 
  });
}

// Smooth Page Transition
function triggerTransition(nextAction) {
  const overlay = document.getElementById('transition-overlay');
  overlay.classList.add('show');

  setTimeout(() => {
    nextAction();
  }, 500);
}

// Reset Popup Logic
function showResetPopup() {
  document.getElementById("reset-popup").classList.remove("hidden");
  document.getElementById("reset-password").value = "";
  document.getElementById("reset-msg").innerText = "";
}

function closeResetPopup() {
  document.getElementById("reset-popup").classList.add("hidden");
}

function confirmReset() {
  const entered = document.getElementById("reset-password").value;
  const msg = document.getElementById("reset-msg");

  if (entered === "appy03") {
    localStorage.removeItem("hunterData");
    msg.innerText = "✅ Reset Successful!";
    msg.style.color = "#00FF88";

    setTimeout(() => {
      location.reload();
    }, 1500);
  } else {
    msg.innerText = "❌ Access Denied!";
    msg.style.color = "#FF3C38";
  }
}

updateHomeInfo();
