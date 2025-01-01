import HotelDetails from './HotelDetails';

async function getHotel(id) {
	const res = await fetch(`http://localhost:4000/hotels/${id}`);
	if (!res.ok) throw new Error('Failed to fetch hotel');
	return res.json();
}

export default async function HotelPage({ params }) {
	const hotel = await getHotel(params.id);
	return <HotelDetails hotel={hotel} />;
}
