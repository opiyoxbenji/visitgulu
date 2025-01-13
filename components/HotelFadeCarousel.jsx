import React, { useState, useEffect } from 'react';

const HotelFadeCarousel = ({ hotel }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	// Safely access the views array
	const images = hotel?.views || [];

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentImageIndex(prevIndex =>
				prevIndex === images.length - 1 ? 0 : prevIndex + 1
			);
		}, 3500);

		return () => clearInterval(timer);
	}, [images.length]);

	if (!hotel || images.length === 0) {
		return (
			<div className='w-full max-w-xl mx-auto h-80 bg-gray-200 rounded-xl flex items-center justify-center'>
				<p className='text-gray-500'>No images available</p>
			</div>
		);
	}

	return (
		<div className='w-full max-w-xl mx-auto shadow-lg rounded-xl overflow-hidden relative'>
			<div className='relative h-80'>
				{images.map((imageUrl, index) => (
					<div
						key={index}
						className='absolute inset-0 w-full h-full transition-opacity duration-700'
						style={{
							backgroundImage: `url(${imageUrl})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							opacity: index === currentImageIndex ? 1 : 0,
						}}
					/>
				))}

				{/* Navigation dots */}
				<div className='absolute bottom-4 left-0 right-0 flex justify-center gap-2'>
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentImageIndex(index)}
							className={`w-2 h-2 rounded-full transition-all duration-300 ${
								index === currentImageIndex
									? 'bg-white w-4'
									: 'bg-white/50 hover:bg-white/75'
							}`}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default HotelFadeCarousel;
