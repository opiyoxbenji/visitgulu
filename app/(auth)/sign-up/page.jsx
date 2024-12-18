"use client"

// Signup Page Component
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff, AlertCircle, Mail, Lock, User } from 'lucide-react';

const Signup = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [errors, setErrors] = useState({});
	const [showPassword, setShowPassword] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		const validationErrors = {};

		// Basic form validations
		if (!name) validationErrors.name = 'Name is required';
		if (!email) validationErrors.email = 'Email is required';
		if (!password) validationErrors.password = 'Password is required';
		if (password !== confirmPassword)
			validationErrors.confirmPassword = 'Passwords do not match';

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		setErrors({});
		setIsSubmitting(true);

		// Simulate API submission (replace with actual API call)
		setTimeout(() => {
			alert('Signup successful!');
			setIsSubmitting(false);
		}, 2000);
	};

	return (
		<div className='flex justify-center items-center h-screen p-10'>
			<div className='grid md:grid-cols-2 grid-cols-1 border rounded-3xl'>
				{/* Image Section */}
				<div className='hidden md:block'>
					<img
						src='https://img.freepik.com/premium-vector/vector-abstract-seamless-pattern-with-stars-blue-background_117177-1008.jpg'
						className='rounded-3xl h-full object-cover'
						alt='Signup Visual'
					/>
				</div>

				{/* Form Section */}
				<div className='w-full max-w-md p-10 bg-white dark:bg-gray-800 rounded-3xl'>
					<form onSubmit={handleSubmit} className='space-y-6'>
						{/* Header */}
						<div className='text-center mb-6'>
							<h1 className='text-3xl font-bold text-gray-800 dark:text-white'>
								Sign Up
							</h1>
							<p className='text-gray-600 dark:text-gray-300 mt-2'>
								Create an account to get started
							</p>
						</div>

						{/* General Error Message */}
						{errors.general && (
							<div className='bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg flex items-center'>
								<AlertCircle className='mr-2' />
								{errors.general}
							</div>
						)}

						{/* Name Input */}
						<div>
							<label
								htmlFor='name'
								className='block text-gray-700 dark:text-gray-300 mb-2'>
								Name
							</label>
							<div className='relative'>
								<input
									type='text'
									id='name'
									value={name}
									onChange={e => setName(e.target.value)}
									placeholder='Enter your name'
									className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 ${
										errors.name
											? 'border-red-500 focus:ring-red-500'
											: 'border-gray-300 focus:ring-blue-500'
									}`}
								/>
								<User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
							</div>
							{errors.name && (
								<p className='text-red-500 text-sm mt-1 flex items-center'>
									<AlertCircle className='mr-1' size={16} />{' '}
									{errors.name}
								</p>
							)}
						</div>

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

						{/* Confirm Password Input */}
						<div>
							<label
								htmlFor='confirmPassword'
								className='block text-gray-700 dark:text-gray-300 mb-2'>
								Confirm Password
							</label>
							<div className='relative'>
								<input
									type='password'
									id='confirmPassword'
									value={confirmPassword}
									onChange={e =>
										setConfirmPassword(e.target.value)
									}
									placeholder='Confirm your password'
									className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 ${
										errors.confirmPassword
											? 'border-red-500 focus:ring-red-500'
											: 'border-gray-300 focus:ring-blue-500'
									}`}
								/>
								<Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
							</div>
							{errors.confirmPassword && (
								<p className='text-red-500 text-sm mt-1 flex items-center'>
									<AlertCircle className='mr-1' size={16} />{' '}
									{errors.confirmPassword}
								</p>
							)}
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
							{isSubmitting ? 'Signing up...' : 'Sign Up'}
						</button>

						{/* Login Link */}
						<div className='text-center mt-4'>
							<p className='text-gray-600 dark:text-gray-300'>
								Already have an account?{' '}
								<Link
									href='/login'
									className='text-blue-500 hover:underline'>
									Log In
								</Link>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;
