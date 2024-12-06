import { error } from '@sveltejs/kit';
import {PUBLIC_GRAPHQL } from '$env/static/public';

export async function load({ fetch }) {
 

  const query = `
query MyQuery {
  category(id: "171", idType: DATABASE_ID) {
    name
    children {
      nodes {
        name
        uri
        slug
        description
        count
      }
    }
  }
}

`;

  try {
    const response = await fetch(PUBLIC_GRAPHQL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query
      }),
    });

    const result = await response.json();
    //console.log("fairies", result.data.category.children.nodes )

    if (!response.ok || result.errors) {
      console.error('GraphQL error:', result.errors);
      throw error(500, 'Error fetching page data');
    }


    return {
      cat: result.data.category.children.nodes 
     
    };
  } catch (err) {
    console.error('Fetch error:', err);
    throw error(500, 'Internal server error');
  }
}
