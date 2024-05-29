import React, {FC} from 'react';
import {Movie, Movies} from '../@types';
import Image from 'next/image';

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
	return (
		<div className="w-full flex justify-center items-center flex-col gap-6">
			<h1 className="text-4xl font-bold">We Shoot But Don&apos;t Kill</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-full">
				{movies.map((movie: Movie) => (
					<div key={movie._id} className="flex flex-col items-center">
						<Image src={movie.poster.asset.url} alt={movie.title} layout="responsive" width={400} height={600} />
						<h2>{movie.title}</h2>
						<p>{formatDate(movie.releaseDate)}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeMoviesContent;
