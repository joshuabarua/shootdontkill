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
			if (window.scrollY > 100) {
				gsap.to(header, {y: 0, duration: 0.5, ease: 'power2.in'});
			} else {
				gsap.to(header, {y: -150, duration: 0.5, ease: 'power2.out'});
			}
		};

		window.addEventListener('scroll', onScroll);

		gsap.set(header, {y: -150});

		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
			<div className="flex items-center justify-between p-4">
				<div>
					<Image src="/logo400x400.png" alt="Logo" width={75} height={75} />
				</div>
				<div>
					<FaInstagram className="w-6 h-6" />
				</div>
			</div>
		</header>
	);
};

export default Header;
