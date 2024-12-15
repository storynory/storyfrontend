// src/routes/+server.js

const endpoint = 'https://content.storynory.com/wp-json/wp/v2';

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

  try {
    // Fetch data from WordPress REST API with specific fields
    const response = await fetch(`${endpoint}/posts?per_page=10&_fields=id,slug,title,excerpt,_links.wp:featuredmedia`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();

    // Fetch featured media in a separate request for optimisation
    const mediaPromises = posts.map((post) => {
      const mediaHref = post._links?.['wp:featuredmedia']?.[0]?.href;
      if (mediaHref) {
        return fetch(mediaHref)
          .then((mediaResponse) => (mediaResponse.ok ? mediaResponse.json() : null))
          .catch(() => null);
      }
      return null;
    });

    const mediaResults = await Promise.all(mediaPromises);

    // Combine post data with featured media
    const stories = posts.map((post, index) => {
      const featuredMedia = mediaResults[index];
      return {
        excerpt: post.excerpt.rendered,
        title: post.title.rendered,
        slug: post.slug,
        featuredImage: featuredMedia
          ? {
              node: {
                altText: featuredMedia.alt_text || '',
                mediaDetails: {
                  sizes: Object.keys(featuredMedia.media_details?.sizes || {}).map((key) => {
                    const size = featuredMedia.media_details.sizes[key];
                    return {
                      name: key,
                      sourceUrl: size.source_url,
                      height: size.height,
                      width: size.width,
                    };
                  }),
                },
              },
            }
          : {
              node: {
                altText: '',
                mediaDetails: { sizes: [] },
              },
            },
      };
    });

    // Log data for debugging
    // console.log(JSON.stringify(stories, null, 2));

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
