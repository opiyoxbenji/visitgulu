import Image from 'next/image';

async function getHotel(id) {
  const res = await fetch(`http://localhost:4000/hotels/$id`);
  if (!res.ok) throw new Error('Failed to fetch hotel');
  return res.json();
}

export default async function HotelDetails