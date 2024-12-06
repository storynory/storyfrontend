


<details>
    <summary>Notification</summary>
    <div>
      <p>You have 3 new messages.</p>
      <!-- svelte-ignore a11y_invalid_attribute -->
      <p><a href="#">View all messages</a></p>
    </div>
  </details>

  
  <style>
    details {
      position: relative;
      width: 200px;
    }

    summary {
      cursor: pointer;
      padding: 10px;
      background-color: #0073e6;
      color: white;
      border-radius: 5px;
      list-style: none;
    }

    summary::-webkit-details-marker {
      display: none;
    }

    details[open] summary {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
    }

    details div {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: white;
      border: 1px solid #ddd;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      padding: 10px;
      border-radius: 0 0 5px 5px;
      animation: fadeIn 0.3s ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-5px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  </style>


