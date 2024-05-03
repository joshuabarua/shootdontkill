import {gql} from '@apollo/client';
import {createClient, groq} from 'next-sanity';

export function getMovies() {
	const client = createClient({
		projectId: '6h85f463',
		dataset: 'production',
		apiVersion: '1',
	});

	client.fetch(`
		query{
			allMovie(sort: { releaseDate: DESC }){
				_id
				title
			}
		}
	`);
}
