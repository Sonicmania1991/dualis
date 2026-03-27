function randomPos(max) {
  return Math.random() * max + "px";
}

function moveBalls() {
  document.querySelectorAll(".ball").forEach(ball => {
    ball.style.setProperty("--x", randomPos(window.innerWidth));
    ball.style.setProperty("--y", randomPos(window.innerHeight));
  });
}

/* Initial random positions */
moveBalls();

/* Move to new random positions every 6 seconds */
setInterval(moveBalls, 5000);

/* Toggle between login and register */
document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.querySelector('.login-form-btn');
  const registerBtn = document.querySelector('.register-btn');
  const loginForm = document.querySelector('.login-form');
  const registerForm = document.querySelector('.register-form');

  loginBtn.addEventListener('click', () => {
    loginBtn.classList.add('active');
    registerBtn.classList.remove('active');
    loginForm.classList.add('active');
    registerForm.classList.remove('active');
  });

  registerBtn.addEventListener('click', () => {
    registerBtn.classList.add('active');
    loginBtn.classList.remove('active');
    registerForm.classList.add('active');
    loginForm.classList.remove('active');
  });

  const mainDiv = document.querySelector('.maindiv');
  if (mainDiv) {
    // Slight delay ensures initial style is applied before transition starts
    setTimeout(() => mainDiv.classList.add('loaded'), 50);
  }

  // Toggle password visibility helper
  function setupPasswordToggle(toggleSelector, inputSelector) {
    const toggleBtn = document.querySelector(toggleSelector);
    const inputField = document.querySelector(inputSelector);

    if (!toggleBtn || !inputField) return;

    toggleBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (inputField.type === 'password') {
        inputField.type = 'text';
        toggleBtn.textContent = 'Elrejt';
      } else {
        inputField.type = 'password';
        toggleBtn.textContent = 'Mutat';
      }
    });
  }

  setupPasswordToggle('.toggle-password', '.password');
  setupPasswordToggle('.toggle-register-password', '.register-password');
  setupPasswordToggle('.toggle-confirm-password', '.confirm-password');

  // Hover effect for login_register background
  const loginRegisterDiv = document.querySelector('.login_register');
  loginBtn.addEventListener('mouseover', () => {
    loginRegisterDiv.classList.add('hovered');
  });
  loginBtn.addEventListener('mouseout', () => {
    loginRegisterDiv.classList.remove('hovered');
  });
  registerBtn.addEventListener('mouseover', () => {
    loginRegisterDiv.classList.add('hovered');
  });
  registerBtn.addEventListener('mouseout', () => {
    loginRegisterDiv.classList.remove('hovered');
  });
});

