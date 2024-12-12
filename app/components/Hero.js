import React from 'react';
import { Hotel, Ticket, MapPin } from 'lucide-react';

const Hero = () => {
	const handleNavigation = path => {
		window.location.href = path;
	};

	return (
		// <section>
		// 	<div className='relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24'>
		// 		<div className='flex w-full mx-auto text-left'>
		// 			<div className='relative inline-flex items-center mx-auto align-middle'>
		// 				<div className='text-center'>
		// 					<h1 className='max-w-5xl text-2xl font-bold leading-none tracking-tighter text-black md:text-5xl lg:text-6xl lg:max-w-7xl'>
		// 						Long headline to turn{' '}
		// 						<br className='hidden lg:block' />
		// 						your visitors into users
		// 					</h1>
		// 					<p className='max-w-xl mx-auto mt-8 text-base leading-relaxed text-gray-700'>
		// 						Travel Hassle-Free: Book Hotels & Tickets
		// 						Instantly.
		// 					</p>
		// 					<div className='flex justify-center w-full max-w-2xl gap-2 mx-auto mt-6'>
		// 						<div className='mt-3 rounded-lg sm:mt-0'>
		// 							<button className='px-5 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 lg:px-10 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'>
		// 								Check Hotels
		// 							</button>
		// 						</div>
		// 						<div className='mt-3 rounded-lg sm:mt-0 sm:ml-3'>
		// 							<button className='items-center block px-5 lg:px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'>
		// 								Get a ticket
		// 							</button>
		// 						</div>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</div>
		// </section>

		<div className='relative h-[calc(100vh-80px)] w-full overflow-hidden'>
			{/* Background Image */}
			<div
				className='absolute insert-0 bg-center filter brightness-50'
				style={{
					backgroundImage: '/assets/images/gulu.png',
					backgroundPosition: 'center',
				}}
			/>

			{/* Content */}
			<div className='relative z-10 flex flex-col justify-center items-center h-full text-center px-4'>
				<div className='bg-black/50 p-8 rounded-2xl max-w-2xl w-full'>
					<h1 className='text-5xl font-extrabold mb-4 text-[#FFD700]'>
						Discover <span className='text-white'>Gulu</span>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Hero;
