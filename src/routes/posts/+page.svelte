<!-- src/routes/posts/+page.svelte -->
<script>
	let { data } = $props();
  
</script>

<div class="page -p">
<main>
<h1 class="post-title">Latest Posts</h1>
<ul>
	{#each data.stories as post}
		<li>
            <h2><a href="/{post.slug}/">{@html post.title}</a></h2>
<img src="{post.featuredImage.guid}" alt="featured"/>

<p class="excerpt">{@html post.excerpt.replace(/^<[^>]+>|<[^>]+>$/g, "")}</p>

<div class="card-body">

</div>
            
        </li>
	{/each}
</ul>
</main>
</div>

