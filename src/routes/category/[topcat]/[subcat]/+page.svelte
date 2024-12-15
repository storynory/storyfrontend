<script>
    // Get props using runes
    let { data } = $props();
    import Card from '$lib/components/panels/cardStory.svelte';
    // Declare reactive state using $state
    let posts = $state([...data.cat.category.posts.nodes]); // Initial posts
    let hasNextPage = $state(data.hasNextPage); // Determines if more posts are available
    let after = $state(data.after); // Cursor for the next batch

    // Dynamically fetch and append the next posts
    async function loadMore() {
        if (!hasNextPage) return;

        const query = `./?after=${encodeURIComponent(after)}`;
        try {
            const response = await fetch(query);
            if (!response.ok) throw new Error('Failed to load more posts');

            const result = await response.json();

        // Update state reactively
        posts = [...posts, ...result.category.posts.nodes];
        after = result.category.posts.pageInfo.endCursor;
        hasNextPage = result.category.posts.pageInfo.hasNextPage;
    } catch (error) {
        console.error('Error loading more posts:', error);
    }
}

</script>
{#snippet renderCard(post)}
    <div class="card-item">
        <Card  
            sizes={post.featuredImage?.node?.mediaDetails?.sizes || []}
            title={post.title}
            content={post.excerpt}
        
            src={post.featuredImage.node.mediaDetails.sizes[1].sourceUrl}
         
            alt={post.featuredImage.node.altText}
            slug={post.slug}
        />

    </div>
{/snippet}
<div class="page page-width">
    <main class="j-bk-white -p" >
        <ul>
            {#each posts as post}
                <li>
                    {@render renderCard(post)}
                </li>
            {/each}
        </ul>

        {#if hasNextPage}
            <button onclick={loadMore} disabled={!hasNextPage}>
                {hasNextPage ? 'Load More' : 'No More Posts'}
            </button>
        {/if}
    </main>
</div>

<style>
    li {
        list-style: none;
    }

  

ul {
    max-width: 780px;
}
 
    button {
        margin-top: 20px;
        padding: 10px 20px;
        font-size: 18px;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }


  







</style>
