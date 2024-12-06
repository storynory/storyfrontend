<script>
    import { onMount } from 'svelte';
  
    // Array to hold snowflake data
    let snowflakes = [];
  
    // Function to generate snowflake properties
    const generateSnowflake = () => {
      return {
        size: Math.random() * 1.5 + 0.5, // Between 0.5vw and 2vw
        leftIni: Math.random() * 20 - 10, // Random between -10vw and 10vw
        leftEnd: Math.random() * 20 - 10, // Random between -10vw and 10vw
        position: Math.random() * 100, // Random position between 0vw and 100vw
        duration: Math.random() * 5 + 5, // Fall duration between 5s and 10s
        delay: Math.random() * 10 * -1, // Random negative delay up to -10s
      };
    };
  
    // Generate 50 snowflakes on mount
    onMount(() => {
      snowflakes = Array.from({ length: 50 }, generateSnowflake);
    });
  </script>
  
  <style>
    /* Snowflake Styling */
    .snowflake {
      position: absolute;
      top: -5vh;
      background: white;
      border-radius: 50%;
      animation: snowfall linear infinite;
    }
  
    @keyframes snowfall {
      0% {
        transform: translate3d(var(--left-ini), 0, 0);
      }
      100% {
        transform: translate3d(var(--left-end), 110vh, 0);
      }
    }
  
    /* Add blur effect every 6th snowflake */
    .snowflake:nth-child(6n) {
      filter: blur(1px);
    }

    .xmas {
    position: relative;
    width: 100%;
      box-sizing: border-box;
        background-size: cover;
    background-image: url("/images/santa-trans.png");
    background-repeat: no-repeat;
    }

  </style>
  
  <div class="xmas">
    {#each snowflakes as snowflake}
      <div
        class="snowflake"
        style="
          --size: {snowflake.size}vw;
          --left-ini: {snowflake.leftIni}vw;
          --left-end: {snowflake.leftEnd}vw;
          left: {snowflake.position}vw;
          width: {snowflake.size}vw;
          height: {snowflake.size}vw;
          animation-duration: {snowflake.duration}s;
          animation-delay: {snowflake.delay}s;
        "
      ></div>
    {/each}
  </div>
  