import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

export async function POST(req) {
	try {
		const { firstName, lastName, email, password } = await req.json();

		const hashedPassword = await bcrypt.hash(password, 10);
		await connectMongoDB();
		await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});

		return NextResponse.json(
			{ message: 'User registered.' },
			{ status: 201 }
		);
	} catch (error) {
		return NextResponse.json(
			{ message: 'An error occured while registering the user.' },
			{ status: 500 }
		);
	}
}
