// components/HeroImage.tsx

import React, {FC} from 'react';
import Image from 'next/image';
import {format} from 'date-fns';
import {Movie} from '../../@types';

interface HeroImageProps {
	movie: Movie;
}

const HeroImage: FC<HeroImageProps> = ({movie}) => {
	// if (!movie) {
	// 	return <p>No movie available</p>;
	// }

	// console.log('Movieeee', movie);

	return (
		<div style={{position: 'relative', width: '100vw', height: '800px'}} className="flex justify-center items-center">
			{movie.landscapeStill && movie.landscapeStill.asset ? (
				<Image src={movie.landscapeStill.asset.url} alt={movie.title} layout="fill" objectFit="cover" quality={100} />
			) : (
				<p>No poster available</p>
			)}
			<div style={{position: 'absolute', bottom: '20px', left: '20px', color: 'white'}}>
				<h1>{movie.title}</h1>
				<p>Release Date: {format(new Date(movie.releaseDate), 'dd.MM.yyyy')}</p>
			</div>
		</div>
	);
};

export default HeroImage;
