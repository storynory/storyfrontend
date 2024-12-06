<div class="form-group">
    <fieldset class="fieldset" aria-describedby="fruits-hint">
      <legend class="fieldset__legend">
        <h1 class="fieldset__heading">
          Which fruits do you like?
        </h1>
      </legend>
      <div id="fruits-hint" class="hint">
        Select all that apply.
      </div>
      <div class="checkboxes">
        <div class="checkbox-item">
          <input class="checkbox" id="fruit1" name="fruit" type="checkbox" value="apple">
          <label class="label" for="fruit1">
            Apple
          </label>
        </div>
        <div class="checkbox-item">
          <input class="checkbox" id="fruit2" name="fruit" type="checkbox" value="banana">
          <label class="label" for="fruit2">
            Banana
          </label>
        </div>
        <div class="checkbox-item">
          <input class="checkbox" id="fruit3" name="fruit" type="checkbox" value="cherry">
          <label class="label" for="fruit3">
            Cherry
          </label>
        </div>
      </div>
    </fieldset>
  </div>
<style>


.form-group {
  max-width: 600px;
  margin: 0 auto;
}

.fieldset__legend {
  font-size: 24px;
  margin-bottom: 15px;
}

.hint {
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 1em;
}

.checkbox-item {
  margin-bottom: 10px;
}

.checkbox {
  width: 20px;  /* Increase width */
  height: 20px; /* Increase height */
  margin-right: 10px;
}

.label {
  font-size: 16px;
  padding: 10px; /* Increase clickable area */
}

/* Change label color when checkbox is checked */
.checkbox:checked + .label {
  color: #007bff;
}   
</style>  
