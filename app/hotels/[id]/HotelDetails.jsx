'use client';

import Image from 'next/image';

export default function HotelDetails({ hotel }) {
  return (
		<div className='container mx-auto p-6'>
			<div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
				<div className='relative h-96 w-full'>
					<Image
						src={hotel.image[0]} 
						alt={hotel.name}
						fill
						className='object-cover'
						priority
					/>
				</div>

				<div className='p-8'>
					<div className='flex justify-between items-start mb-6'>
						<h1 className='text-3xl font-bold text-gray-800'>
							{hotel.name}
						</h1>
						<span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-lg'>
							{hotel.rating} ★
						</span>
					</div>

					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>Location</h2>
						<p className='text-gray-600'>
							{hotel.location.address}, {hotel.location.city},{' '}
							{hotel.location.country}
						</p>
					</div>

					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>
							Description
						</h2>
						<p className='text-gray-600'>{hotel.description}</p>
					</div>

					{hotel.uniqueServices &&
						hotel.uniqueServices.length > 0 && (
							<div className='mb-6'>
								<h2 className='text-xl font-semibold mb-2'>
									Unique Services
								</h2>
								<ul className='list-disc list-inside text-gray-600'>
									{hotel.uniqueServices.map(
										(service, index) => (
											<li key={index}>{service}</li>
										)
									)}
								</ul>
							</div>
						)}

					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>
							Room Types
						</h2>
						<div className='grid md:grid-cols-2 gap-4'>
							{hotel.rooms.types.map((room, index) => (
								<div
									key={index}
									className='border rounded-lg p-4'>
									<h3 className='font-semibold'>
										{room.name}
									</h3>
									<p className='text-gray-600'>
										Size: {room.size}
									</p>
									<p className='text-blue-600 font-medium'>
										${room.pricePerNight} per night
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
  );
}