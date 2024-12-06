<script>
    //fairytales
	let { data } = $props();
    import CatPanel from '$lib/components/CatPanel.svelte'
    import Banner from '$lib/components/snowBanner.svelte';

</script>
<Banner/>
<main class="grid">
{#each data.cat as fairy}

   <CatPanel 
   topcat="original-stories-for-children"
   title = {fairy.name}
   slug = {fairy.slug}
   content = {fairy.description}
   srcSet={fairy.categoryInfo?.categoryImage?.node?.srcSet} 
   alt ={fairy.categoryInfo?.categoryImage?.node?.altText} 
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