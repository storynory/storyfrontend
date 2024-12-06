<!-- Css only carousal-->
<div class="carousel">
    <div>
        <img src="https://www.storynory.com/wp-content/uploads/2023/05/witch-trouble-school-sq-600x487.jpg?ezimgfmt=rs:471x382/rscb6/ng:webp/ngcb6" 
             alt="Illustration of a witch causing trouble at a school"/>
    </div>
    <div>
        <img src="https://www.storynory.com/wp-content/uploads/2023/05/with-frightened-halloween-600x454.jpg?ezimgfmt=rs:471x356/rscb6/ng:webp/ngcb6" 
             alt="Illustration of a frightened witch on Halloween night"/>
    </div>
    <div>
        <img src="https://www.storynory.com/wp-content/uploads/2023/05/witch-lost-spells-600x336.jpg?ezimgfmt=rs:471x264/rscb6/ng:webp/ngcb6" 
             alt="Illustration of a witch who has lost her spellbook"/>
    </div>
    <div>
        <img src="https://www.storynory.com/wp-content/uploads/2023/05/cat-gossip-5-600x427.jpg?ezimgfmt=rs:471x335/rscb6/ng:webp/ngcb6" 
             alt="Illustration of cats gossiping in a whimsical setting"/>
    </div>
    <div>
        <img src="https://www.storynory.com/wp-content/uploads/2023/05/katiie-magic-umbrella-600x600.jpeg?ezimgfmt=rs:471x471/rscb6/ng:webp/ngcb6" 
             alt="Illustration of Katie holding a magical umbrella"/>
    </div>
</div>

<style>
    :root {
        --animation-duration: 20s; /* Control the duration here */
    }

    .carousel {
        position: relative;
        overflow: hidden; 
        width: 600px;
        height: 600px;
    }
    .carousel img {
        width: 471px;
        height: 335px; 
    }

    .carousel>* {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-size: cover;
    }

    /* Slide animations */
    .carousel>*:nth-child(1) {
        animation: fade1 var(--animation-duration) infinite;
    }
    @keyframes fade1 {
        0%   {opacity: 1;}
        20%  {opacity: 0;}
        40%  {opacity: 0;}
        60%  {opacity: 0;}
        80%  {opacity: 0;}
        100% {opacity: 1;}
    }

    .carousel>*:nth-child(2) {
        animation: fade2 var(--animation-duration) infinite;
    }
    @keyframes fade2 {
        0%   {opacity: 0;}
        20%  {opacity: 1;}
        40%  {opacity: 0;}
        60%  {opacity: 0;}
        80%  {opacity: 0;}
        100% {opacity: 0;}
    }

    .carousel>*:nth-child(3) {
        animation: fade3 var(--animation-duration) infinite;
    }
    @keyframes fade3 {
        0%   {opacity: 0;}
        20%  {opacity: 0;}
        40%  {opacity: 1;}
        60%  {opacity: 0;}
        80%  {opacity: 0;}
        100% {opacity: 0;}
    }

    .carousel>*:nth-child(4) {
        animation: fade4 var(--animation-duration) infinite;
    }
    @keyframes fade4 {
        0%   {opacity: 0;}
        20%  {opacity: 0;}
        40%  {opacity: 0;}
        60%  {opacity: 1;}
        80%  {opacity: 0;}
        100% {opacity: 0;}
    }

    .carousel>*:nth-child(5) {
        animation: fade5 var(--animation-duration) infinite;
    }
    @keyframes fade5 {
        0%   {opacity: 0;}
        20%  {opacity: 0;}
        40%  {opacity: 0;}
        60%  {opacity: 0;}
        80%  {opacity: 1;}
        100% {opacity: 0;}
    }
</style>
