/** @type {import('next').NextConfig} */

import path from 'path';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { fileURLToPath } from 'url';

const bundleAnalyzer = withBundleAnalyzer({
	enabled: process.env.ANALYZE === 'true',
})

const advancedHeaders = [
	{
		key: 'X-DNS-Prefetch-Control',
		value: 'on',
	},
	{
		key: 'Strict-Transport-Security',
		value: 'max-age=63072000; includeSubDomains; preload',
	},
	{
		key: 'X-XSS-Protection',
		value: '1; mode=block',
	},
	{
		key: 'X-Frame-Options',
		value: 'SAMEORIGIN',
	},
	{
		key: 'X-Content-Type-Options',
		value: 'nosniff',
	},
	{
		key: 'Referrer-Policy',
		value: 'origin-when-cross-origin',
	},
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	swcMinify: true,
	async headers() {
		return [
			{
				source: '/:path*',
				headers: advancedHeaders,
			},
		];
	},
};

export default bundleAnalyzer(nextConfig);
