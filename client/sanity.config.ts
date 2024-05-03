import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './app/sanity/schemaTypes';
import {graphiQLTool} from 'sanity-plugin-graphiql';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID; // "6h85f463"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export default defineConfig({
	name: 'default',
	title: 'weshootbutdontkill',
	projectId: '6h85f463',
	dataset: 'production',
	apiVersion: '2023-05-03',
	basePath: '/admin',
	plugins: [
		structureTool(),
		visionTool(),
		// graphiQLTool({
		// 	apiVersion: '1',
		// 	url: 'https://6h85f463.api.sanity.io/v1/graphql',
		// 	name: 'graphiql',
		// 	title: 'GraphiQL',
		// }),
		//googleMapsInput(),
	],

	schema: {
		types: schemaTypes,
	},
});
