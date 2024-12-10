// src/routes/posts/+server.js

import { gql, request } from 'graphql-request';
import { PUBLIC_GRAPHQL } from '$env/static/public';
const endpoint = 'https://www.storynory.com/graphql/';

// Cache variables
let cache = {};
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
  posts(first: 30) {
    nodes {
      content
      slug
      excerpt
    enclosure
      title
      featuredImage {
        altText
        guid
        mediaDetails {
          sizes {
            height
            width
          }
        }
      }
    }
  }
}
`;

  try {
    const data = await request(endpoint, query);
    //console.log('server data:', data)
  
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