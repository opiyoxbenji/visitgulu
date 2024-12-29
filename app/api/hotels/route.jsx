'use client'
// Hotel routes
import { NextResponse } from 'next/server';
import hotels from '@/data/hotels.json';

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
      <h1 className='text-3xl font-bold mb-8 text-center'>Hotels & Resorts</h1>
      <div className=''></div>
    </div>
  )
}
