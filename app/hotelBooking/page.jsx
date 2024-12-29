'use client'
// Hotel routes
import { NextResponse } from 'next/server';
import hotels from '../../data/hotels.json';

export async function GET() {
  return NextResponse.json(hotels);
}

// The page


import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HotelListingPage() {
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await fetch('/api/hotels')
        const data = await response.json()
        setHotels(data.hotels)
      } catch (error) {
        console.error('Error fetching hotels:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchHotels()
  }, []);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <div className='animate-spin rounded-full h-12 w-12 border-4 border-primary border-t-transparent'></div>
      </div>
    )
  }

  return (
		<div className='container mx-auto p-6'>
			<h1 className='text-3xl font-bold mb-8 text-center'>
				Hotels & Resorts
			</h1>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{hotels.map(hotel => (
					<div
						key={hotel.id}
						className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'>
						<div className='relative h-64 w-full'>
							<Image
								src={hotel.image}
								alt={hotel.name}
								fill
								className='object-cover'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority={hotel.id === hotels[0].id} // priority loading for first image
							/>
            </div>
            
            <div className='p-6'>
              <div className='flex justify-between items-start mb-4'>
                <h2 className='text-xl font-semibold text-gray-800 line-clamp-2'>{hotel.name}</h2>
              </div>
            </div>
					</div>
				))}
			</div>
		</div>
  );
}
