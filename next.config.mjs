/**
 * @type {import('next').NextConfig}
 */
import withMDX from '@next/mdx';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

const nextConfig = {
	// Configure `pageExtensions` to include MDX files
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
	options: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [rehypeSlug]
		// If you use `MDXProvider`, uncomment the following line.
		// providerImportSource: "@mdx-js/react",
	}
};

export default nextConfig;
