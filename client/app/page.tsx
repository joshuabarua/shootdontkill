import {getMovies} from './sanity/sanity-utils';
// import {Movie, Movies} from './@types';

export default async function Home() {
	const movies = await getMovies();
	// console.log(movies);
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1 className="text-4xl font-bold">We Shoot But Don&apos;t Kill</h1>
			<div className="grid grid-cols-3 gap-4">
				{/* {movies.map((movie as Movie) => (
					<div key={project._id} className="flex flex-col items-center">
						<Image src={project.image.asset.url} alt={project.title} width={200} height={200} />
						<h2>{project.title}</h2>
						<p>{project.releaseDate}</p>
					</div>
				))} */}
			</div>
		</main>
	);
}
