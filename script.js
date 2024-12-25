// Select the stars container and button
const starsContainer = document.querySelector('.a3d');
const wishButton = document.getElementById('wishButton');

// Function to create stars dynamically
function createStars() {
  const nStars = 200; // Number of stars
  for (let j = 0; j < nStars; j++) {
    const star = document.createElement('div');
    star.classList.add('🌟');
    star.style.setProperty('--j', j);
    star.style.setProperty('--i', Math.random() * 8); // Random arms position
    starsContainer.appendChild(star);
  }
}

// Fireworks effect function
function createFireworks() {
  const nFireworks = 10; // Number of fireworks
  for (let i = 0; i < nFireworks; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * 100}%`; // Random position
    firework.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration
    starsContainer.appendChild(firework);
  }
}

// Display fireworks effect and wish on button click
wishButton.addEventListener('click', () => {
  document.getElementById('greeting').innerText = "Happy Holidays!";
  document.getElementById('message').innerText = "May your year be full of blessings!";
  wishButton.style.display = 'none'; // Hide the button after click

  // Create fireworks and trigger other animations
  createFireworks();

  // Add text animation (fade in or bounce effect)
  document.getElementById('greeting').classList.add('bounce');
  document.getElementById('message').classList.add('fade-in');
});

// Initialize stars on page load
createStars();
