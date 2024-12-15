// src/routes/posts/+server.js
import { gql, request } from 'graphql-request';
import { PUBLIC_GRAPHQL } from '$env/static/public';
const endpoint =  PUBLIC_GRAPHQL

// Cache variables
let cache = null;
let cacheTime = 0;
const cacheDuration = 1000 * 10 * 60; // 10 minutes

export async function GET() {
  const now = Date.now();

  // Check if we have valid cached data
  if (cache && now - cacheTime < cacheDuration) {
    console.log('Returning cached data');
    return new Response(JSON.stringify(cache), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // If no valid cache, fetch fresh data
  const query = gql`
query MyQuery {
 posts(first: 10) {
    nodes {
      excerpt
      title
      slug
      featuredImage {
        node {
          altText
          mediaDetails {
            sizes {
              name
              sourceUrl
              height
              width
            }
          }
        }
      }
    }
  }
}
`;

  try {
    const data = await request(endpoint, query);
    
  
    let  stories = data.posts.nodes
    // Update cache with the fetched data and cache time
    cache = { stories };
    cacheTime = now;

    return new Response(JSON.stringify(cache), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}