import adapterAuto from '@sveltejs/adapter-auto';
import adapterNode from '@sveltejs/adapter-node';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess({ style: { warnUnused: false } }),

    kit: {
        adapter:
            process.env.NODE_ENV === 'development'
                ? adapterAuto() // Use adapter-auto for development
                : adapterNode({ out: 'build' }), // Use adapter-node for production
    }

};

export default config;