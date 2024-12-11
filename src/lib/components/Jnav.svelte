<script>
import Search from "$lib/forms/search/search.svelte"

</script>

<!-- Navigation bar HTML structure -->

<nav class="j-bk-prime">
 
    <div class="navbar page-width" id="myNavbar">
        <a href="/">Storynory</a>
        <a href="/posts/">Stories</a>
        <a href="/pages/about-storynory/">About</a>
        <a href="/pages/about-storynory/">Support!</a>
        <Search />    
    </div>

</nav>
    <div class="result">
        search results go here
    </div>
<style>

.result {
    position: relative; /* Change from absolute to relative */
    display: flex;
    justify-content: center;
    background-color: white;
    width: 100%;
    z-index: 100;
    margin-top: 10px; /* Optional: Adds spacing below the nav bar */
}
    
    .navbar {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        font-family: 'Quicksand', sans-serif;
        width: 100%;
        align-items: center; /* Vertically centre elements */
        justify-content: center; /* Space out items */
    }


  
    /* Style the navigation links */
    .navbar a {
        float: left;
        color: white;
        text-align: center;
        padding: 14px 20px;
        text-decoration: none;
        font-size: 18px;
        transition: transform 0.3s, background-color 0.3s;
        font-family: 'Quicksand', sans-serif;
    }

    /* Change the color of the navigation links on hover */
    .navbar a:hover {
        background-color: #ffcc00;
        color: #333;
        transform: scale(1.1) rotate(-5deg);
    }

    /* Add a wacky effect to the active state of the links */
    .navbar a:active {
        animation: wacky 0.5s infinite;
    }


    /* Keyframes animation for the wacky effect */
    @keyframes wacky {
        0% {
            transform: rotate(0) scale(1);
        }

        25% {
            transform: rotate(-5deg) scale(1.2);
        }

        50% {
            transform: rotate(5deg) scale(0.9);
        }

        75% {
            transform: rotate(-3deg) scale(1.1);
        }

        100% {
            transform: rotate(0) scale(1);
        }
    }

    /*search results opn */
    @keyframes openAnimation {
    from {
        max-height: 0;
    }
    to {
        max-height: 100px; /* Adjust to the maximum expected height */
    }
}

@keyframes closeAnimation {
    from {
        max-height: 1000px; /* Same value as above */
    }
    to {
        max-height: 0;
    }
}

.result {
    overflow: hidden;
    max-height: 0;
}

.result.open {
    animation: openAnimation 0.5s ease-out forwards;
}

.result.closed {
    animation: closeAnimation 0.5s ease-out forwards;
}

  
</style>

