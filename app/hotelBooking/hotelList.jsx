import React from 'react'

// fetching data 
async function getHotels() {
  const res = await fetch('http://localhost:4000/hotels');
  
  return res.json()
}

export default async function hotelList() {
  const hotels = await getHotels()

  return (
		<>
			<div className='container mx-auto p-6'>
				<h1 className='text-3xl font-bold mb-8 text-center'>
					Luxury Hotels & Resorts
				</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{hotels.map(hotel => (
						<div
							key={hotel.id}
							className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
							<div className='relative h-64 w-full'>
								<Image
									src={
										hotel.image || '/placeholder-hotel.jpg'
									} // Fallback to placeholder if image is missing
									alt={hotel.name}
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
									priority={hotel.id === hotels[0].id} // Priority loading for first image
								/>
							</div>

							<div className='p-6'>
								<div className='flex justify-between items-start mb-4'>
									<h2 className='text-xl font-semibold text-gray-800 line-clamp-2'>
										{hotel.name}
									</h2>
									<span className='inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800'>
										{hotel.rating} ★
									</span>
								</div>

								<p className='text-gray-600 mb-4 line-clamp-3'>
									{hotel.description}
								</p>

								<div className='flex items-center text-gray-700 mb-2'>
									<svg
										className='w-4 h-4 mr-2'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
										/>
									</svg>
									<span className='text-sm'>
										{hotel.location.city},{' '}
										{hotel.location.country}
									</span>
								</div>

								<div className='flex justify-between items-center mt-4 pt-4 border-t border-gray-100'>
									<span className='text-gray-800 font-medium'>
										{hotel.priceRange}
									</span>
									<button className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
  );
}
