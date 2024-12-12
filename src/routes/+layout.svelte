<!-- src/routes/+layout.svelte -->
<script>
	let { children } = $props();
  import "../app.css";
  import Jnav from '$lib/components/navs/Jnav.svelte';
 

</script>
<div class="j-bk-prime ">
    
  <Jnav />


{@render children()}
</div>
<style>

</style>