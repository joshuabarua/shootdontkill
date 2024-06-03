const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''; // "6h85f463"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

const config = {
	projectId: projectId,
	dataset: dataset,
	apiVersion: apiVersion,
	useCdn: process.env.NODE_ENV === 'production',
};

export default config;
