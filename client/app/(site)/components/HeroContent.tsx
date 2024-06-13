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
		<div className="w-full h-full flex justify-start items-center flex-col gap-12 my-12">
			<div className="flex">
				{movie.landscapeStill && movie.landscapeStill.asset ? (
					<Image src={movie.landscapeStill.asset.url} alt={movie.title} layout="responsive" width={1200} height={1100} objectFit="contain" quality={100} />
				) : (
					<p>No poster available</p>
				)}
			</div>
			<div style={{fontFamily: 'NewSpirit-MediumCondensed'}} className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4">
				<div className="col-span-1 lg:col-span-3 flex items-end">
					<h1 className="text-[64px] leading-[50px] md:text-[128px] md:leading-[100px] lg:text-[256px] lg:leading-[200px] md:tracking-[.165em]">
						WE SHOOT <br /> BUT DON&#39;T <br /> KILL!
					</h1>
				</div>
				<div className="col-span-1 flex justify-end items-end mt-[-30px] lg:mt-[-55px]">
					<h2 className="text-xl md:text-2xl lg:text-4xl leading-[15px] text-right">
						CREATIVE AGENCY
						<br />
						<span className="block mt-1">& VIDEO PRODUCTION.</span>
					</h2>
				</div>
				<div className="col-span-1 lg:col-span-2 flex justify-center items-center mt-16">
					<p>Our website is still under construction, just like the city we&#39;re based in -Berlin-</p>
				</div>
			</div>
		</div>
	);
};

export default HeroImage;
