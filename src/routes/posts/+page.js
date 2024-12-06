// src/routes/posts/+page.js
export async function load({ fetch }) {
  const response = await fetch('/posts'); // Fetch directly from +server.js
  if (response.ok) {
    const data = await response.json();
let stories = data.stories
    return { stories}; // Pass content directly to +page.svelte
   
  } else {
    return { error: 'Failed to load post titles' };
  }
}