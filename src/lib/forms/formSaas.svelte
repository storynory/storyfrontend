<form class="form" id="signup-form">
    <fieldset>
      <legend class="-p">Sign Up</legend>
      
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
        <span class="error-message" id="name-error">Please enter your name.</span>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <span class="error-message" id="email-error">Please enter a valid email.</span>
      </div>
      
      <div class="form-group">
        <label for="password">Password</label>
        <div class="password-input-container">
          <input type="password" id="password" name="password" required>
          <span class="password-toggle" id="password-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
              <path d="M22.511 11.544C20.896 8.415 17.608 6 12 6s-8.896 2.415-10.511 5.544a1 1 0 0 0 0 1.912C3.104 15.585 6.392 18 12 18s8.896-2.415 10.511-5.544a1 1 0 0 0 0-1.912z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </span>
        </div>
        <span class="error-message" id="password-error">Password must be at least 8 characters.</span>
      </div>
      
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <div class="password-input-container">
          <input type="password" id="confirm-password" name="confirm-password" required>
          <span class="password-toggle" id="confirm-password-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-eye">
              <path d="M22.511 11.544C20.896 8.415 17.608 6 12 6s-8.896 2.415-10.511 5.544a1 1 0 0 0 0 1.912C3.104 15.585 6.392 18 12 18s8.896-2.415 10.511-5.544a1 1 0 0 0 0-1.912z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </span>
        </div>
        <span class="error-message" id="confirm-password-error">Passwords do not match.</span>
      </div>
    </fieldset>
    
    <button type="submit">Sign Up</button>
  </form>
  
  
  <style>
    .form {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      max-width: 600px;
      margin: 60px auto;
    }
    
    p {
        font-size: 28px;
    }
    
    .form-group {
      margin-bottom: 20px;
      display: flex;
      flex-direction: column;
    }
    
    .form-group label {
      margin-bottom: 10px;
    }
    
    .form-group input {
      padding: 10px;
      font-size: 1em;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    
    .error-message {
      display: none;
      color: #d00;
      margin-top: 5px;
    }
    
    .error-message.show {
      display: block;
    }
    
    button {
      font-size: 1em;
      padding: 10px;
      color: white;
      background-color: #333;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      width: 100%;
      margin-top: 20px;
      box-sizing: border-box;
    }
    .password-input-container {
  position: relative;
}

.password-toggle {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
}

.password-toggle svg {
  width: 20px;
  height: 20px;
  color: #888;
}

.password-toggle.active svg {
  color: #3f51b5;
}

    
      </style>
  <script>
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const confirmPasswordError = document.getElementById('confirm-password-error');
const passwordToggle = document.getElementById('password-toggle');
const confirmToggle = document.getElementById('confirm-password-toggle');

function validatePassword() {
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.classList.add('show');
  } else {
    confirmPasswordError.classList.remove('show');
  }
}

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);

passwordToggle.addEventListener('click', function () {
  const passwordFieldType = passwordInput.getAttribute('type');
  passwordInput.setAttribute('type', passwordFieldType === 'password' ? 'text' : 'password');
  passwordToggle.classList.toggle('active');
});

confirmToggle.addEventListener('click', function () {
  const confirmFieldType = confirmPasswordInput.getAttribute('type');
  confirmPasswordInput.setAttribute('type', confirmFieldType === 'password' ? 'text' : 'password');
  confirmToggle.classList.toggle('active');
});


  </script>