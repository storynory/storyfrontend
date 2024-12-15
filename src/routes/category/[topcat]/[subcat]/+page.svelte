<script>
    // Get props using runes
    let { data } = $props();
    let isReversed = $state();
    let categoryDescription = data?.cat?.category?.description || "Default Description";
    let categoryName = data?.cat?.category?.name || "Default Category Name";
    import Card from '$lib/components/panels/cardStory.svelte';
    // Declare reactive state using $state
    let posts = $state([...data.cat.category.posts.nodes]); // Initial posts
    let hasNextPage = $state(data.hasNextPage); // Determines if more posts are available
    let after = $state(data.after); // Cursor for the next batch

    // Dynamically fetch and append the next posts
    async function loadMore() {
    if (!hasNextPage) return;

    const query = `./?subcat=${data.cat.category.slug}&after=${encodeURIComponent(after)}`;
    try {
        const response = await fetch(query);
        if (!response.ok) throw new Error('Failed to load more posts');

        const result = await response.json();

        let newPosts = result.category.posts.nodes;

        if (isReversed) {
            // Prepend new posts when reversed
            posts = [...newPosts.reverse(), ...posts];
        } else {
            // Append new posts when not reversed
            posts = [...posts, ...newPosts];
        }

        after = result.category.posts.pageInfo.endCursor;
        hasNextPage = result.category.posts.pageInfo.hasNextPage;
    } catch (error) {
        console.error('Error loading more posts:', error);
    }
}

function reverseOrder() {
    isReversed = !isReversed;
    posts = [...posts].reverse(); // Reverse the array in place
}
</script>
{#snippet renderCard(post)}
    <div class="card-item">
        <Card  
        sizes={post.featuredImage.node.mediaDetails.sizes}
        title={post.title}
        content={post.excerpt}
        alt={post.featuredImage.node.altText}
        slug={post.slug}
      />
      

    </div>
{/snippet}
<div class="page page-width">
    <main class="j-bk-white -p" >
 <header>   
<h1>{categoryName}</h1>
{@html categoryDescription}
</header> 
        <button onclick={reverseOrder}>
            Reverse Order
        </button>
          {#if hasNextPage && isReversed === true}
            <button onclick={loadMore} disabled={!hasNextPage}>
                {hasNextPage ? 'Load More' : 'No More Posts'}
            </button>
        {/if}
        <ul>
            {#each posts as post (post.slug)}
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
