<label class="toggle-switch primary">
    <input type="checkbox">
    <span class="slider"></span>
</label>


<style>
    .toggle-switch {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 24px;
    }

    .toggle-switch input {
        display: none;
    }

    .slider {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        border-radius: 34px;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 2px;
        bottom: 2px;
        background-color: white;
        border-radius: 50%;
        transition: 0.4s;
    }

    .toggle-switch input:checked+.slider {
        background-color: #2196F3;
    }

    .toggle-switch input:checked+.slider:before {
        transform: translateX(24px);
    }
</style>