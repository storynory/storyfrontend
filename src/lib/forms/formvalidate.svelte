<form id="registration-form" class="form">
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
      <span class="error-message" id="email-error">Please enter a valid email.</span>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required>
      <span class="error-message" id="password-error">Your password must be at least 8 characters.</span>
    </div>
    <button type="submit">Register</button>
  </form>

  <form class="form">
    <div class="form-group">
      <label for="age">Age</label>
      <input type="number" id="age" name="age" min="18" max="99" required>
      <span class="error-message" id="age-error">Please enter a valid age between 18 and 99.</span>
    </div>
    <button type="submit">Submit</button>
  </form>
  
  <form class="form">
    <div class="form-group">
      <label for="website">Website</label>
      <input type="url" id="website" name="website" required>
      <span class="error-message" id="website-error">Please enter a valid URL.</span>
    </div>
    <button type="submit">Submit</button>
  </form>
  
  <form class="form">
    <div class="form-group">
      <label for="event-date">Event Date</label>
      <input type="date" id="event-date" name="event-date" required>
      <span class="error-message" id="event-date-error">Please enter a valid date.</span>
    </div>
    <button type="submit">Submit</button>
  </form>
  
  <form class="form">
    <div class="form-group">
      <label for="favorite-color">Favorite Color</label>
      <input type="color" id="favorite-color" name="favorite-color" required>
      <span class="error-message" id="favorite-color-error">Please select a color.</span>
    </div>
    <button type="submit">Submit</button>
  </form>
  
  <p>In each case, the input field has a corresponding error message that will be displayed if the input does not meet the specified validation criteria. The required attribute ensures that the field cannot be left empty. The browser will handle the validation and display an error message if the input is invalid.</p>

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


  </style>
  