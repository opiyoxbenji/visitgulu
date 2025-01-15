import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connectMongoDB } from '@/lib/mongodb';
import User from '@/models/user';

export async function POST(req) {
	try {
		const { firstName, lastName, email, password } = await req.json();
		console.log('Received registration request:', {
			firstName,
			lastName,
			email,
		});

		const hashedPassword = await bcrypt.hash(password, 10);
		await connectMongoDB();

		console.log('Attempting to create user...');

		await User.create({
			firstName,
			lastName,
			email,
			password: hashedPassword,
		});

		console.log('User created successfully');

		return NextResponse.json(
			{ message: 'User registered.' },
			{ status: 201 }
		);
	} catch (error) {
		console.error('Registration error:', error);

		return NextResponse.json(
			{ message: 'An error occured while registering the user.' },
			{ status: 500 }
		);
	}
}
