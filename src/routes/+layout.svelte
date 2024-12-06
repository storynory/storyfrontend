<!-- src/routes/+layout.svelte -->
<script>
	let { children } = $props();
  import "../app.css";
  import Jnav from '$lib/components/Jnav.svelte';
 

</script>
<div class="wrap j-bk-prime ">
    
  <Jnav />


{@render children()}
</div>
<style>

</style>