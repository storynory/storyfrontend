import { error } from '@sveltejs/kit';
import { PUBLIC_GRAPHQL } from '$env/static/public';
const endpoint = PUBLIC_GRAPHQL;
export async function load({ fetch }) {
  const slug = 'about-storynory'; // Hardcoded slug for the page

  const query = `
 query MyQuery {
  page(id: "768", idType: DATABASE_ID) {
    slug
    title
    content
  }
}
`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query,
        variables: { slug },
      }),
    });

    const result = await response.json();
   

    if (!response.ok || result.errors) {
      console.error('GraphQL error:', result.errors);
      throw error(500, 'Error fetching page data');
    }


    return {
      page: result.data.page  
     
    };
  } catch (err) {
    console.error('Fetch error:', err);
    throw error(500, 'Internal server error');
  }
}
