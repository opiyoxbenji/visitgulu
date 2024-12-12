"use client"

import React from 'react';
import { Hotel, Ticket, MapPin } from 'lucide-react';

const Hero = () => {
	const handleNavigation = path => {
		window.location.href = path;
	};

	return (
		<div className='relative h-[calc(100vh-80px)] w-full overflow-hidden'>
			{/* Background Image */}
			<div
				className='absolute insert-0 bg-center filter brightness-50'
				style={{
					backgroundImage: "url('/assets/images/gulu.png')",
					backgroundPosition: 'center',
				}}
			/>

			{/* Content */}
			<div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-4'>
				<div className='bg-black/50 p-8 rounded-2xl max-w-2xl w-full'>
					<h1 className='text-5xl font-extrabold mb-4 text-[#030712]'>
						Discover <span className='text-white'>Gulu</span>
					</h1>

					<p className='text-xl text-white mb-8 leading-relaxed'>
						Explore the hidden gems of Northern Uganda. Your
						adventure begins here with seamless travel experiences.
					</p>

					{/* Action Buttons */}
					<div className='flex justify-center space-x-4'>
						<button
							onClick={() => handleNavigation('/hotels')}
							className='flex items-center bg-[#B22222] text-white px-6 py-3 rounded-full hover:bg-[#A02020] transition-colors'>
							<Hotel className='mr-2' /> Check Hotels
						</button>

						<button
							onClick={() => handleNavigation('/tickets')}
							className='flex items-center bg-[#FFD700] text-[#B22222] px-6 py-3 rounded-full hover:bg-[#FFC700] transition-colors'>
							<Ticket className='mr-2' /> Get Ticket
						</button>
					</div>

					{/* Quick Facts */}
					<div className='mt-8 grid grid-cols-3 gap-4 text-white'>
						<div className='flex flex-col items-center'>
							<MapPin className='text-[#FFD700] mb-2' size={32} />
							<span className='font-bold'>30+ Destinations</span>
						</div>
						<div className='flex flex-col items-center'>
							<Hotel className='text-[#FFD700] mb-2' size={32} />
							<span className='font-bold'>100+ Hotels</span>
						</div>
						<div className='flex flex-col items-center'>
							<Ticket className='text-[#FFD700] mb-2' size={32} />
							<span className='font-bold'>Instant Booking</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
