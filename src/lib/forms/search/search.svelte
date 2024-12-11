<script>
    import Fuse from 'fuse.js';
  
    let term = $state(''); // The search term
    let result = $state([]); // The search results
    let posts = []; // The fetched stories
    const endpoint = "https://content.storynory.com/wp-content/searchapi2.json";
  
    let fuse; // Fuse instance
  
    // Fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let data = await response.json();
        posts = data.stories || []; // Populate posts
  
        const options = {
  keys: [
    { name: "title", weight: 0.9 }, // Most important
    { name: "categories.name", weight: 0.7 }, // Second most important
    { name: "excerpt", weight: 0.15 }, // Third most important
    { name: "categories.description", weight: 0.05 }, // Least important
  ],
  threshold: 0.4, // Adjust for fuzziness (0 = exact match, 1 = very fuzzy)
};
        fuse = new Fuse(posts, options);

  
  
        // Perform initial search to display all posts
        performSearch();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
  
    // Perform search
    function performSearch() {
      if (fuse && term.trim()) {
        result = fuse.search(term).map(match => match.item); // Map results to items
      } else if (fuse) {
        result = posts; // Show all posts if no search term
      }
    }
  
    // Fetch data on component mount
    fetchData();
  </script>
  
  <!-- Search Form -->
  <form class="search-form">
    <input
      bind:value={term}
      class="search-input"
      type="text"
      name="query"
      placeholder="Search ME!"
      aria-label="Search"
      oninput={performSearch} 
    />
  </form>
  
  <!-- Display Results -->
  <div class="result">
    {#if result.length > 0}
      <ul>
        {#each result as story}
          <li>
            <strong>{@html story.title}</strong>
            <p>{@html story.excerpt}</p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No results found for "{term}".</p>
    {/if}
  </div>
  
  <style>

.result {
position: absolute;
top:0;
left: 0;
background-color: white;
display: none;
z-index: 100;
overflow: hidden;

}

    .search-input {
      width: 300px;
      padding: 6px;
      border: none;
      font-size: 16px;
      border-radius: 50px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  
    .search-form {
      justify-content: center;


    }
  
    .result {
      max-width: 600px;
      margin: 0 auto;
    }
  
    ul {
      list-style: none;
      padding: 0;
    }
  
    li {
      margin-bottom: 10px;
    }
  </style>
  