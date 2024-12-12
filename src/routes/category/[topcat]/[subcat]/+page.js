// src/routes/category[topcat]/[subcat]/+page.js
import {page } from './shared.svelte.js';

export async function load({ fetch, params, url}) {
   
    // Make a request to your +server.js endpoint
   // Use URLSearchParams to get the 'end' parameter
const after = url.searchParams.get('after');

const response = await fetch(`./?subcat=${params.subcat}&after=${after}`);
    if (response.ok) {
        const data = await response.json();

        // Pass the data to the +page.svelte file
        let cat = data;
    
     
        return { 

            cat,// Data for initial posts
            after: data.category.posts.pageInfo.endCursor,
            hasNextPage: data.category.posts.pageInfo.hasNextPage,

        };
    } else {
        return { error: 'Failed to load category data' };
    }
}