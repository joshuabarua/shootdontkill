// sanity.cli.ts
import {defineCliConfig} from 'sanity/cli';

export default defineCliConfig({
	graphql: [
		{
			playground: true,
			tag: 'experiment',
			workspace: 'production',
			id: 'schema-experiment',
		},
	],
});
