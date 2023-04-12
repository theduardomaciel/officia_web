/** @type {import('next').NextConfig} */

import addMdx from '@next/mdx';

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
    experimental: {
        appDir: true
    }
};

addMdx(nextConfig, {
    options: {
        remarkPlugins: [],
        rehypePlugins: []
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    }
});

export default nextConfig;
