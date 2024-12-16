'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { FaGoogle } from 'react-icons/fa';
import { Eye, EyeOff, Lock, Mail, AlertCircle, Check } from 'lucide-react';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [errors, setErrors] = useState({
		email: '',
		password: '',
		general: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateEmail = email => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(String(email).toLowerCase());
	};

	const handleSubmit = async e => {
		e.preventDefault();

		// Reset Errors
		setErrors({ email: '', password: '', general: '' });

		// Validation
		let formErrors = {};

		if (!email) {
			formErrors.email = 'Email is required';
		} else if (!validateEmail(email)) {
			formErrors.email = 'Invlid email format';
		}

		if (!password) {
			formatErrors.password = 'Password is required';
		} else if (password.length < 8) {
			formErrors.password = 'Password must be at least 8 characters';
		}

		// If there are errors, set them and stop submission
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		// Submisstion Logic
		setIsSubmitting(true);
		try {
			// FAke login logic!!!!!!!!![TO BE REPLACED]
			const response = await simulateLogin(email, password);

			if (response.success) {
				// Handle successfull Login
				console.log('Login successful');
			} else {
				setErrors({ general: response.message || 'Login failed' });
			}
		} catch (error) {
			setErrors({ general: 'An unexpected error occured' });
		} finally {
			setIsSubmitting(false);
		}
	};

	// Simulate login (replace with actual authentication)
	const simulateLogin = async (email, password) => {
		return new Promise(resolve => {
			setTimeout(() => {
				// Simulated validation
				if (
					email === 'user@example.com' &&
					password === 'password123'
				) {
					resolve({ success: true });
				} else {
					resolve({
						success: false,
						message: 'Invalid email or password',
					});
				}
			}, 1500);
		});
	};

	return (
		<div className='min-h-screen flex flex-col lg:flex-row'>
			{/* Image Background */}
			<div className=' hidden lg:block lg:w-1/2 relative'>
				<Image
					src='https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
					alt='Login Background'
					layout='fill'
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					objectFit='cover'
					quality={100}
					className='absolute inset-0'
				/>
				<div className='absolute inset-0 bg-black opacity-50'>
					<div className='absolute inset-0 flex flex-col justify-center items-center text-[#B22222] p-8'>
						<h2 className='text-4xl font-bold mb-4'>
							Welcome Back!
						</h2>
						<p className='text-xl'>
							Log in to continue your journey
						</p>
					</div>
				</div>
			</div>

			{/* Login Form */}

			{/* Made changes Here!!! */}
			<div className='w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
				<div className='w-full max-w-md'>
					<form
						onSubmit={handleSubmit}
						className='bg-white dark:bg-gray-800 shadow-md rounded-xl p-8 space-y-6'>
						<div className='text-center mb-6'>
							<h1 className='text-3xl font-bold text-gray-800 dark:text-white'>
								Login
							</h1>
							<p className='text-gray-600 dark:text-gray-300 mt-2'>
								Enter your credentials to access your account
							</p>
						</div>

						{/* General Error Message */}
						{errors.general && (
							<div className='bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg flex items-center'>
								<AlertCircle className='mr-2' />
								{errors.general}
							</div>
						)}

						{/* Email Input */}
						<div>
							<label
								htmlFor='email'
								className='block text-gray-700 dark:text-gray-300 mb-2'>
								Email Address
							</label>
							<div className='relative'>
								<input
									type='email'
									id='email'
									value={email}
									onChange={e => setEmail(e.target.value)}
									placeholder='Enter your email'
									className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 ${
										errors.email
											? 'border-red-500 focus:ring-red-500'
											: 'border-gray-300 focus:ring-blue-500'
									}`}
								/>
								<Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
							</div>
							{errors.email && (
								<p className='text-red-500 text-sm mt-1 flex items-center'>
									<AlertCircle className='mr-1' size={16} />{' '}
									{errors.email}
								</p>
							)}
						</div>

						{/* Password Input */}
						<div>
							<label
								htmlFor='password'
								className='block text-gray-700 dark:text-gray-300 mb-2'>
								Password
							</label>
							<div className='relative'>
								<input
									type={showPassword ? 'text' : 'password'}
									id='password'
									value={password}
									onChange={e => setPassword(e.target.value)}
									placeholder='Enter your password'
									className={`w-full px-4 py-2 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
										errors.password
											? 'border-red-500 focus:ring-red-500'
											: 'border-gray-300 focus:ring-blue-500'
									}`}
								/>
								<Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								<button
									type='button'
									onClick={() =>
										setShowPassword(!showPassword)
									}
									className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'>
									{showPassword ? (
										<EyeOff size={20} />
									) : (
										<Eye size={20} />
									)}
								</button>
							</div>
							{errors.password && (
								<p className='text-red-500 text-sm mt-1 flex items-center'>
									<AlertCircle className='mr-1' size={16} />{' '}
									{errors.password}
								</p>
							)}
						</div>

						{/* Remember Me & Forgot Password */}
						<div className='flex justify-between items-center'>
							<div className='flex items-center'>
								<input
									type='checkbox'
									id='remember'
									className='mr-2 rounded text-blue-500 focus:ring-blue-400'
								/>
								<label
									htmlFor='remember'
									className='text-gray-700 dark:text-gray-300'>
									Remember me
								</label>
							</div>
							<Link
								href='/forgot-password'
								className='text-blue-500 hover:underline'>
								Forgot Password?
							</Link>
						</div>

						{/* Submit Button */}
						<button
							type='submit'
							disabled={isSubmitting}
							className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 ${
								isSubmitting
									? 'bg-gray-400 cursor-not-allowed'
									: 'bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500'
							}`}>
							{isSubmitting ? 'Logging in...' : 'Log In'}
						</button>

						{/* Signup Link */}
						<div className='text-center mt-4'>
							<p className='text-gray-600 dark:text-gray-300'>
								Don't have an account?{' '}
								<Link
									href='/signup'
									className='text-blue-500 hover:underline'>
									Sign Up
								</Link>
							</p>
						</div>

						{/* Social Login */}
						{/* <div className='mt-6'>
							<div className='flex items-center justify-center space-x-4'>
								<button
									type='button'
									className='bg-red-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-red-600'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='mr-2'>
										<path d='M12.48 10.92v3.28h7.84a6.6 6.6 0 01-2.82 4.32l4.56 3.54c2.66-2.46 4.2-6.08 4.2-10.38a10.4 10.4 0 00-.16-1.76z' />
										<path d='M5.52 13.16c0-.98.16-1.92.46-2.8L1.4 7.02A9.95 9.95 0 000 12c0 1.62.38 3.14 1.04 4.48L5.98 13a5.9 5.9 0 01-.46-2.84z' />
										<path d='M12 16.5c-2.04 0-3.78-.68-5.04-1.86L1.4 19.48A9.95 9.95 0 0012 22c2.54 0 4.86-.94 6.6-2.54l-4.56-3.54c-1.02.68-2.32 1.08-3.64 1.08z' />
									</svg>
									Google
								</button>
								<button
									type='button'
									className='bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='currentColor'
										className='mr-2'>
										<path d='M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z' />
									</svg>
									Facebook
								</button>
							</div>
						</div> */}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
