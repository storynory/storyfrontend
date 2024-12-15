// src/routes/posts/+server.js
import { PUBLIC_GRAPHQL } from '$env/static/public';

const endpoint = PUBLIC_GRAPHQL;

export async function GET() {
  // GraphQL query to fetch posts
  const query = `
    query MyQuery {
      posts(first: 12) {
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
    // Encode the query into the URL
    const url = new URL(endpoint);
    url.searchParams.append('query', query);
    url.searchParams.append('limit', 10);

    // Fetch data from GraphQL endpoint using GET
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // Parse the response
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    const stories = data.data.posts.nodes;

    // Return the stories as a JSON response
    return new Response(JSON.stringify({ stories }), {
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
