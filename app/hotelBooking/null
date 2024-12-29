'use client';

import React, { useState, useEffect } from 'react';
import {
	FaHotel,
	FaMapMarkerAlt,
	FaStar,
	FaFilter,
	FaBed,
	FaDollarSign,
	FaUsers,
	FaHeart,
	FaTimes,
	FaChevronDown,
	FaCheckCircle,
	FaWifi,
	FaCar,
	FaSwimmer,
	FaDumbbell,
	FaSpa,
} from 'react-icons/fa';

// Mock data - replace with actual API or database
const hotelData = [
	// (unchanged mock data)
];

const amenitiesIcons = {
	WiFi: FaWifi,
	Pool: FaSwimmer,
	Gym: FaDumbbell,
	Parking: FaCar,
	Spa: FaSpa,
};

const HotelListingPage = () => {
	const [hotels, setHotels] = useState(hotelData);
	const [filters, setFilters] = useState({
		priceRange: [0, 300],
		rating: 0,
		amenities: [],
		guests: 1,
	});
	const [showFilters, setShowFilters] = useState(false);
	const [favorites, setFavorites] = useState([]);

	const toggleFavorite = hotelId => {
		setFavorites(prev =>
			prev.includes(hotelId)
				? prev.filter(id => id !== hotelId)
				: [...prev, hotelId]
		);
	};

	const applyFilters = () => {
		// (unchanged filter logic)
	};

	const resetFilters = () => {
		setFilters({
			priceRange: [0, 300],
			rating: 0,
			amenities: [],
			guests: 1,
		});
		setHotels(hotelData);
	};

	const renderFilterSection = () => (
		<div
			className={`bg-white shadow-lg rounded-lg p-6 ${
				showFilters ? 'block' : 'hidden'
			} md:block`}>
			<div className='flex justify-between items-center mb-4'>
				<h3 className='text-xl font-bold flex items-center'>
					<FaFilter className='mr-2' /> Filters
				</h3>
				<button
					onClick={resetFilters}
					className='text-[#B22222] hover:underline'>
					Reset
				</button>
			</div>

			{/* Price Range Filter */}
			<div className='mb-4'>
				<label className='block text-sm font-medium text-gray-700 flex items-center'>
					<FaDollarSign className='mr-2 text-gray-500' />
					Price Range
				</label>
				<div className='flex items-center space-x-4'>
					<input
						type='range'
						min='0'
						max='300'
						value={filters.priceRange[1]}
						onChange={e =>
							setFilters(prev => ({
								...prev,
								priceRange: [
									prev.priceRange[0],
									Number(e.target.value),
								],
							}))
						}
						className='w-full'
					/>
					<span>${filters.priceRange[1]}</span>
				</div>
			</div>

			{/* Rating Filter */}
			<div className='mb-4'>
				<label className='block text-sm font-medium text-gray-700 flex items-center'>
					<FaStar className='mr-2 text-gray-500' />
					Minimum Rating
				</label>
				<div className='flex space-x-2'>
					{[1, 2, 3, 4, 5].map(rating => (
						<button
							key={rating}
							onClick={() =>
								setFilters(prev => ({ ...prev, rating }))
							}
							className={`flex items-center px-3 py-1 rounded-full ${
								filters.rating === rating
									? 'bg-[#B22222] text-white'
									: 'bg-gray-100 text-gray-700'
							}`}>
							{rating}+ <FaStar className='ml-1' size={16} />
						</button>
					))}
				</div>
			</div>

			{/* Amenities Filter */}
			<div className='mb-4'>
				<label className='block text-sm font-medium text-gray-700 flex items-center'>
					<FaCheckCircle className='mr-2 text-gray-500' />
					Amenities
				</label>
				<div className='grid grid-cols-2 gap-2'>
					{['WiFi', 'Pool', 'Gym', 'Parking', 'Spa'].map(amenity => {
						const AmenityIcon = amenitiesIcons[amenity];
						return (
							<label
								key={amenity}
								className='flex items-center space-x-2'>
								<input
									type='checkbox'
									checked={filters.amenities.includes(
										amenity
									)}
									onChange={() =>
										setFilters(prev => ({
											...prev,
											amenities: prev.amenities.includes(
												amenity
											)
												? prev.amenities.filter(
														a => a !== amenity
												  )
												: [...prev.amenities, amenity],
										}))
									}
									className='form-checkbox'
								/>
								<AmenityIcon
									className='text-gray-500'
									size={20}
								/>
								<span>{amenity}</span>
							</label>
						);
					})}
				</div>
			</div>

			{/* Guest Filter */}
			<div>
				<label className='block text-sm font-medium text-gray-700 flex items-center'>
					<FaUsers className='mr-2 text-gray-500' />
					Number of Guests
				</label>
				<div className='flex items-center space-x-4'>
					<input
						type='number'
						min='1'
						value={filters.guests}
						onChange={e =>
							setFilters(prev => ({
								...prev,
								guests: Number(e.target.value),
							}))
						}
						className='w-20 border rounded-lg px-2 py-1'
					/>
				</div>
			</div>

			<button
				onClick={applyFilters}
				className='mt-4 w-full bg-[#B22222] text-white py-2 rounded-lg hover:bg-[#991f1f]'>
				Apply Filters
			</button>
		</div>
	);

	const renderHotelCard = hotel => (
		<div
			key={hotel.id}
			className='bg-white rounded-lg shadow-md overflow-hidden transform transition hover:scale-105 hover:shadow-xl'>
			<div className='relative'>
				<img
					src={hotel.images[0]}
					alt={hotel.name}
					className='w-full h-48 object-cover'
				/>
				<button
					onClick={() => toggleFavorite(hotel.id)}
					className='absolute top-4 right-4 bg-white/80 rounded-full p-2 hover:bg-white'>
					<FaHeart
						className={`${
							favorites.includes(hotel.id)
								? 'text-[#B22222] fill-[#B22222]'
								: 'text-gray-500'
						}`}
					/>
				</button>
			</div>

			<div className='p-4'>
				<div className='flex justify-between items-center mb-2'>
					<h2 className='text-xl font-bold'>{hotel.name}</h2>
					<div className='flex items-center'>
						<FaStar className='text-yellow-500 mr-1' />
						<span>{hotel.rating}</span>
					</div>
				</div>

				<div className='flex items-center text-gray-600 mb-2'>
					<FaMapMarkerAlt className='mr-2 text-[#B22222]' size={20} />
					{hotel.location}
				</div>

				<div className='flex space-x-2 mb-4'>
					{hotel.amenities.slice(0, 3).map(amenity => {
						const AmenityIcon = amenitiesIcons[amenity];
						return (
							<div
								key={amenity}
								className='bg-gray-100 rounded-full p-2 tooltip'
								title={amenity}>
								<AmenityIcon
									size={20}
									className='text-gray-600'
								/>
							</div>
						);
					})}
				</div>

				<div className='grid grid-cols-3 gap-2 mb-4'>
					{hotel.rooms.map(room => (
						<div
							key={room.type}
							className='bg-gray-100 p-2 rounded-lg text-center'>
							<p className='font-semibold'>{room.type}</p>
							<p className='text-sm text-gray-600'>
								${room.price}/night
							</p>
							<p className='text-xs text-gray-500'>
								{room.capacity} guests
							</p>
						</div>
					))}
				</div>

				<button
					className='w-full bg-[#B22222] text-white py-2 rounded-lg hover:bg-[#991f1f]'
					onClick={() =>
						(window.location.href = `/hotels/${hotel.id}`)
					}>
					View Details
				</button>
			</div>
		</div>
	);

	return (
		<div className='container mx-auto px-4 py-8 bg-gray-50'>
			<div className='flex items-center justify-between mb-8'>
				<h1 className='text-3xl font-bold flex items-center'>
					<FaHotel className='mr-4 text-[#B22222]' />
					Hotels in Gulu
				</h1>
				<button
					onClick={() => setShowFilters(!showFilters)}
					className='md:hidden flex items-center bg-[#B22222] text-white px-4 py-2 rounded-lg'>
					{showFilters ? <FaTimes /> : <FaFilter />}
					{showFilters ? 'Close' : 'Filters'}
				</button>
			</div>

			<div className='grid md:grid-cols-[300px_1fr] gap-6'>
				{renderFilterSection()}

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
					{hotels.length === 0 ? (
						<div className='col-span-full text-center py-12'>
							<p className='text-xl text-gray-600'>
								No hotels match your filters.
							</p>
						</div>
					) : (
						hotels.map(renderHotelCard)
					)}
				</div>
			</div>
		</div>
	);
};

export default HotelListingPage;
