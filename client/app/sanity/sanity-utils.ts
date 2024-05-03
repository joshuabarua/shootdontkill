import {createClient} from 'next-sanity';
import {Movie} from '../@types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
console.log('projectId', projectId);
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

export function getMovies(): Promise<Movie[]> {
	const client = createClient({
		projectId: '6h85f463',
		dataset: 'production',
		apiVersion: '2023-05-03',
		useCdn: true,
	});

	return client.fetch(`query getAllMovies
	{
		allMovie(sort: { releaseDate: DESC }){
			_id
			title
			slug {
				current
			}
			releaseDate
			poster { 
				asset { 
					originalFilename, 
					url  
				} 
			}
			externalId
			popularity
	`);
}
