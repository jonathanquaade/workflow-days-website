function calculateDays() {
  let date1 = new Date("11/18/24");
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
  generateOGImage(daysCount);

  return daysCount;
}

function generateOGImage(daysCount) {
  // Create a canvas element
  const canvas = document.createElement('canvas');
  canvas.width = 1200;
  canvas.height = 630;
  const ctx = canvas.getContext('2d');

  // Set background
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Add text
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 80px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(`Day ${daysCount} at Workflow`, canvas.width/2, canvas.height/2);

  // Convert to data URL
  const dataUrl = canvas.toDataURL('image/png');
  
  // Update meta tag
  const ogImage = document.getElementById('og-image');
  if (ogImage) {
    ogImage.setAttribute('content', dataUrl);
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
