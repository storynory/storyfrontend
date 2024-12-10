// Import necessary packages
import { gql, request } from 'graphql-request';
import { PUBLIC_GRAPHQL } from '$env/static/public';
import striptags from 'striptags';


// Define maximum posts to fetch to prevent infinite loops
const MAX_POSTS = 1200;

// Define batch size per request
const BATCH_SIZE = 100;

// GraphQL query with pagination variables
const query = gql`
  query AllPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          title
          excerpt
          uri
          categories(where: { exclude: [1, 11] }) {
            edges {
              node {
                name
                description
              }
            }
          }
        }
      }
    }
  }
`;

// Enable prerendering to generate the JSON at build time
export const prerender = true;

// Function to process text: strip HTML and remove stop words
function processText(text) {
  if (!text) return '';

  // 1. Strip HTML tags
  let strippedText = striptags(text);

 

  // 4. Split into words
  let words = strippedText.split(/\s+/);

 

  // 6. Join back into a string
  return words.join(' ');
}

export async function GET() {
  let allStories = [];
  let hasNextPage = true;
  let after = null;
  const endpoint = PUBLIC_GRAPHQL;

  try {
    while (hasNextPage && allStories.length < MAX_POSTS) {
      const variables = { first: BATCH_SIZE, after };
      const data = await request(endpoint, query, variables);

      // Check if 'posts' exists in the response
      if (!data || !data.posts) {
        console.warn('Warning: "posts" is null or undefined in the response.');
        break; // Exit the loop as there's no data to process
      }

      const { hasNextPage: nextPage, endCursor } = data.posts.pageInfo;
      const stories = data.posts.edges;

      // Ensure 'edges' is an array before concatenation
      if (Array.isArray(stories)) {
        allStories = allStories.concat(stories);
        console.log(`Fetched ${allStories.length} posts so far.`);
      } else {
        console.warn('Warning: "edges" is not an array.');
        break; // Exit the loop if 'edges' is not as expected
      }

      hasNextPage = nextPage;
      after = endCursor;

      // Additional safety to prevent infinite loops in unexpected scenarios
      if (!nextPage && stories.length === 0) {
        console.warn('No more posts to fetch.');
        break;
      }
    }

    // Limit to MAX_POSTS
    if (allStories.length > MAX_POSTS) {
      allStories = allStories.slice(0, MAX_POSTS);
    }

    console.log(`Total posts fetched: ${allStories.length}`);

    // Prepare the data for JSON output with safe mapping
    const responseData = {
      stories: allStories
        .filter(({ node }) => node) // Filter out any null nodes
        .map(({ node }) => ({
          id: node.id || '',
          title: processText(node.title || ''),
          excerpt: processText(node.excerpt || ''),
          uri: node.uri || '',
          categories: node.categories?.edges?.map(edge => ({
            name: edge.node.name || '',
            description: processText(edge.node.description || '') // Optionally process category descriptions
          })) || [] // Default to empty array if categories or edges are null
        }))
    };

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch posts' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
