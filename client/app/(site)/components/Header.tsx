'use client';

import React, {useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {FaInstagram} from 'react-icons/fa6';
import gsap from 'gsap';

const Header: React.FC = () => {
	const headerRef = useRef<HTMLElement>(null);

	useEffect(() => {
		const header = headerRef.current;

		const onScroll = () => {
			if (window.scrollY > 10) {
				gsap.to(header, {y: 0, duration: 0.5, ease: 'power2.in'});
			} else {
				gsap.to(header, {y: -125, duration: 0.5, ease: 'power2.out'});
			}
		};

		window.addEventListener('scroll', onScroll);

		gsap.set(header, {y: -125});

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-md" style={{fontFamily: 'IBM-PlexMono'}}>
			<div className="flex items-center justify-between p-2">
				<div className="flex items-center justify-center gap-8">
					<Image src="/logo400x400.png" alt="Logo" width={75} height={75} className="hover:scale-125  ease-in-out duration-300" />
					<ul className="flex flex-row gap-4 text-xl">
						<li className="">Home</li>
						<li className="">Menu</li>
						<li className="">Events</li>
						<li className="">Shop</li>
						<li className="">Contact</li>
					</ul>
				</div>

				<div className="flex flex-row mr-10 justify-center items-center gap-6">
					<ul className="flex flex-row gap-4 text-xl">
						<li className="">Login</li>
					</ul>
					<FaInstagram className="w-8 h-8 hover:scale-125  ease-in-out duration-300" />
				</div>
			</div>
		</header>
	);
};

export default Header;
