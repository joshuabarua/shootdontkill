import React, {FC} from 'react';
import {Movie, Movies} from '../../@types';
import Image from 'next/image';
import gsap from 'gsap';

interface HomeContentProps {
	movies: Movies;
}

const HomeMoviesContent: FC<HomeContentProps> = ({movies}) => {
	const formatDate = (dateString: string): string => {
		const date = new Date(dateString);
		const day = String(date.getDate()).padStart(2, '0');
		const month = String(date.getMonth() + 1).padStart(2, '0');
		const year = date.getFullYear();
		return `${day}.${month}.${year}`;
	};

	gsap;
	// console.log('Moviessss', movies);
	return (
		<div className="w-full h-full flex justify-center items-center flex-col gap-6 mb-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full">
				{movies.map((movie: Movie, idx) => (
					<>
						<div key={idx} className="image-container group ">
							<div className="relative overflow-hidden rounded-sm transition-transform duration-500 ease-in-out transform-gpu group-hover:scale-125">
								<Image src={movie.poster.asset.url} alt={movie.title} layout="responsive" width={400} height={600} className="rounded-sm " />
								{
									//TODO: Decide if i wanna keep this hover to display movie names, will be  changed to the title image in future with GSAP
								}
								<div className="absolute inset-0 bg-black bg-opacity-10 opacity-0 group-hover:opacity-100 ease-in-out flex items-start justify-center transition-opacity duration-500">
									{/* <h2 className="text-white text-lg font-bold">{movie.title}</h2> */}
								</div>
							</div>
						</div>

						{/* <div key={movie._id} className="flex flex-col items-center">
							<img src={urlFor(movie.poster).width(400).height(600).url()} alt={movie.title} />
							<h2>{movie.title}</h2>
							<p>{formatDate(movie.releaseDate)}</p>
						</div> */}
					</>
				))}
			</div>
		</div>
	);
};

export default HomeMoviesContent;
