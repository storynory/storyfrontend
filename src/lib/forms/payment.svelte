<form class="form">
    <fieldset>
      <legend>Payment Information</legend>
      
      <div class="form-group">
        <label for="card-number">Card Number</label>
        <input type="text" id="card-number" name="card-number" required pattern="[0-9]{16}">
        <span class="error-message" id="card-number-error">Please enter a valid 16-digit card number.</span>
      </div>
      
      <div class="form-group">
        <label for="card-name">Cardholder Name</label>
        <input type="text" id="card-name" name="card-name" required>
        <span class="error-message" id="card-name-error">Please enter the cardholder's name.</span>
      </div>
      
      <div class="form-group">
        <label for="expiry-date">Expiry Date</label>
        <input type="text" id="expiry-date" name="expiry-date" required pattern="(0[1-9]|1[0-2])\/[0-9]{2}">
        <span class="error-message" id="expiry-date-error">Please enter a valid expiry date (MM/YY).</span>
      </div>
      
      <div class="form-group">
        <label for="cvv">CVV</label>
        <input type="text" id="cvv" name="cvv" required pattern="[0-9]{3}">
        <span class="error-message" id="cvv-error">Please enter a valid 3-digit CVV number.</span>
      </div>
    </fieldset>
    
    <button type="submit">Submit Payment</button>
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
      