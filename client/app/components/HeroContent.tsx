// components/HeroImage.tsx

import React, {FC} from 'react';
import Image from 'next/image';
import {format} from 'date-fns';
import {Movie} from '../@types';
import {getMostRecentMovie} from '../sanity/sanity-utils';
import {GetServerSideProps} from 'next/types';

interface HeroImageProps {
	movie: Movie | null;
}

const HeroImage: FC<HeroImageProps> = ({movie}) => {
	if (!movie) {
		return <p>No movie available</p>;
	}

	return (
		<div style={{position: 'relative', width: '100vw', height: '80vh'}}>
			{movie.poster && movie.poster.asset ? (
				<Image src={movie.poster.asset.url} alt={movie.title} layout="fill" objectFit="contain" quality={100} />
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
