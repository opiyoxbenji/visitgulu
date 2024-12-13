'use client';

import React from 'react';
import { Hotel, Ticket, MapPin, Search, Star, Users, Play } from 'lucide-react';
import FadeCarousel from './FadeCarousel';

const Hero = () => {
	const handleNavigation = path => {
		window.location.href = path;
	};

	return (
		<section className='w-full  pt-12 sm:pt-16'>
			<div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
				<div className='text-center'>
					<p className='max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight'>
						Discover <span className='text-[#B22222]'>Gulu</span>
					</p>
					<h1 className='max-w-2xl mx-auto px-6 text-lg text-gray-600 font-inter'>
						Explore the hidden gems of Northern Uganda. Your
						adventure begins here with seamless travel experiences.
					</h1>
					<div className='flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full px-4'>
						<button
							onClick={() => handleNavigation('/hotels')}
							className='w-full sm:w-auto flex items-center justify-center px-8 py-3 text-lg font-bold text-white bg-[#B22222] rounded-full hover:bg-[#000000] focus:ring-2 focus:ring-[#B22222] transition'>
							<Hotel className='mr-2' />
							Check Hotels
						</button>

						<button
							onClick={() => handleNavigation('/tickets')}
							className='w-full sm:w-auto flex items-center justify-center px-8 py-3 text-lg font-bold text-[#B22222] bg-[#FFD700] rounded-full hover:bg-[#FFC700] hover:text-black focus:ring-2 focus:ring-[#FFD700] transition'>
							<Ticket className='mr-2' />
							Get a Ticket
						</button>
					</div>
				</div>
			</div>

			<div>
				<div className='relative mx-auto mt-4 md:mt-8 px-4 md:px-8 w-full'>
					<div className='lg:max-w-4xl lg:mx-auto'>
						{/* <img
							src='https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
							alt='Hero image'
							className='w-full h-auto object-cover rounded-lg shadow-lg'
						/> */}

						<FadeCarousel className='w-full h-auto object-cover rounded-lg shadow-lg' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
