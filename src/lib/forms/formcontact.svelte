<form class="form" id="contact-form">
    <fieldset>
      <legend>Contact Us</legend>
      
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" name="name" required>
        <span class="error-message" id="name-error">Please enter your name.</span>
      </div>
      
      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" name="email" required>
        <span class="error-message" id="email-error">Please enter a valid email.</span>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required>
        <span class="error-message" id="subject-error">Please enter a subject.</span>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
        <span class="error-message" id="message-error">Please enter a message.</span>
      </div>
    </fieldset>
    
    <button type="submit">Send Message</button>
  </form>
  
  <style>
    form {
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

    .form {
  max-width: 600px;
  margin: 0 auto;
}

.form fieldset {
  border: none;
  padding: 0;
}

.form legend {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-group textarea {
  resize: vertical;
}

.error-message {
  display: none;
  color: red;
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

  </style>