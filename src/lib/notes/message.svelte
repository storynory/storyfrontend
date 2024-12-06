<div class="notification-banner">
    <div class="notification-banner__content">
        <p class="notification-banner__message">Important message goes here!</p>
        <button class="notification-banner__close-button" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
    </div>
</div>
<style>
    .notification-banner {
        background-color: #f5f5f5;
        padding: 1rem;
        display: flex;
        align-items: center;
    }

    .notification-banner__content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .notification-banner__message {
        margin: 0;
        font-weight: bold;
        color: #333;
    }

    .notification-banner__close-button {
        border: none;
        background: none;
        padding: 0;
        cursor: pointer;
    }

    .notification-banner__close-button svg {
        width: 16px;
        height: 16px;
    }

    /* Adjust the styles according to your design preferences */
</style>