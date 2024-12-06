<div class="date-input-container">
    <label id="date-input-label" for="memorable-date">Enter a memorable date:</label>
    <div class="date-input-group" role="group" aria-labelledby="date-input-label">
        <input type="number" id="day" name="day" min="1" max="31" placeholder="DD" aria-label="Day">
        <input type="number" id="month" name="month" min="1" max="12" placeholder="MM" aria-label="Month">
        <input type="number" id="year" name="year" min="1900" max="2099" placeholder="YYYY" aria-label="Year">
    </div>
</div>

<style>


.date-input-container {
    max-width: 600px;
    margin: 0 auto;
}

.date-input-container label {
    font-weight: 500;
    display: block;
    margin-bottom: 0.5em;
    color: #333;
}

.date-input-group {
    display: flex;
    justify-content: space-between;
}

.date-input-group input {
    width: 30%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
}

.date-input-group input:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px #007bff;
}

@media (max-width: 768px) {
    .date-input-group input {
        width: 100%;
        margin-bottom: 0.5em;
    }
}

</style>