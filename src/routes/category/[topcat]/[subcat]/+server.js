export async function prerender({ fetch, params, url }) {
    // Extract `after` (pagination cursor) from the query parameters
    const after = url.searchParams.get('after');

    try {
        // Fetch the main category data from the WordPress REST API
        const response = await fetch(`/wp-json/wp/v2/categories?slug=${params.subcat}&_embed`);
        
        if (!response.ok) {
            throw new Error('Failed to fetch category data');
        }
        
        const categories = await response.json();
        
        if (!categories.length) {
            throw new Error('No matching category found');
        }

        // The first category that matches the slug
        const category = categories[0];

        // Fetch paginated posts within the category using `after` as an offset
        const postsResponse = await fetch(
            `/wp-json/wp/v2/posts?categories=${category.id}&per_page=10&page=${after || 1}&_embed`
        );

        if (!postsResponse.ok) {
            throw new Error('Failed to fetch posts for the category');
        }

        const posts = await postsResponse.json();

        // Parse pagination info from headers
        const totalPages = postsResponse.headers.get('X-WP-TotalPages');
        const currentPage = after ? parseInt(after, 10) : 1;

        return {
            cat: {
                ...category,
                posts, // Posts belonging to the category
            },
            after: currentPage < totalPages ? currentPage + 1 : null, // The next page number
            hasNextPage: currentPage < totalPages, // Whether there's a next page
        };
    } catch (error) {
        console.error(error);
        return { error: 'Failed to load category data' };
    }
}
