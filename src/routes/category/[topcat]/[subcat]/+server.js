// routes/+server.js

import { json } from '@sveltejs/kit';
import { PUBLIC_GRAPHQL } from '$env/static/public';

const endpoint = PUBLIC_GRAPHQL;

// Cache variables
let cache = new Map();
const cacheDuration = 1000 * 10 * 60; // 10 minutes

export async function GET({ url }) {
    const subcat = url.searchParams.get('subcat') || "brothers-grimm";
    const first = parseInt(url.searchParams.get('first')) || 10; // Default 10 posts per page
    const after = url.searchParams.get('after') || null; // Cursor for pagination
    const now = Date.now();

    // Cache key includes pagination
    const cacheKey = `${subcat}-${after || 'start'}`;

    // Check for valid cached data
    if (cache.has(cacheKey)) {
        const { data, timestamp } = cache.get(cacheKey);
        if (now - timestamp < cacheDuration) {
            return json({ ...data, cacheHit: true }); // Indicate cache was used
        } else {
            cache.delete(cacheKey); // Cache expired
        }
    }

    // Construct the GraphQL query and encode it into the URL
    const query = `
    query MyQuery($slug: ID!, $first: Int!, $after: String) {
        category(id: $slug, idType: SLUG) {
            description
            slug
            posts(first: $first, after: $after) {
                nodes {
                    excerpt
                    featuredImage {
                        node {
                            mediaDetails {
                                sizes {
                                    height
                                    width
                                    sourceUrl
                                }
                            }
                        }
                    }
                    title
                    slug
                }
                pageInfo {
                    endCursor
                    hasNextPage
                }
            }
        }
    }
    `;

    const variables = { slug: subcat, first, after };
    const graphqlURL = new URL(endpoint);
    graphqlURL.searchParams.append('query', query);
    graphqlURL.searchParams.append('variables', JSON.stringify(variables));

    try {
        const response = await fetch(graphqlURL, { method: 'GET' });
        const result = await response.json();

        if (result.errors) {
            console.error('GraphQL errors:', result.errors);
            return json({ errors: result.errors }, { status: 500 });
        }

        // Cache the fetched data
        cache.set(cacheKey, { data: result.data, timestamp: now });

        return json({ ...result.data, cacheHit: false }); // Indicate fresh fetch
    } catch (error) {
        console.error(error);
        return json({ error: 'Failed to load category data' }, { status: 500 });
    }
}
