<script>
import Search from "$lib/forms/search/search.svelte"

</script>

<!-- Navigation bar HTML structure -->


    <div class="navbar page-width" id="myNavbar">
        <a href="/">Storynory</a>
        <a href="/posts/">Stories</a>
        <a href="/pages/about-storynory/">About</a>
        <a href="/pages/about-storynory/">Support!</a>
        <Search />
</div>

<style>

    .navbar {
        display: flex;
        
        background-color: #007A5E;
       position: relative;
        font-family: 'Quicksand', sans-serif;
        width: 100%;
        align-items: center; /* Vertically centre elements */
         justify-content: start; /* Space out items */
        padding: 0 20px; /* Optional: Add padding for the navbar */
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

 
    .support {
        display: flex;
        position: relative;
        background-color: midnightblue;
        color: yellow;
        width: 100%;
        padding: 0 1rem;
        text-align: center;
    }
  
   .flex {
    display: flex;
    justify-content:space-evenly;

   }


    /* Add styles for the responsive navigation */
    @media screen and (max-width: 600px) {
       
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

    /* Hamburger menu styles */
 

.search-toggle .icon,
.hamburger-menu .icon {
    outline: none;
    width: 24px;
    height: 24px;
    fill: green;
}

button {
    border: none; /* Removes the default border */
    padding: 0; /* Eliminates default padding */
    margin: 0; /* Removes any margin */
    cursor: pointer; /* Indicates it's clickable */
}

.hamburger-menu:focus {
    outline: none;
    box-shadow: 0 0 3px 2px rgba(255, 204, 0, 0.8); /* Adds a yellow glow on focus */
}

.search-toggle  {
    margin: auto;
    width: 600px;

}




@media (min-width: 600px) {
    .search-form {
        display: flex;
        position: relative;
        width: auto;
        margin-top: auto;
        margin-bottom: auto;
         background-color: transparent;
        border: transparent;
    }

}
  
</style>

