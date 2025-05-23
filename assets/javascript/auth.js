document.addEventListener("DOMContentLoaded", () => {

    // Handle login/signup toggle
    const goToSignup = document.getElementById('go-to-signup');
    const goToLogin = document.getElementById('go-to-login');
    const loginSection = document.getElementById('login-section');
    const signupSection = document.getElementById('signup-section');
  
    if (goToSignup) {
      goToSignup.addEventListener('click', () => {
        loginSection.style.display = 'none';
        signupSection.style.display = 'block';
      });
    }
  
    if (goToLogin) {
      goToLogin.addEventListener('click', () => {
        signupSection.style.display = 'none';
        loginSection.style.display = 'block';
      });
    }
  
    // Share button dropdown functionality
    const navbarLink = document.querySelector('.navbar-link');
    const navbarDropdown = document.querySelector('.navbar-dropdown');
  
    // Toggle dropdown visibility on click
    if (navbarLink) {
      navbarLink.addEventListener('click', () => {
        navbarDropdown.classList.toggle('show');
      });
    }
  
    // Handle clipboard copy for Room Link and Stream Link
    const copyToClipboard = (text) => {
      navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
      }).catch(err => {
        console.error('Error copying text: ', err);
      });
    };
  
    // Add event listeners for dropdown buttons
    const roomLinkButton = document.querySelectorAll('.dropdown-button')[0];
    const streamLinkButton = document.querySelectorAll('.dropdown-button')[1];
  
    if (roomLinkButton) {
      roomLinkButton.addEventListener('click', () => {
        // Example link for Room (replace with your actual logic or variable)
        copyToClipboard("https://example.com/roomlink");
      });
    }
  
    if (streamLinkButton) {
      streamLinkButton.addEventListener('click', () => {
        // Example link for Stream (replace with your actual logic or variable)
        copyToClipboard("https://example.com/streamlink");
      });
    }
  
    // Handle the "Leave Room" button functionality
    const leaveButton = document.querySelector('.leave-button');
    
    if (leaveButton) {
      leaveButton.addEventListener('click', () => {
        alert("You have left the room!");
        // Add any additional leave room logic here, like closing the room or redirecting.
      });
    }
  
  });
  