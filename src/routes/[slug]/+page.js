// src/routes/posts/[slug]/+page.js
export const prerender = false
import { error } from '@sveltejs/kit';
import {PUBLIC_GRAPHQL } from '$env/static/public';
export async function load({ fetch, params }) {
const { slug } = params;
//  const slug = 'jakes-spell-of-bad-luck'
  console.log('Slug:', slug);

  const query = `
    query GetPostBySlug($slug: String!) {
      postBy(slug: $slug) {
        title
        filteredContent
        content
        date
        mp3Url 
        mp3Duration
        
      }
    }
  `;

  const response = await fetch(PUBLIC_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
     query,
      variables: { slug }
    })
  });

  const result = await response.json();


  if (!response.ok || result.errors) {
    console.error('Fetch or GraphQL error:', response.statusText, result.errors);
    throw error(500, 'Error fetching data');
  }

  if (!result.data || !result.data.postBy) {
    console.warn('Post not found for slug:', slug);
    throw error(404, 'Post not found');
  }

  return {
    post: result.data.postBy
  };
}

