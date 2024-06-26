import {getMostRecentMovie, getMovies} from '../sanity/sanity-utils';
import {Movie, Movies} from '../@types';
import HeroContent from './components/HeroContent';
import HomeMoviesContent from './components/HomeMoviesContent';

export default async function Home() {
	const movies: Movies = await getMovies();
	const recentMovie: Movie = await getMostRecentMovie();

	return (
		<main className="flex min-w-screen min-h-screen flex-col items-center justify-between mx-12">
			<HeroContent movie={recentMovie} />
			<HomeMoviesContent movies={movies} />
		</main>
	);
}
