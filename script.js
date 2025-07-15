function calculateDays() {
  let date1 = new Date("07/15/25");
  let date2 = new Date();
  let timeDifference = date2.getTime() - date1.getTime();
  let days = timeDifference / (1000 * 3600 * 24);

  let number = document.getElementById("number");
  number.innerHTML = Math.floor(days);
  let decimals = document.getElementById("decimals");
  decimals.innerHTML = days.toFixed(6);
  
  const daysCount = Math.floor(days);
  document.title = "Day " + daysCount + " at Workflow";
  
  // Update OG image
  updateOGImageMetaTag(daysCount);

  return daysCount;
}

function updateOGImageMetaTag(daysCount) {
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (ogImage) {
    ogImage.setAttribute('content', `https://workflow-days.vercel.app/api/og-image?days=${daysCount}`);
  }
}

let daysSinceInception = calculateDays();

if (daysSinceInception === 100 || daysSinceInception === 200 || daysSinceInception === 365) {
  renderConfetti();
}

window.setInterval(function () {
  calculateDays();
}, 1000);

function renderConfetti() {
  let confettiSettings = { target: "my-canvas", size: 0.8, max: 200 };
  let confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
}
