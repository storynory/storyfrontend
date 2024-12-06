<div class="md-input-container">
    <input type="text" class="md-input" id="text-input" placeholder=" " />
    <label for="text-input" class="md-input-label">Text Input</label>
  </div>
<style>
    /* Text Input Styles */
/* Text Input Styles */
.md-input-container {
  position: relative;
  margin-bottom: 24px;
}

.md-input {
  display: block;
  width: 100%;
  height: 48px;
  padding: 16px 16px 0 16px; /* Add space for label */
  border: 1px solid #ccc; /* Optional for better visibility */
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  transition: box-shadow 0.3s ease, border-color 0.3s ease;
}

.md-input:focus {
  outline: none;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-color: #007bff;
}

.md-input-label {
  position: absolute;
  top: 16px;
  left: 16px;
  color: #777;
  font-size: 16px;
  font-weight: normal;
  pointer-events: none;
  transition: top 0.3s, font-size 0.3s, color 0.3s;
}

.md-input:focus + .md-input-label,
.md-input:not(:placeholder-shown) + .md-input-label {
  top: -16px;
  font-size: 12px;
  color: #007bff; /* Highlighted colour */
}



</style>  