import { json } from '@sveltejs/kit';
import { PUBLIC_GRAPHQL } from '$env/static/public';
import {page } from './shared.svelte.js';

const endpoint = PUBLIC_GRAPHQL;



// Cache variables
let cache = new Map();
const cacheDuration = 1000 * 10 * 60; // 10 minutes

export async function GET({ url }) {
    const subcat = url.searchParams.get('subcat') || "brothers-grimm";
    const first = 10; // Default 10 posts per page
    const after = url.searchParams.get('after') || null; // Cursor for pagination
    const now = Date.now();

    // Cache key includes pagination
    const cacheKey = `${subcat}-${after || 'start'}`;

    // Check for valid cached data
    if (cache.has(cacheKey)) {
        const { data, timestamp } = cache.get(cacheKey);
        if (now - timestamp < cacheDuration) {
           // console.log(`hello from server: Returning cached data for key: ${cacheKey}`);
            return json(data);
        } else {
            cache.delete(cacheKey); // Cache expired
        }
    }

    const query = `
   query MyQuery($slug: ID!, $first: Int!, $after: String) {
  category(id: $slug, idType: SLUG) {
    description
    slug
    posts(first: $first, after: $after) {
      nodes {
        excerpt
        featuredImage {
          node {
      
            mediaDetails {
              sizes {
                height
                width
                sourceUrl
              }
            }
          }
        }
        title
        slug
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
}
    `;

    const variables = { slug: subcat, first, after};

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables })
        });

        const result = await response.json();

        if (result.errors) {
            console.error('GraphQL errors:', result.errors);
            return json({ errors: result.errors }, { status: 500 });
        }

        // Cache the fetched data
        cache.set(cacheKey, { data: result.data, timestamp: now });
     

        return json(result.data);
        
    } catch (error) {
        console.error('Error fetching data:', error);
        return json({ error: error.message }, { status: 500 });
    }
}
