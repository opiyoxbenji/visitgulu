'use client'

// JUST IN CASE !!!!!!!

import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FadeCarousel = () => {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3500,
		cssEase: 'ease-in-out',
		pauseOnHover: true,
		arrows: false,
		customPaging: () => (
			<div
				style={{
					width: '10px',
					height: '10px',
					borderRadius: '50%',
					background: 'rgba(255,255,255,0.5)',
					margin: '0 5px',
				}}
			/>
		),
	};


	// carousel items (images/content)
	const carouselItems = [
		{
			image: 'https://plus.unsplash.com/premium_photo-1687960116497-0dc41e1808a2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'Discover Gulu',
			description: 'Experience the beauty of Northern Uganda',
			overlay: 'bg-blue-500 bg-opacity-40',
		},
		{
			image: 'https://plus.unsplash.com/premium_photo-1687960116689-38c34910d26f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'Adventure Awaits',
			description: 'Explore hidden gems and cultural wonders',
			overlay: 'bg-blue-500 bg-opacity-40',
		},
		{
			image: 'https://images.unsplash.com/photo-1596386461350-326ccb383e9f?q=80&w=1113&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			title: 'Unforgettable Journeys',
			description: 'Create memories that last a lifetime',
			overlay: 'bg-blue-500 bg-opacity-40',
		},
	];

	return (
		// Fade in Carousel Styling and Functionality
		<div className='w-full max-w-xl mx-auto shadow-lg rounded-xl overflow-hidden'>
			<Slider {...settings}>
				{carouselItems.map((item, index) => (
					<div key={index} className='relative'>
						<div
							className={`h-80 w-full bg-cover bg-center relative ${item.overlay}`}
							style={{
								backgroundImage: `url(${item.image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}>
							<div className='absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center'>
								<div className='text-center text-white px-6 py-4 max-w-md'>
									<h2 className='text-3xl font-bold mb-3 drop-shadow-md'>
										{item.title}
									</h2>
									<p className='text-lg opacity-90 drop-shadow-sm'>
										{item.description}
									</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default FadeCarousel;
