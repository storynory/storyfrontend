<script>
    // Get props using runes
    let { data } = $props();

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
<div class="page -p">
    <main >
        <ul>
            {#each posts as post}
                <li>
                    <h2><a href="/{post.slug}/">{@html post.title}</a></h2>
                    <p class="excerpt">{@html post.excerpt.replace(/^<[^>]+>|<[^>]+>$/g, "")}</p>
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

    h2 {
        font-size: 40px;
        color: green;
    }

    p.excerpt {
        font-weight: 500;
        font-size: 24px;
        font-family: Arial, Helvetica, sans-serif;
    }

    ul {
        width: 600px;
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
