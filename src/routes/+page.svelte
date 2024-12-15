<script>
  // src/routes/+page.js
    import Card from '$lib/components/panels/cardStory.svelte';
    import Banner from '$lib/components/Banner.svelte';
    let bk = 'background-image: url("/images/santa.webp")';
    import Side from '$lib/components/sidebars/asideFollowtheMoney.svelte'
    import Welcome from "$lib/components/panels/welcome.svelte";
    import IconBar from '$lib/components/iconBar.svelte';

    let { data } = $props();

    let posts = data.props.posts.stories || [];

    // Extract sizes array from post data


  
</script>
<svelte:head>
  <title>Storynory</title>
  <meta name="description" content="Free Audio Stories for Kids" />
</svelte:head>


{#snippet renderCard(post)}
    <div class="card-item">
        <Card  
            sizes = {post.featuredImage.node.mediaDetails.sizes}
            title={post.title}
            content={post.excerpt}
            thumb={post.featuredImage.node.mediaDetails.sizes[0].sourceUrl }
            thumbwidth={post.featuredImage.node.mediaDetails.sizes[0].width}
            thumbheight={post.featuredImage.node.mediaDetails.sizes[0].height}
            src={post.featuredImage.node.mediaDetails.sizes[1].sourceUrl}
            width={post.featuredImage.node.mediaDetails.sizes[1].width}
            height={post.featuredImage.node.mediaDetails.sizes[1].height}
            alt={post.featuredImage.node.altText}
            slug={post.slug}
        />

    </div>
{/snippet}

<div class="page page-width">
    <Banner img={bk}/>
  

    <main>
        {#if posts.length > 0}
            {#each posts as post, i}
                {#if i === 0}
                    <div class="card-item-full">
                        {@render renderCard(post)}
                    
                    </div>
                    <div class="welcome">
                        <Welcome />
                    </div>
                {:else}
                    {@render renderCard(post)}
                
                {/if}
            {/each}
        {:else}
            <p>No posts found. Please check back later!</p>
        {/if}
    </main>
    
</div>
<style>

.page {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
}

main {
    max-width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex: 1 1 100%;
    
}

/* Default styles (mobile-first approach) */
.welcome {
    max-width: 100%;
}

.card-item {
    flex: 1 1 100%; /* Default: cards stack on smaller screens */
}

.card-item-full {
    flex: 1 1 100%; /* Full-width alternative */
}

/* Media query for larger screens */
@media (min-width: 760px) {
    .welcome {
        max-width: 50%; /* Welcome takes half-width on larger screens */
    }

    .card-item {
        flex: 1 1 33%; /* Three cards per row on larger screens */
    }

    .card-item-full {
        flex: 1 1 50%; /* Alternative: spans two columns */
    }
}

</style>
