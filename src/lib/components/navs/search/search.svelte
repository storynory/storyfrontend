<script>
let term = $state();
import { afterNavigate } from '$app/navigation';
import Fuse from 'fuse.js';
  import { data } from "$lib/components/navs/search/shared.svelte.js";
  
  const endpoint = "https://content.storynory.com/wp-content/searchapi2.json";
    let fuse; // Fuse instance
   
  
    // Fetch data from the API
    async function fetchData() {
        try {
            const response = await fetch(endpoint);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            let searchResult = await response.json();
            data.posts = searchResult.stories || []; // Populate posts
  
            const options = {
                keys: [
                    { name: "title", weight: 0.9 }, // Most important
                    { name: "categories.name", weight: 0.7 }, // Second most important
                    { name: "excerpt", weight: 0.15 }, // Third most important
                    { name: "categories.description", weight: 0.05 }, // Least important
                ],
                threshold: 0.4, // Adjust for fuzziness (0 = exact match, 1 = very fuzzy)
            };
            fuse = new Fuse(data.posts, options);
  
            // Perform initial search to display all posts
            performSearch();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
  
    // Perform search
    function performSearch() {
        if (fuse && data.term) {
            data.posts = fuse.search(data.term.trim()).map(match => match.item); // Map results to items
            
        } else if (fuse) {
            data.posts = []
             
        }
    }
  
    // Fetch data on component mount
    fetchData();

   



afterNavigate(() => {
    data.term = ''; // Clear the search box on navigation
});
</script>


<form class="search-form" action="/search" method="get">
   
      <input
       bind:value={data.term}
        class="search-input"
        type="text"
        name="q"
        placeholder="Search ME!"
        aria-label="Search"
        oninput={performSearch} 
      />
 
   
  </form>

  
  <style>
     .search-input {
    width: 300px;
    padding: 6px;
    border: none;
    font-size: 16px;
    border-radius: 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  }

  .search-form {
    justify-content: center;
    padding: 4px 0;
  }
  </style>