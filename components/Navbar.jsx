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
	PenLine,
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
		<nav className='bg-[#f9ca00] text-white sticky top-0 z-50 shadow-lg p-2 md:p-4'>
			<div className='container mx-auto flex justify-between items-center p-4'>
				{/* Logo Section */}
				<div
					onClick={() => handleNavigation('/')}
					className='flex items-center text-[30px] font-bold hover:brightness-125 transition cursor-pointer'>
					<MapPin className='mr-2' /> Visit
					<span className='text-[#B22222]'>Gulu</span>
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
							className='flex items-center hover:bg-blue-700 px-4 py-3 rounded-lg transition'>
							{item.icon}
							{item.label}
						</button>;
					})}
					<button
						onClick={() => handleNavigation('/login')}
						className='flex items-center bg-white text-[#B22222] px-4 py-2 rounded-full hover:bg-[#A02020] hover:text-[#FFD700] transition'>
						<User className='mr-2' /> Login
					</button>
					<button
						onClick={() => handleNavigation('/sign-up')}
						className='text-white bg-gray-800 hover:bg-[#A02020] inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm '>
						<PenLine className='mr-2' /> Sign Up
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className='absolute top-full left-0 w-full bg-[#B22222] md:hidden'>
						<div className='flex flex-col'>
							{mobileNavItems.map(item => (
								<button
									key={item.href}
									onClick={() => {
										handleNavigation(item.href);
										setIsMenuOpen(false);
									}}
									className='flex items-center p-4 hover:bg-[#FFD700] transition text-left w-full'>
									{item.icon}
									{item.label}
								</button>
							))}
							<button
								onClick={() => {
									handleNavigation('/login');
									setIsMenuOpen(false);
								}}
								className='flex items-center p-4 bg-white text-[#A02020] hover:bg-gray-100 w-full text-left'>
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
