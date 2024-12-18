// 'use client';

// import React, { useState } from 'react';
// import {
// 	Home,
// 	Hotel,
// 	TicketCheck,
// 	MapPin,
// 	User,
// 	Menu,
// 	X,
// 	Globe,
// 	PenLine,
// } from 'lucide-react';

// const Navbar = () => {
// 	const [isMenuOpen, setIsMenuOpen] = useState(false);

// 	const desktopNavItems = [
// 		{
// 			href: '/',
// 			icon: <Home className='mr-2' />,
// 			labe: 'Home',
// 		},
// 		{
// 			href: '/hotels',
// 			icon: <Hotel className='mr-2' />,
// 			labe: 'Hotel',
// 		},
// 		{
// 			href: '/tickets',
// 			icon: <TicketCheck className='mr-2' />,
// 			labe: 'Tickets',
// 		},
// 		{
// 			href: '/contact',
// 			icon: <MapPin className='mr-2' />,
// 			labe: 'Contact',
// 		},
// 		// {
// 		// 	href: '/',
// 		// 	icon: <Home className='mr-2' />,
// 		// 	labe: 'Home',
// 		// },
// 	];

// 	const mobileNavItems = [
// 		{
// 			href: '/',
// 			icon: <Home className='mr-2' />,
// 			label: 'Home',
// 		},
// 		{
// 			href: '/visit-gulu',
// 			icon: <Globe className='mr-2' />,
// 			label: 'Visit Gulu',
// 		},
// 		{
// 			href: '/hotels',
// 			icon: <Hotel className='mr-2' />,
// 			label: 'Hotels',
// 		},
// 		{
// 			href: '/tickets',
// 			icon: <TicketCheck className='mr-2' />,
// 			label: 'Tickets',
// 		},
// 		{
// 			href: '/contact',
// 			icon: <MapPin className='mr-2' />,
// 			label: 'Contact',
// 		},
// 	];

// 	const handleNavigation = href => {
// 		window.location.href = href;
// 	};

// 	return (
// 		<nav className='bg-[#f9ca00] text-white sticky top-0 z-50 shadow-lg p-2 md:p-4'>
// 			<div className='container mx-auto flex justify-between items-center p-4'>
// 				{/* Logo Section */}
// 				<div
// 					onClick={() => handleNavigation('/')}
// 					className='flex items-center text-[30px] font-bold hover:brightness-125 transition cursor-pointer'>
// 					<MapPin className='mr-2' /> Visit
// 					<span className='text-[#B22222]'>Gulu</span>
// 				</div>

// 				{/* Mobile Menu Toggle */}
// 				<button
// 					className='md:hidden'
// 					onClick={() => setIsMenuOpen(!isMenuOpen)}>
// 					{isMenuOpen ? <X /> : <Menu />}
// 				</button>

// 				{/* Desktop Navigation */}
// 				<div className='hidden md:flex space-x-6 items-center'>
// 					{desktopNavItems.map(item => {
// 						<button
// 							key={item.href}
// 							onClick={() => handleNavigation(item.href)}
// 							className='flex items-center hover:bg-blue-700 px-4 py-3 rounded-lg transition'>
// 							{item.icon}
// 							{item.label}
// 						</button>;
// 					})}
// 					<button
// 						onClick={() => handleNavigation('/login')}
// 						className='flex items-center bg-white text-[#B22222] px-4 py-2 rounded-full hover:bg-[#A02020] hover:text-[#FFD700] transition'>
// 						<User className='mr-2' /> Login
// 					</button>
// 					<button
// 						onClick={() => handleNavigation('/sign-up')}
// 						className='text-white bg-gray-800 hover:bg-[#A02020] inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm '>
// 						<PenLine className='mr-2' /> Sign Up
// 					</button>
// 				</div>

