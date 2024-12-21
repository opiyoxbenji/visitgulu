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
		<div className='flex justify-center items-center h-screen p-1'>
			<div className='grid md:grid-cols-2 grid-cols-1 border rounded-3xl bg-white dark:bg-gray-800'>
				{/* Image Section */}
				<div className='hidden md:flex'>
					<img
						src='https://images.unsplash.com/photo-1660675134062-7d3bbb340608?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt='Background'
						className='rounded-3xl object-cover'
					/>
				</div>

				{/* Form Section */}
				<div className='p-5 w-full max-w-md mx-auto'>
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
									<AlertCircle className='mr-1' size={16} />
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
									<AlertCircle className='mr-1' size={16} />
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
									href='/sign-up'
									className='text-blue-500 hover:underline'>
									Sign Up
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
