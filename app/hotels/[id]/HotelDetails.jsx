'use client';

import HotelFadeCarousel from '@/components/HotelFadeCarousel';
import Image from 'next/image';
import { MapPin, DollarSign, Star } from 'lucide-react';

export default function HotelDetails({ hotel }) {
	// function to format price range
	const formatPriceRange = range => range.length;

	// function for format coordinates
	const formatCoordinates = coords => {
		return `${coords.latitude.toFixed(4)}, ${coords.longitude.toFixed(4)}`;
	};

	return (
		<div className='container mx-auto p-6'>
			{/* Main container with responsive padding */}
			<div className='max-w-5xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
				{/* main image */}
				<div className='relative h-96 w-full'>
					<Image
						src={hotel.image[0]}
						alt={hotel.name}
						fill
						className='object-cover'
						priority
					/>
					{/* Price range overlay */}
					<div className='absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full'>
						<span className='text-green-700 font-semibold'>
							{'$'.repeat(formatPriceRange(hotel.priceRange))}
						</span>
					</div>
				</div>

				<div className='p-4 sm:p-8'>
					<div className='flex flex-col sm:flex-row justify-between items-start mb-6 sm:items-center gap-4'>
						<h1 className='text-3xl font-bold text-gray-800'>
							{hotel.name}
						</h1>
						<div className='flex items-center gap-2'>
							<span className='px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-lg'>
								{hotel.rating} ★
							</span>
						</div>
					</div>

					{/* location section with coordinates */}
					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2 flex items-center gap-2'>
							<MapPin className='w-5 h-5' />
							Location
						</h2>
						<div className='text-gray-600 space-y-1'>
							<p className='text-gray-600'>
								{hotel.location.address}, {hotel.location.city},{' '}
								{hotel.location.country}
							</p>
							<p className='text-sm'>
								Coordinates:{' '}
								{formatCoordinates(hotel.location.coordinates)}
							</p>
						</div>
					</div>

					{/* carousel */}
					<div className='mb-8'>
						<h2 className='text-xl font-semibold mb-2'>Views</h2>
						<HotelFadeCarousel hotel={hotel} />
					</div>

					{/* description */}
					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>
							Description
						</h2>
						<p className='text-gray-600'>{hotel.description}</p>
					</div>

					{/* Added amenities section */}
					<div className='mb-8'>
						<h2 className='text-xl font-semibold mb-2'>
							Amenities
						</h2>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-3'>
							{hotel.amenities.map((amenity, index) => (
								<div
									key={index}
									className='bg-gray-50 rounded-lg p-3 text-gray-700'>
									{amenity}
								</div>
							))}
						</div>
					</div>

					{/* Policies */}
					<div className='mb-8'>
						<h2 className='text-xl font-semibold mb-2'>Policies</h2>
						<div className='grid sm:grid-cols-2 gap-4'>
							{Object.entries(hotel.policies).map(
								([key, value]) => (
									<div
										key={key}
										className='bg-gray-50 rounded-lg p-4'>
										<h3 className='font-semibold text-gray-800 mb-1'>
											{key
												.replace(/([A-Z])/g, ' $1')
												.replace(/^./, str =>
													str.toUpperCase()
												)}
										</h3>
										<p className='text-gray-600 text-sm'>
											{value}
										</p>
									</div>
								)
							)}
						</div>
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

					{/* Room typess */}
					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>
							Room Types
							<span className='text-sm font-normal text-gray-500 ml-2'>
								(Total rooms: {hotel.rooms.total})
							</span>
						</h2>
						<div className='grid sm:grid-cols-2 gap-4'>
							{hotel.rooms.types.map((room, index) => (
								<div
									key={index}
									className='border rounded-lg p-4 hover:shadow-md transition-shadow'>
									<h3 className='font-semibold text-lg'>
										{room.name}
									</h3>
									<p className='text-gray-600'>
										Size: {room.size}
									</p>
									<p className='text-blue-600 font-medium mt-2 flex items-center gap-1'>
										<DollarSign className='w-4 h-4' />
										{room.pricePerNight} per night
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
