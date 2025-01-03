'use client'

import React from 'react';
import Image from 'next/image';
import { Users, Award, Clock, Globe, Shield, Star } from 'lucide-react';

const stats = [
	{ id: 1, name: 'Years of Excellence', value: '25+', icon: Clock },
	{ id: 2, name: 'Luxury Properties', value: '150+', icon: Star },
	{ id: 3, name: 'Happy Guests', value: '1M+', icon: Users },
	{ id: 4, name: 'Countries', value: '45', icon: Globe },
];

const values = [
	{
		title: 'Unparalleled Luxury',
		description:
			'Every property in our collection is hand-picked to ensure the highest standards of luxury and comfort.',
		icon: Award,
	},
	{
		title: 'Guest Security',
		description:
			'Your safety and privacy are our top priorities, with state-of-the-art security systems at all properties.',
		icon: Shield,
	},
	{
		title: 'Global Presence',
		description:
			"With properties across 45 countries, we offer unique experiences in the world's most desirable locations.",
		icon: Globe,
	},
];

export default function AboutPage() {
	return (
		<div className='min-h-screen bg-white mt-4 rounded-3xl'>
			{/* Hero Section */}
			<div className='relative h-[60vh] w-full'>
				<Image
					src='https://plus.unsplash.com/premium_photo-1709971210097-71b51a295d6a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Luxury Hotel Exterior'
					fill
					className='object-cover brightness-50'
					priority
				/>
				<div className='absolute inset-0 flex items-center justify-center'>
					<div className='text-center text-white px-4'>
						<h1 className='text-4xl md:text-6xl font-bold mb-4'>
							Our Story
						</h1>
						<p className='text-xl md:text-2xl max-w-2xl mx-auto'>
							Crafting unforgettable luxury experiences since 1998
						</p>
					</div>
				</div>
			</div>

			{/* Mission Statement */}
			<section className='py-16 px-4 md:px-8 max-w-7xl mx-auto'>
				<div className='text-center max-w-3xl mx-auto'>
					<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
						Our Mission
					</h2>
					<p className='text-lg text-gray-600 leading-relaxed'>
						To redefine luxury hospitality by creating extraordinary
						experiences and unforgettable moments for our guests,
						while maintaining the highest standards of service
						excellence and environmental responsibility.
					</p>
				</div>
			</section>

			{/* Stats Section */}
			<section className='bg-gray-50 py-16 px-4 md:px-8'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
						{stats.map(stat => {
							const IconComponent = stat.icon;
							return (
								<div key={stat.id} className='text-center'>
									<div className='flex justify-center mb-4'>
										<IconComponent className='h-8 w-8 text-blue-600' />
									</div>
									<div className='text-2xl md:text-4xl font-bold text-gray-900'>
										{stat.value}
									</div>
									<div className='text-sm md:text-base text-gray-500'>
										{stat.name}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className='py-16 px-4 md:px-8 max-w-7xl mx-auto'>
				<h2 className='text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12'>
					Our Values
				</h2>
				<div className='grid md:grid-cols-3 gap-8'>
					{values.map((value, index) => {
						const IconComponent = value.icon;
						return (
							<div
								key={index}
								className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
								<div className='flex justify-center mb-4'>
									<IconComponent className='h-12 w-12 text-blue-600' />
								</div>
								<h3 className='text-xl font-semibold text-gray-900 text-center mb-4'>
									{value.title}
								</h3>
								<p className='text-gray-600 text-center'>
									{value.description}
								</p>
							</div>
						);
					})}
				</div>
			</section>

			{/* Commitment Section */}
			<section className='bg-gray-900 text-white py-16 px-4 md:px-8'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-12 items-center'>
						<div>
							<h2 className='text-3xl md:text-4xl font-bold mb-6'>
								Our Commitment to Sustainability
							</h2>
							<p className='text-gray-300 leading-relaxed mb-6'>
								We believe in responsible luxury. Our properties
								implement sustainable practices and eco-friendly
								initiatives while maintaining the highest
								standards of comfort and elegance.
							</p>
							<ul className='space-y-4'>
								<li className='flex items-center'>
									<div className='h-2 w-2 bg-blue-500 rounded-full mr-3'></div>
									<span>100% Carbon Neutral Operations</span>
								</li>
								<li className='flex items-center'>
									<div className='h-2 w-2 bg-blue-500 rounded-full mr-3'></div>
									<span>Renewable Energy Sources</span>
								</li>
								<li className='flex items-center'>
									<div className='h-2 w-2 bg-blue-500 rounded-full mr-3'></div>
									<span>
										Local Community Support Programs
									</span>
								</li>
							</ul>
						</div>
						<div className='relative h-64 md:h-96'>
							<Image
								src='https://images.unsplash.com/photo-1591025207163-942350e47db2?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
								alt='Sustainable Luxury'
								fill
								className='object-cover rounded-lg'
							/>
						</div>
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className='py-16 px-4 md:px-8 max-w-7xl mx-auto text-center'>
				<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
					Experience Luxury With Us
				</h2>
				<p className='text-lg text-gray-600 mb-8 max-w-2xl mx-auto'>
					Join us in creating memorable moments and experiencing the
					finest in luxury hospitality across our global collection of
					properties.
				</p>
				<button className='bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-lg font-semibold'>
					Browse Our Properties
				</button>
			</section>
		</div>
	);
}
