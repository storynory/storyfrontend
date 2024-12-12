<script>
    import Search from "$lib/components/navs/search/search.svelte"
    import { data} from "$lib/components/navs/search/shared.svelte.js";
    
    
</script>

<main class="j-bk-white page-width -p">
   <h2>Search Results:</h2>
   
    
    <div class="result">
        {#if data.posts}
            <ul>
                {#each data.posts as post}
                    <li>
                  <a href="{post.uri}">     <h3>{post.title}</h3></a>
                        <p>{post.excerpt}</p>
                        <small>{post.categories?.map(category => category.name).join(", ")}</small>
                    </li>
                {/each}
            </ul>
        {:else}
            <p>No results found</p>
        {/if}
    </div>
</main>

<style>

  


    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 10px;
    }

    .result p {
        font-style: italic;
        color: #666;
    }
</style>
