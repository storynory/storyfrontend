<form class="form">
    <fieldset>
      <legend>Address</legend>
      
      <div class="form-group">
        <label for="street">Street</label>
        <input type="text" id="street" name="street" required>
        <span class="error-message" id="street-error">Please enter your street address.</span>
      </div>
      
      <div class="form-group">
        <label for="city">City</label>
        <input type="text" id="city" name="city" required>
        <span class="error-message" id="city-error">Please enter your city.</span>
      </div>
      
      <div class="form-group">
        <label for="state">State</label>
        <input type="text" id="state" name="state" required>
        <span class="error-message" id="state-error">Please enter your state.</span>
      </div>
      
      <div class="form-group">
        <label for="zip">ZIP Code</label>
        <input type="text" id="zip" name="zip" required pattern="[0-9]{5}">
        <span class="error-message" id="zip-error">Please enter a valid ZIP code (5 digits).</span>
      </div>
    </fieldset>
    
    <button type="submit">Submit</button>
  </form>
  <style>
    .form {
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      max-width: 600px;
      margin: 60px auto;
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
    /*
    .error-message.show {
      display: block;
    }
      */
    
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
      