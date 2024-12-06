<script>
    let currentSlideIndex = 0;
    let slidesContainer; // Reference to the slides container
    let smoothScroll = true; // Toggle for smooth scrolling or instant jump
  

    const slides = [
        { id: "slide-1", src: "https://relaxivity.app/images/1000/lanval-videoart.webp", alt: "Slide 1" },
        { id: "slide-2", src: "https://relaxivity.app/images/1000/buddha-videoart.webp", alt: "Slide 2" },
        { id: "slide-3", src: "https://relaxivity.app/images/1000/buddha-tree-videoart.webp", alt: "Slide 3" },
        { id: "slide-4", src: "https://relaxivity.app/images/1000/grasshopper-videoart.webp", alt: "Slide 4" },
        
    ];

    const updateSlideIndex = () => {
        const slideWidth = slidesContainer.offsetWidth;
        currentSlideIndex = Math.round(slidesContainer.scrollLeft / slideWidth);
    };

    const changeSlide = (direction) => {
        currentSlideIndex += direction;

        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1;
        }
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0;
        }

        slidesContainer.scrollTo({
            left: currentSlideIndex * slidesContainer.offsetWidth,
            behavior: smoothScroll ? "smooth" : "auto" // Toggle smooth or instant behaviour
        });
    };
</script>

<div class="page">
    <div class="container">
       
        <nav id="slides-nav">
            {#each slides as slide, index}
                <button
                    class="{index === currentSlideIndex ? 'active' : ''}"
                    onclick={() => {
                     
                        currentSlideIndex = index;
                        slidesContainer.scrollTo({
                            left: index * slidesContainer.offsetWidth,
                            behavior: smoothScroll ? "smooth" : "auto" // Toggle behaviour
                        });
                       
                    }}
                >
                    {index + 1}
                </button>
            {/each}
        </nav>
        <div class="navigation prv">
            <button class="prev" onclick={() => changeSlide(-1)}>Prev</button>
        </div>
        <div class="carousel">
            <div bind:this={slidesContainer} class="slides " onscroll={updateSlideIndex}>
                {#each slides as slide}
                    <div id={slide.id} class="slide" >
                        <img src={slide.src} alt={slide.alt} />
                    </div>
                {/each}
            </div>
        </div>
    </div>
    <div id="next" class="navigation nxt">
        <button class="next" onclick={() => changeSlide(1)}>Next</button>
    </div>
</div>

<div class="container">Slide: {currentSlideIndex + 1} of {slides.length}</div>

<style>
    img {
        max-width: 100%;
        height: auto;
    }

    .carousel {
        background: blue;
        width: 100%;
        max-width: 986px;
        height: 0;
        padding-bottom: 56%;
        margin: auto;
        overflow: hidden;
        position: relative;
        border-radius: 10px;
    }

    .slides {
        display: flex;
        position: absolute;
        max-width: 1000px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow-x: scroll;
        overscroll-behavior: contain;
        overflow-y: hidden;
    }

    .slides > div {
        flex: 0 0 100%;
        width: 100%;
        height: 100%;
        scroll-snap-align: start;
    }

    nav button {
        margin: 0 5px;
        padding: 5px 10px;
        border: none;
        background: none;
        font: inherit;
        cursor: pointer;
    }

    nav button.active {
        font-weight: bold;
        color: red;
    }

    nav button:hover {
        text-decoration: underline;
    }

    .page {
        max-width: 986px;
    }



    
</style>
