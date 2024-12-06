<div class="char-counter-container">
    <label for="details">Can you provide more detail?</label>
    <small id="details-hint">Avoid personal or financial information.</small>
    <textarea id="details" name="details" rows="5" maxlength="200" aria-describedby="details-hint"></textarea>
    <div id="char-count">You can enter up to 200 characters</div>
  </div>
  
  <style>
 .char-counter-container {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
}

.char-counter-container label {
  font-weight: 700;
  display: block;
  margin-bottom: 0.5em;
  color: #333;
}

.char-counter-container textarea {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  box-sizing: border-box;
  outline: none;
  resize: vertical;
  border-radius: .25rem;
}

.char-counter-container textarea:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
}

.char-counter-container #char-count {
  font-size: 0.875rem;
  text-align: right;
  color: #6c757d;
  margin-top: 0.5em;
}

.char-counter-container small {
  font-size: 0.875rem;
  color: #6c757d;
  display: block;
  margin-bottom: 0.5em;
}


  </style>

<script>
    (function() {
      const textarea = document.getElementById('details');
      const charCount = document.getElementById('char-count');
    
      textarea.addEventListener('input', () => {
        const remaining = 200 - textarea.value.length;
        charCount.textContent = `You can enter up to ${remaining} characters`;
      });
    })();
    </script>
    
    
    
    