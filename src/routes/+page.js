// src/routes/+page.js
export async function load({ fetch }) {
    const response = await fetch('/'); // Fetching data from your root server endpoint
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    //console.log("page.js", data.data.category.posts)
    const posts = data;
   
    return { props: { posts } };
  }
  