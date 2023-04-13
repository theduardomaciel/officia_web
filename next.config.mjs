/** @type {import('next').NextConfig} */

import addMdx from '@next/mdx';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

const nextConfig = {
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
	experimental: {
		appDir: true
	}
};

addMdx(nextConfig, {
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug]
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
});

export default nextConfig;
