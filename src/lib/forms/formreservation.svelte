<form class="reservation-form form">
    <h2 class="form-heading">Reservation Form</h2>
    
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required>
    </div>
    
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
    </div>
    
    <div class="form-group">
      <label for="date">Date</label>
      <input type="date" id="date" name="date" required>
    </div>
    
    <div class="form-group">
      <label for="time">Time</label>
      <input type="time" id="time" name="time" required>
    </div>
    
    <div class="form-group">
      <label for="guests">Number of Guests</label>
      <input type="number" id="guests" name="guests" min="1" required>
    </div>
    
    <div class="form-group">
      <label for="special-requests">Special Requests</label>
      <textarea id="special-requests" name="special-requests" rows="4"></textarea>
    </div>
    
    <button type="submit">Make Reservation</button>
  </form>
  <style>
  .form {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      max-width: 600px;
      margin: 60px auto;
    }
    

    .reservation-form {
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-heading {
  margin-bottom: 1rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
}

label {
  margin-bottom: 0.25rem;
}

input[type="text"],
input[type="email"],
input[type="date"],
input[type="time"],
input[type="number"],
textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
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