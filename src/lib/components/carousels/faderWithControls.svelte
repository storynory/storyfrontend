<script>
    //import { onMount } from 'svelte';

    // Images for the carousel
    let images = [
        {
            src: "https://www.storynory.com/wp-content/uploads/2023/05/witch-trouble-school-sq-600x487.jpg?ezimgfmt=rs:471x382/rscb6/ng:webp/ngcb6",
            alt: "Illustration of a witch causing trouble at a school"
        },
        {
            src: "https://www.storynory.com/wp-content/uploads/2023/05/with-frightened-halloween-600x454.jpg?ezimgfmt=rs:471x356/rscb6/ng:webp/ngcb6",
            alt: "Illustration of a frightened witch on Halloween night"
        },
        {
            src: "https://www.storynory.com/wp-content/uploads/2023/05/witch-lost-spells-600x336.jpg?ezimgfmt=rs:471x264/rscb6/ng:webp/ngcb6",
            alt: "Illustration of a witch who has lost her spellbook"
        },
        {
            src: "https://www.storynory.com/wp-content/uploads/2023/05/cat-gossip-5-600x427.jpg?ezimgfmt=rs:471x335/rscb6/ng:webp/ngcb6",
            alt: "Illustration of cats gossiping in a whimsical setting"
        },
        {
            src: "https://www.storynory.com/wp-content/uploads/2023/05/katiie-magic-umbrella-600x600.jpeg?ezimgfmt=rs:471x471/rscb6/ng:webp/ngcb6",
            alt: "Illustration of Katie holding a magical umbrella"
        }
    ];

    let currentIndex = 0;
    let autoCycle = true; // Toggle to enable/disable auto-cycling
    let interval;

    // Move to the next slide
    const next = () => {
        currentIndex = (currentIndex + 1) % images.length;
    };

    // Move to the previous slide
    const prev = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
    };

 
interval = setInterval(next, 4000); // Trigger next function every 4 seconds



</script>

<div class="carousel">
    {#each images as image, index}
        <div
            class="image-container {index === currentIndex ? 'current' : ''}"
            style="opacity: {index === currentIndex ? 1 : 0}"
        >
            <img src={image.src} alt={image.alt} />
        </div>
    {/each}
    <button class="prev" onclick={() => { prev(); clearInterval(interval); /* auto cycle stops on click to give user control*/}}>Previous</button>
    <button class="next" onclick={() => { next(); clearInterval(interval); }}>Next</button>
</div>

<style>
    :root {
        --animation-duration: 1.5s; /* Control fade duration */
    }

    .carousel {
        position: relative;
        overflow: hidden;
        width: 471px;
        height: 335px;
    }

    .carousel img {
        width: 471px;
        height: 335px;
        object-fit: cover;
    }

    .image-container {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        transition: opacity var(--animation-duration) ease-in-out;
    }

    .current {
        z-index: 2;
    }

    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, 0.5);
        color: white;
        border: none;
        padding: 10px 20px;
        cursor: pointer;
        z-index: 3;
    }

    .prev {
        top: 300px;
        left: 10px;
    }

    .next {
        top: 300px;
        right: 10px;
    }

    button:hover {
        background: rgba(0, 0, 0, 0.8);
    }
</style>
