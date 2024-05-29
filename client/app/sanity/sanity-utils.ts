import {createClient, groq} from 'next-sanity';
import {Movie} from '../@types';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''; // "6h85f463"
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''; // "production"
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

console.log(projectId, dataset, apiVersion);

const allMoviesQuery = groq`
*[_type == "movie"] | order(releaseDate desc) {
	_id,
	title,
	"slug": slug.current,
	releaseDate,
	poster {
    	asset -> {
			originalFilename,
			url
    	}
	},
	externalId,
	popularity
}
`;

const mostRecentMovieQuery = `
  *[_type == "movie"] | order(releaseDate desc)[0] {
    _id,
    title,
    "slug": slug.current,
    releaseDate,
    poster {
      asset -> {
        originalFilename,
        url
      }
    },
    externalId,
    popularity
  }
`;

export async function getMovies() {
	const client = createClient({
		projectId: projectId,
		dataset: dataset,
		apiVersion: apiVersion,
		useCdn: process.env.NODE_ENV === 'production',
	});

	try {
		const movies = await client.fetch(allMoviesQuery);
		return movies;
	} catch (error) {
		console.error('Failed to fetch movies:', error);
		throw error;
	}
}

export async function getMostRecentMovie() {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
		useCdn: process.env.NODE_ENV === 'production',
	});

	try {
		const movie = await client.fetch<Movie>(mostRecentMovieQuery);
		return movie;
	} catch (error) {
		console.error('Failed to fetch the most recent movie:', error);
		throw error;
	}
}
