import {createClient, groq} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import {Movie, Movies} from '../@types';
import clientConfig from './client-config';

const client = createClient(clientConfig);
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
	landscapeStill {
      asset -> {
        originalFilename,
        url,
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
        url,
      }
    },
    landscapeStill {
      asset -> {
        originalFilename,
        url,
      }
    },
    externalId,
    popularity,
  }
`;

export async function getMovies(): Promise<Movies> {
	try {
		const movies = await client.fetch(allMoviesQuery);
		// console.log('Movies:', movies);
		return movies;
	} catch (error) {
		console.error('Failed to fetch movies:', error);
		throw error;
	}
}

export async function getMostRecentMovie(): Promise<Movie> {
	try {
		const movie = await client.fetch(mostRecentMovieQuery);
		console.log('Movie:', movie);

		return movie;
	} catch (error) {
		console.error('Failed to fetch the most recent movie:', error);
		throw error;
	}
}

// const builder = imageUrlBuilder(client);

// export function urlFor(source: string | undefined | null | {asset: {url: string}}) {
// 	return builder.image(source);
// }
