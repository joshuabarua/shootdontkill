import {getMovies} from './sanity/sanity-utils';
import {Movie, Movies} from './@types';
import Image from 'next/image';

export default async function Home() {
	const movies = await getMovies();
	console.log('MOVIES', movies);

	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
		const year = date.getFullYear();
		return `${day}.${month}.${year}`;
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-4xl font-bold">We Shoot But Don&apos;t Kill</h1>
			<div className="grid grid-cols-3 gap-10">
				{movies.map((movie: Movie) => (
					<div key={movie._id} className="flex flex-col items-center">
						<Image src={movie.poster.asset.url} alt={movie.title} width={200} height={200} />
						<h2>{movie.title}</h2>
						<p>{formatDate(movie.releaseDate)}</p>
					</div>
				))}
			</div>
		</main>
	);
}

// {
// 	movies.map((movie) => (
// 		<div key={movie._id} className="flex flex-col items-center">
// 			{/* <Image src={movie.poster.asset.url} alt={movie.title} width={200} height={200} /> */}
// 			{/* <h2>{movie.title}</h2> */}
// 			{/* <p>{movie.releaseDate}</p> */}
// 		</div>
// 	));
// }
