<script>
import Search from "$lib/components/navs/search/search.svelte"
    import A from "../../../routes/[...error].svelte"
 
</script>

<!-- Navigation bar HTML structure -->

<nav class="">
    
    <div class="navbar page-width" id="myNavbar">
        <a href="/">  <img class="bertie-icon" src="/images/bertie.svg" alt="bertie icon" height="120" width="82.4"/>
            Storynory</a>
        <a href="/posts/">Stories</a>
        <a href="/pages/about-storynory/">About</a>
        <a href="/pages/about-storynory/">Support!</a>
     
    </div>
</nav>
 
<style>

.bertie-icon {
display: inline-block;
padding-right: 1em;

}

nav {
    background-color: ivory;
}

.result {
   position: absolute;
    background-color: white;
    z-index: 100;  
    width: 100%;
}

.result ul {
    display: block;
    width: 800px;
    margin: auto;
}
    
    .navbar {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        width: 100%;
        align-items: center; /* Vertically centre elements */
        justify-content: center; /* Space out items */
    
    }


  
    /* Style the navigation links */
    .navbar a {
        float: left;
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



  
</style>

