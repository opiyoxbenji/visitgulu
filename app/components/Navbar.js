'use client';

import React, { useState } from 'react';
import {
	Home,
	Hotel,
	TicketCheck,
	MapPin,
	User,
	Menu,
	X,
	Globe,
} from 'lucide-react';

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const desktopNavItems = [
		{
			href: '/',
			icon: <Home className='mr-2' />,
			labe: 'Home',
		},
		{
			href: '/hotels',
			icon: <Hotel className='mr-2' />,
			labe: 'Hotel',
		},
		{
			href: '/tickets',
			icon: <TicketCheck className='mr-2' />,
			labe: 'Tickets',
		},
		{
			href: '/contact',
			icon: <MapPin className='mr-2' />,
			labe: 'Contact',
		},
		// {
		// 	href: '/',
		// 	icon: <Home className='mr-2' />,
		// 	labe: 'Home',
		// },
	];

	const mobileNavItems = [
		{
			href: '/',
			icon: <Home className='mr-2' />,
			label: 'Home',
		},
		{
			href: '/visit-gulu',
			icon: <Globe className='mr-2' />,
			label: 'Visit Gulu',
		},
		{
			href: '/hotels',
			icon: <Hotel className='mr-2' />,
			label: 'Hotels',
		},
		{
			href: '/tickets',
			icon: <TicketCheck className='mr-2' />,
			label: 'Tickets',
		},
		{
			href: '/contact',
			icon: <MapPin className='mr-2' />,
			label: 'Contact',
		},
	];

	const handleNavigation = href => {
		window.location.href = href;
	};

	return (
		<nav className='bg-orange-600 text-white sticky top-0 z-50 shadow-lg'>
			<div className='container mx-auto flex justify-between items-center p-4'>
				{/* Logo Section */}
				<div
					onClick={() => handleNavigation('/')}
					className='flex items-center text-2xl font-bold hover:opacity-80 hover:text-yellow-300 transition cursor-pointer'>
					<MapPin className='mr-2' /> Visit
					<span className='text-green-900'>Gulu</span>
				</div>

				{/* Mobile Menu Toggle */}
				<button
					className='md:hidden'
					onClick={() => setIsMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <X /> : <Menu />}
				</button>

				{/* Desktop Navigation */}
				<div className='hidden md:flex space-x-6 items-center'>
					{desktopNavItems.map(item => {
						<button
							key={item.href}
							onClick={() => handleNavigation(item.href)}
							className='flex items-center hover:bg-purple-700 px-4 py-3 rounded-lg transition'>
							{item.icon}
							{item.label}
						</button>;
					})}
					<button
						onClick={() => handleNavigation('/login')}
						className='flex items-center bg-white text-purple-500 px-4 py-2 rounded-full hover:bg-gray-100 transition'>
						<User className='mr-2' /> Login
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='absolute top-full left-0 w-full bg-purple-500 md:hidden'>
						<div className='flex flex-col'>
							{mobileNavItems.map(item => (
								<button
									key={item.href}
									onClick={() => {
										handleNavigation(item.href);
										setIsMenuOpen(false);
									}}
									className='flex items-center p-4 hover:bg-purple-700 transition text-left w-full'>
									{item.icon}
									{item.label}
								</button>
							))}
							<button
								onClick={() => {
									handleNavigation('/login');
									setIsMenuOpen(false);
								}}
								className='flex items-center p-4 bg-white text-purple-600 hover:bg-gray-100 w-full text-left'>
								<User className='mr-2' /> Login
							</button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
