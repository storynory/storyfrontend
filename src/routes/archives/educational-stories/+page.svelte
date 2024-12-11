<script>
    //fairytales
	let { data } = $props();
    import CatPanel from '$lib/components/CatPanel.svelte'
    import Banner from '$lib/components/Banner.svelte';

      let bk = 'background-image: url("/images/banner-img-1.jpg");'
      
</script>
<Banner
  img = {bk} 
/>
<main class="grid j-bk-white -p">
{#each data.cat as fairy}

   <CatPanel 
   topcat ="classic-authors"
   title = {fairy.name}
   slug = {fairy.slug}
   content = {fairy.description}
   />

{/each}
</main>

<style>

  

    @media (min-width: 776px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Three equal columns */
    gap: 1rem; /* Adjust the gap between grid items as needed */
  }


}



@media (min-width: 992px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Three equal columns */
    gap: 1rem; /* Adjust the gap between grid items as needed */
  }

 
}

@media (min-width: 1500px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Three equal columns */
    gap: 1rem; /* Adjust the gap between grid items as needed */
  }

 
}



</style>