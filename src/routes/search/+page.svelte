<script>
    import { run } from 'svelte/legacy';
    import { PUBLIC_GRAPHQL } from '$env/static/public';
    import { page } from '$app/stores'; // Import to read URL query parameters
    import { onDestroy } from 'svelte';
    


    let searchTerm = $state(''); // Search term entered by the user
    let results = $state([]); // Results fetched from the GraphQL endpoint
    let loading = $state(false); // Loading state
    let hasMore = $state(true); // Indicates if there are more posts to load
    let endCursor = null; // Tracks the pagination cursor
    let debounceTimeout;


    // Function to fetch search results
    async function fetchResults(isLoadMore = false) {
        if (!searchTerm.trim() && !isLoadMore) {
            results = [];
            return;
        }

        loading = true;
        try {
            const response = await fetch(PUBLIC_GRAPHQL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: `
                        query SearchPosts($search: String!, $first: Int!, $after: String) {
                            posts(where: { search: $search }, first: $first, after: $after) {
                                edges {
                                    node {
                                        id
                                        title
                                        excerpt
                                        uri
                                    }
                                }
                                pageInfo {
                                    endCursor
                                    hasNextPage
                                }
                            }
                        }
                    `,
                    variables: {
                        search: searchTerm,
                        first: 5, // Number of posts per page
                        after: isLoadMore ? endCursor : null // Fetch next page if loading more
                    }
                })
            });

            const data = await response.json();
            const newResults = data?.data?.posts?.edges?.map(edge => edge.node) || [];
            if (isLoadMore) {
                results = [...results, ...newResults]; // Append new results
            } else {
                results = newResults; // Replace results
            }

            // Update pagination info
            endCursor = data?.data?.posts?.pageInfo?.endCursor || null;
            hasMore = data?.data?.posts?.pageInfo?.hasNextPage || false;
        } catch (error) {
            console.error('Error fetching search results:', error);
        } finally {
            loading = false;
        }
    }

    // Debounced input handler
    function handleInput() {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(() => {
            updateQueryParameter(); // Update the URL query parameter
            fetchResults(false); // Fetch results for the updated query
        }, 300);
    }

    // Update the query parameter in the URL
    function updateQueryParameter() {
        const url = new URL(window.location);
        if (searchTerm.trim()) {
            url.searchParams.set('query', encodeURIComponent(searchTerm));
        } else {
            url.searchParams.delete('query');
        }
        window.history.replaceState({}, '', url); // Update URL without reloading
    }

    // Cleanup timeout on component destroy
    onDestroy(() => clearTimeout(debounceTimeout));
    // Read the initial search term from the query parameter
    run(() => {
        (function initializeSearchTerm() {
            const initialQuery = $page.url.searchParams.get('query');
            if (initialQuery) {
                searchTerm = decodeURIComponent(initialQuery);
                fetchResults(false); // Fetch results for the initial query
            }
        })();
    });
</script>

<div class="page -p">
<main>
<div class="search-container">
    <!-- Input field for dynamic search -->
    <input
        bind:value={searchTerm}
        placeholder="Search here..."
        oninput={handleInput}
    />

    <h1>Search Results</h1>

    {#if loading && !results.length}
        <p>Loading...</p>
    {/if}

    {#if !loading && results.length === 0 && searchTerm.trim()}
        <p>No results found for "{searchTerm}"</p>
    {/if}

    <ul>
        {#each results as post}
            <li>
                <a href={post.uri} >
                    <h2>{post.title}</h2>
                </a>
                <p>{@html post.excerpt}</p>
            </li>
        {/each}
    </ul>

    {#if hasMore && results.length > 0}
        <button onclick={() => fetchResults(true)} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
        </button>
    {/if}
</div>
</main>
</div>


<style>
    .search-container {
        text-align: center;
        background: white;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        margin: 50px auto;
    }

    input {
        width: 100%;
        padding: 10px;
        font-size: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-bottom: 20px;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 15px;
        text-align: left;
    }

    h2 {
        margin: 0;
        font-size: 1.2rem;
    }

    p {
        margin: 5px 0 0;
        font-size: 0.9rem;
        color: #666;
    }

    button {
        background-color: #007acc;
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 1rem;
        border-radius: 5px;
        cursor: pointer;
        margin-top: 10px;
    }

    button:hover {
        background-color: #005fa3;
    }

    button:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
</style>
