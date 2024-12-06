<div class="form-group">
    <fieldset class="fieldset" aria-describedby="fruits-hint">
      <legend class="fieldset__legend">
        <h1 class="fieldset__heading">
          Which fruits do you like?
        </h1>
      </legend>
      <div id="fruits-hint" class="hint">
        Select one option.
      </div>
      <div class="radios">
        <div class="radio-item">
          <input class="radio" id="fruit1" name="fruit" type="radio" value="apple">
          <label class="label" for="fruit1">
            Apple
          </label>
        </div>
        <div class="radio-item">
          <input class="radio" id="fruit2" name="fruit" type="radio" value="banana">
          <label class="label" for="fruit2">
            Banana
          </label>
        </div>
        <div class="radio-item">
          <input class="radio" id="fruit3" name="fruit" type="radio" value="cherry">
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
  padding: 1em;
}

.hint {
  font-size: 16px;
  color: #6c757d;
  margin-bottom: 1em;
}

.radio-item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
}

.radio {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.label {
  font-size: 16px;
}


</style>  