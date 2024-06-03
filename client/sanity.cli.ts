// sanity.cli.ts
import {defineCliConfig} from 'sanity/cli';

export default defineCliConfig({
	api: {
		projectId: '6h85f463',
		dataset: 'production',
	},
	graphql: [
		{
			playground: true,
			tag: 'experiment',
			workspace: 'production',
			id: 'schema-experiment',
			
		},
	],
});
