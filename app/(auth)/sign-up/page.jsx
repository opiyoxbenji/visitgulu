'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
	Eye,
	EyeOff,
	Lock,
	Mail,
	User,
	AlertCircle,
	Check,
} from 'lucide-react';

const Signup = () => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
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
		setErrors({
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			general: '',
		});

		// Validation
		let formErrors = {};

		if (!firstName.trim()) {
			formErrors.firstName = 'First name is required';
		}

		if (!lastName.trim()) {
			formErrors.lastName = 'Last name is required';
		}

		if (!email) {
			formErrors.email = 'Email is required';
		} else if (!validateEmail(email)) {
			formErrors.email = 'Invalid email format';
		}

		if (!password) {
			formErrors.password = 'Password is required';
		} else if (password.length < 8) {
			formErrors.password = 'Password must be at least 8 characters';
		}

		if (!confirmPassword) {
			formErrors.confirmPassword = 'Please confirm your password';
		} else if (password !== confirmPassword) {
			formErrors.confirmPassword = 'Passwords do not match';
		}

		// If there are errors, set them and stop submission
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		// Submission Logic
		setIsSubmitting(true);
		try {
			// Fake signup logic!!!!!!!!![TO BE REPLACED]
			const response = await simulateSignup(
				firstName,
				lastName,
				email,
				password
			);

			if (response.success) {
				// Handle successful Signup
				console.log('Signup successful');
				// Redirect or show success message
			} else {
				setErrors({ general: response.message || 'Signup failed' });
			}
		} catch (error) {
			setErrors({ general: 'An unexpected error occurred' });
		} finally {
			setIsSubmitting(false);
		}
	};

	// Simulate signup (replace with actual authentication)
	const simulateSignup = async (firstName, lastName, email, password) => {
		return new Promise(resolve => {
			setTimeout(() => {
				// Simulated validation
				if (email && password && firstName && lastName) {
					resolve({ success: true });
				} else {
					resolve({
						success: false,
						message: 'Signup failed. Please check your details.',
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
						src='https://images.unsplash.com/photo-1660675134044-6f1990caba94?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
								Create Account
							</h1>
							<p className='text-gray-600 dark:text-gray-300 mt-2'>
								Sign up to get started
							</p>
						</div>

						{errors.general && (
							<div className='bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200 p-4 rounded-lg flex items-center'>
								<AlertCircle className='mr-2' />
								{errors.general}
							</div>
						)}

						{/* Name Inputs */}
						<div className='grid grid-cols-2 gap-4'>
							{/* First Name Input */}
							<div>
								<label
									htmlFor='firstName'
									className='block text-gray-700 dark:text-gray-300 mb-2'>
									First Name
								</label>
								<div className='relative'>
									<input
										type='text'
										id='firstName'
										value={firstName}
										onChange={e =>
											setFirstName(e.target.value)
										}
										placeholder='First name'
										className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 ${
											errors.firstName
												? 'border-red-500 focus:ring-red-500'
												: 'border-gray-300 focus:ring-blue-500'
										}`}
									/>
									<User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								</div>
								{errors.firstName && (
									<p className='text-red-500 text-sm mt-1 flex items-center'>
										<AlertCircle
											className='mr-1'
											size={16}
										/>
										{errors.firstName}
									</p>
								)}
							</div>

							{/* Last Name Input */}
							<div>
								<label
									htmlFor='lastName'
									className='block text-gray-700 dark:text-gray-300 mb-2'>
									Last Name
								</label>
								<div className='relative'>
									<input
										type='text'
										id='lastName'
										value={lastName}
										onChange={e =>
											setLastName(e.target.value)
										}
										placeholder='Last name'
										className={`w-full px-4 py-2 pl-10 border rounded-lg focus:outline-none focus:ring-2 ${
											errors.lastName
												? 'border-red-500 focus:ring-red-500'
												: 'border-gray-300 focus:ring-blue-500'
										}`}
									/>
									<User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								</div>
								{errors.lastName && (
									<p className='text-red-500 text-sm mt-1 flex items-center'>
										<AlertCircle
											className='mr-1'
											size={16}
										/>
										{errors.lastName}
									</p>
								)}
							</div>
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
									placeholder='Create a password'
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

						{/* Confirm Password Input */}
						<div>
							<label
								htmlFor='confirmPassword'
								className='block text-gray-700 dark:text-gray-300 mb-2'>
								Confirm Password
							</label>
							<div className='relative'>
								<input
									type={
										showConfirmPassword
											? 'text'
											: 'password'
									}
									id='confirmPassword'
									value={confirmPassword}
									onChange={e =>
										setConfirmPassword(e.target.value)
									}
									placeholder='Confirm your password'
									className={`w-full px-4 py-2 pl-10 pr-10 border rounded-lg focus:outline-none focus:ring-2 ${
										errors.confirmPassword
											? 'border-red-500 focus:ring-red-500'
											: 'border-gray-300 focus:ring-blue-500'
									}`}
								/>
								<Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
								<button
									type='button'
									onClick={() =>
										setShowConfirmPassword(
											!showConfirmPassword
										)
									}
									className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'>
									{showConfirmPassword ? (
										<EyeOff size={20} />
									) : (
										<Eye size={20} />
									)}
								</button>
							</div>
							{errors.confirmPassword && (
								<p className='text-red-500 text-sm mt-1 flex items-center'>
									<AlertCircle className='mr-1' size={16} />
									{errors.confirmPassword}
								</p>
							)}
						</div>

						{/* Terms and Conditions */}
						<div className='flex items-center'>
							<input
								type='checkbox'
								id='terms'
								className='mr-2 rounded text-blue-500 focus:ring-blue-400'
							/>
							<label
								htmlFor='terms'
								className='text-gray-700 dark:text-gray-300 text-sm'>
								I agree to the{' '}
								<Link
									href='/terms'
									className='text-blue-500 hover:underline'>
									Terms of Service
								</Link>{' '}
								and{' '}
								<Link
									href='/privacy'
									className='text-blue-500 hover:underline'>
									Privacy Policy
								</Link>
							</label>
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
							{isSubmitting ? 'Creating Account...' : 'Sign Up'}
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
