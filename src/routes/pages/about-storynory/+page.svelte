<!-- src/routes/posts/+page.svelte -->
<script>
	let { data } = $props();
</script>

<div class="page -p">

<main>
<h2>{data.page.title}</h2>
{@html data.page.content}


</main>
</div>

<style>


h2 {
font-size: 40px;
color: green;
}



</style>