function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    setInterval(function () {
      hours = Math.floor(timer / 3600);
      minutes = Math.floor((timer % 3600) / 60);
      seconds = timer % 60;
  
      display.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" + 
        (minutes < 10 ? "0" : "") + minutes + ":" + 
        (seconds < 10 ? "0" : "") + seconds;
  
      if (--timer < 0) {
        display.textContent = "Quest Available Now! 🎯";
      }
    }, 1000);
  }
  
  window.onload = function () {
    const cooldownHours = 24;
    const duration = cooldownHours * 60 * 60; // 24 hours
    const display = document.getElementById('cooldown-timer');
    startTimer(duration, display);
  };
  
  function goHome() {
    window.location.href = "home_dashboard.html";
  }
  
  function goProfile() {
    window.location.href = "profile.html"; // Create later if needed
  }
  