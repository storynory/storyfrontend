<script>
 import Snowfall from './snow.svelte';
let { img } = $props();
/*     background-image: url("/images/banner-dragons-1.jpg");
        background-image: url("/images/banner-img-1.jpg");
        background-image: url("/images/l-p-frog.png");
        */

</script>

<div class="banner" style="{ img }">
    <Snowfall />
    <div class="banner-content">

        <h1>
            Storynory
        </h1>
        <p>Free Audio Stories</p>
    </div>
</div>

<style>
    /* Banner */
    .banner {
        box-sizing: border-box;
        background-size: cover;
   
        background-position: left 50% bottom -180px !important;
        background-repeat: repeat-x;
        padding-bottom: 60px;
 position: relative;
    overflow: hidden;
    width: 100%;
    background: linear-gradient(#123, #111);
    z-index: 1;
}

    

    .banner-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: ivory;
    }



    .banner h1 {
        font-size: 100px;
        margin-top: 20px;
        text-align: center;
        letter-spacing: 2px;
        text-shadow: 3px 3px 6px rgba(0, 35, 102, 0.8);
        background-color: rgba(0, 35, 100, 0.5);
        padding: 15px 25px;
        color: yellowgreen;
        border-radius: 10px;
       
        /* Add rounded corners */
    }

    .banner p {
        font-size: 24px;
        margin-top: 10px;
        text-align: center;
        color: #FFDF00;
        background-color: rgba(0, 35, 100, 0.5);
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        padding: 5px;
        border-radius: 10px;
        /* Add rounded corners */
    }

   
  
/* Adjust background position for smaller screens */
@media (max-width: 800px) {
    .banner {
        background-position: left 50% bottom -130px;
     background-repeat: no-repeat;
   
    }
    .banner h1 {
       font-size: 60px;
    }
}

</style>
