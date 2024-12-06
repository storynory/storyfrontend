<script>
    import { onMount } from "svelte";
    import "./container.css";
    let animationClass = ""; // Tracks the assigned animation class
    const animations = [
      "spin-in",
      "bounce-in",
      "slide-in",
      "wiggle",
      "zoom-in",
      "flip-in"
    ]; // Array of fun animations
  
    onMount(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Assign a random animation class when the element comes into view
            animationClass = animations[Math.floor(Math.random() * animations.length)];
          }
        },
        { threshold: 0.1 }
      );
  
      const element = document.querySelector("#wellecomeBertie");
      if (element) observer.observe(element);
  
      return () => observer.disconnect();
    });
  </script>
    <div class="-p gradient card shadow">
        <header>
             <h2>Welcome to Storynory</h2>
        </header>
      <section>
        <figure id="wellecomeBertie" class="{animationClass}">
            <img src="/images/bertie.svg" alt="bertie icon" width="234" height="161" />
        </figure>
    <article>
        <ul class="shadow j-bk-neutral">
            <li><a href="/archives/">&#128056; Original Stories</a></li>
            <li><a href="/archives/fairy-tales/">&#9812; Fairy Tales</a></li>
            <li>  <a href="/archives/classic-authors/">&#9884; Classic Authors</a></li>
            <li>  <a href="/archives/myths-world-stories/">&#9814; Myths from Around World</a></li>
            <li> <a href="/archives/educational-stories/">&#10004; Educational</a></li>
            <li> <a href="/archives/poems-music/">&#127925; Poems and Music</a></li>
           
        </ul>
    </article>
    </section>  
    <footer>
        <p>Bertie's Audio Stories have been free to the world since 2005. <a href="/pages/about-storynory/">Read about us.</a></p>

    </footer>
    </div>

  <style>
    .tag {
       color: white; 
       display: inline-block;
   
       padding: 0 12px;
    }

 
    .card {
    background-color: ivory;
    container-name: story;
    container-type: inline-size;
   
}


.card section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
 
}


    .gradient {
        background-color: bisque;
        background: linear-gradient(90deg, lightblue, lightgreen, lightpink, yellow);
        background: linear-gradient(90deg, yellow, lightpink, lightgreen, lightblue);
    background-size: 300% 300%;
    color: black;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-position 0.5s ease;
    max-width: 400px;


    }

    .gradient:hover {
        background-position: 100% 100%;
    }

    a {
        color: green;
        display: block; 
        width: 100%;
        padding: 0.25rem 0.5rem;
    }

    ul {
        padding-top: 0.5rem;
    }

    li {
         margin: 0.25rem 0;
        background-color: aliceblue;
    }
    .card {
    transform: translateY(20px);
    transition: transform 0.5s ease; 
    }
  
    h2 {
        font-size: 2rem;
        padding: 0;
    }
    .spin-in {
      animation: spin-in 1s ease forwards;
    }
  
    .bounce-in {
      animation: bounce-in 1s ease forwards;
    }
  
    .slide-in {
      animation: slide-in 1s ease forwards;
    }
  
    .wiggle {
      animation: wiggle 1s ease forwards;
    }
  
    .zoom-in {
      animation: zoom-in 1s ease forwards;
    }
  
    .flip-in {
      animation: flip-in 1s ease forwards;
    }
  
    /* Example Keyframes */
    @keyframes spin-in {
      from {
        transform: rotate(-720deg) scale(0.5);
      }
      to {
        transform: rotate(0) scale(1);
      }
    }
  
    @keyframes bounce-in {
      0% {
        transform: translateY(200px);
      }
      60% {
        transform: translateY(-30px);
      }
      80% {
        transform: translateY(10px);
      }
      100% {
        transform: translateY(0);
      }
    }
  
    @keyframes slide-in {
      from {
        transform: translateX(-200px);
      }
      to {
        transform: translateX(0);
      }
    }
  
    @keyframes wiggle {
      0%, 100% {
        transform: rotate(0deg);
      }
      25% {
        transform: rotate(15deg);
      }
      50% {
        transform: rotate(-15deg);
      }
      75% {
        transform: rotate(5deg);
      }
    }
  
    @keyframes zoom-in {
      from {
        transform: scale(0.5);
      }
      to {
        transform: scale(1);
      }
    }
  
    @keyframes flip-in {
      from {
        transform: rotateY(180deg);
      }
      to {
        transform: rotateY(0);
      }
    }

    

  </style>
  
