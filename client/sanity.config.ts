import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './app/sanity/schemaTypes';
import {graphiQLTool} from 'sanity-plugin-graphiql';

export default defineConfig({
	name: 'default',
	title: 'weshootbutdontkill',

	projectId: '6h85f463',
	dataset: 'production',
	apiVersion: '1',
	basePath: '/admin',
	plugins: [
		structureTool(),
		visionTool(),
		graphiQLTool({
			apiVersion: '1',
			url: 'https://6h85f463.api.sanity.io/v1/graphql',
			name: 'graphiql',
			title: 'GraphiQL',
		}),
		//googleMapsInput(),
	],

	schema: {
		types: schemaTypes,
	},
});