// 				{/* Mobile Menu */}
// 				{isMenuOpen && (
// 					<div className='absolute top-full left-0 w-full bg-[#B22222] md:hidden'>
// 						<div className='flex flex-col'>
// 							{mobileNavItems.map(item => (
// 								<button
// 									key={item.href}
// 									onClick={() => {
// 										handleNavigation(item.href);
// 										setIsMenuOpen(false);
// 									}}
// 									className='flex items-center p-4 hover:bg-[#FFD700] transition text-left w-full'>
// 									{item.icon}
// 									{item.label}
// 								</button>
// 							))}
// 							<button
// 								onClick={() => {
// 									handleNavigation('/login');
// 									setIsMenuOpen(false);
// 								}}
// 								className='flex items-center p-4 bg-white text-[#A02020] hover:bg-gray-100 w-full text-left'>
// 								<User className='mr-2' /> Login
// 							</button>
// 						</div>
// 					</div>
// 				)}
// 			</div>
// 		</nav>
// 	);
// };

// export default Navbar;

'use client';

import React, { useState } from 'react';
import { Home, Hotel, TicketCheck, MapPin, User } from 'lucide-react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ href: '/', label: 'Home' },
		{ href: '/services', label: 'Our services' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' },
	];

	const handleNavigation = href => {
		window.location.href = href;
	};

	return (
		<div className='top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900'>
			<nav className='z-10 sticky top-0 left-0 right-0 max-w-4xl xl:max-w-5xl mx-auto px-5 py-2.5 lg:border-none lg:py-4'>
				<div className='flex items-center justify-between'>
					<button onClick={() => handleNavigation('/')}>
						<div className='flex items-center space-x-2'>
							<h2 className='text-black dark:text-white font-bold text-4xl'>
								Visit
								<span className='text-[#B22222]'>Gulu</span>
							</h2>
						</div>
					</button>

					{/* Desktop Navigation */}
					<div className='hidden lg:block'>
						<ul className='flex space-x-10 text-base font-bold text-black/60 dark:text-white'>
							{navItems.map(item => (
								<li
									key={item.href}
									className='hover:underline hover:text-[#f9ca00] hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear'>
									<a href={item.href}>{item.label}</a>
								</li>
							))}
						</ul>
					</div>

					{/* Desktop Action Buttons */}
					<div className='hidden lg:flex lg:items-center gap-x-2'>
						<button
							onClick={() => handleNavigation('/sign-up')}
							className='flex items-center text-black dark:text-white rounded-md hover:bg-[#B22222] justify-center px-6 py-2.5 font-semibold'>
							Sign up
						</button>
						<button
							onClick={() => handleNavigation('/login')}
							className='flex items-center justify-center rounded-md bg-[#4A3BFF] text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200'>
							Login
						</button>
					</div>

					{/* Mobile Menu Toggle */}
					<div className='flex items-center justify-center lg:hidden'>
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className='focus:outline-none text-slate-200 dark:text-white'>
							<svg
								stroke='currentColor'
								fill='currentColor'
								strokeWidth='0'
								viewBox='0 0 20 20'
								aria-hidden='true'
								className='text-2xl text-slate-800 dark:text-white focus:outline-none active:scale-110 active:text-red-500'
								height='1em'
								width='1em'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									fillRule='evenodd'
									d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
									clipRule='evenodd'></path>
							</svg>
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='lg:hidden absolute left-0 right-0 bg-white dark:bg-gray-800 shadow-lg'>
						<ul className='flex flex-col'>
							{navItems.map(item => (
								<li key={item.href}>
									<a
										href={item.href}
										className='block px-5 py-3 hover:bg-gray-100 dark:hover:bg-gray-700'>
										{item.label}
									</a>
								</li>
							))}
							<div className='border-t dark:border-gray-700 py-3 px-5 flex flex-col space-y-2'>
								<button
									onClick={() => handleNavigation('/signup')}
									className='text-black dark:text-white'>
									Sign up
								</button>
								<button
									onClick={() => handleNavigation('/login')}
									className='bg-[#4A3BFF] text-white px-4 py-2 rounded-md'>
									Login
								</button>
							</div>
						</ul>
					</div>
				)}
			</nav>
		</div>
	);
};

export default Navbar;
