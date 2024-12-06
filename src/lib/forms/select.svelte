<div class="select-container">
  <label for="fruit-select" class="select-label">Select a fruit:</label>
  <select id="fruit-select" class="select">
    <option value="" selected disabled>Select an option</option>
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
    <option value="cherry">Cherry</option>
  </select>
</div>

<style>
.select-container {
  display: flex;
  flex-direction: column;
}

.select-label {
  font-size: 16px;
  margin-bottom: 8px;
}

.select {
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s ease;
}

.select:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
}

</style>