'use client';

import React, { useState } from 'react';
import {
	Hotel,
	TicketCheck,
	MapPin,
	Globe,
	Search,
	Calendar,
	Users,
	Plane,
	ChevronRight,
} from 'lucide-react';

const LandingPage = () => {
	const [activeTab, setActiveTab] = useState('hotels');

	const featuredDestinations = [
		{
			name: 'Gulu City Center',
			description: 'Explore the vibrant heart of Northern Uganda',
			image: 'https://images.unsplash.com/photo-1662278340446-b1d1f22b55dd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			href: '/destinations/gulu-city',
		},
		{
			name: 'Murchison Falls',
			description: 'Incredible wildlife and natural beauty nearby',
			image: 'https://images.unsplash.com/photo-1663498798455-8ce6d44d4505?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			href: '/destinations/murchison-falls',
		},
		{
			name: 'Acholi Cultural Center',
			description: 'Discover the rich heritage of the Acholi people',
			image: 'https://images.unsplash.com/photo-1600729123691-f884cefc5cc2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			href: '/destinations/acholi-center',
		},
	];

	const whyChooseUs = [
		{
			icon: <Hotel className='text-blue-500 w-10 h-10' />,
			title: 'Diverse Accommodations',
			description: 'From budget-friendly to luxury hotels in Gulu',
		},
		{
			icon: <TicketCheck className='text-green-500 w-10 h-10' />,
			title: 'Easy Booking',
			description:
				'Simple, fast, and secure ticket and hotel reservations',
		},
		{
			icon: <Globe className='text-purple-500 w-10 h-10' />,
			title: 'Local Expertise',
			description: 'We know Gulu and Northern Uganda like no one else',
		},
	];

	return (
		<div className='min-h-screen'>
			{/* Featured Destinations */}
			<section className='container mx-auto px-4 py-16'>
				<div className='text-center mb-10'>
					<h2 className='text-4xl font-bold text-gray-900 '>
						Featured Destinations
					</h2>
					<p className='text-gray-600  mt-4'>
						Explore the most exciting locations in and around Gulu
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-6'>
					{featuredDestinations.map(destination => (
						<div
							key={destination.name}
							className='bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all group'>
							<img
								src={destination.image}
								alt={destination.name}
								className='w-full h-48 object-cover group-hover:scale-105 transition-transform'
							/>
							<div className='p-5'>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white'>
									{destination.name}
								</h3>
								<p className='text-gray-600 dark:text-gray-300 mt-2'>
									{destination.description}
								</p>
								<a
									href={destination.href}
									className='mt-4 inline-flex items-center text-blue-500 hover:text-blue-600'>
									Explore <ChevronRight className='ml-2' />
								</a>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Why Choose Us */}
			<section className='py-5'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-10'>
						<h2 className='text-3xl font-bold text-gray-900'>
							Why Choose Visit Gulu
						</h2>
						<p className='text-gray-700  mt-4'>
							We make your travel experience smooth and memorable
						</p>
					</div>

					<div className='grid md:grid-cols-3 gap-6'>
						{whyChooseUs.map(feature => (
							<div
								key={feature.title}
								className='bg-white dark:bg-gray-700 p-6 rounded-xl text-center shadow-lg hover:shadow-xl transition-all'>
								<div className='flex justify-center mb-4'>
									{feature.icon}
								</div>
								<h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-3'>
									{feature.title}
								</h3>
								<p className='text-gray-600 dark:text-gray-300'>
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default LandingPage;
