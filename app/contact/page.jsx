'use client'

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Globe } from 'lucide-react';

const contactMethods = [
	{
		icon: Phone,
		title: 'Call Us',
		details: ['+1 (555) 123-4567', '+1 (555) 765-4321'],
		actionText: 'Call now',
	},
	{
		icon: Mail,
		title: 'Email Us',
		details: ['reservations@luxuryhotels.com', 'support@luxuryhotels.com'],
		actionText: 'Send email',
	},
	{
		icon: MapPin,
		title: 'Visit Us',
		details: ['123 Luxury Avenue', 'New York, NY 10001'],
		actionText: 'Get directions',
	},
];

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		subject: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState('');

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async e => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitMessage('');

		// Simulate form submission
		try {
			await new Promise(resolve => setTimeout(resolve, 1500));
			setSubmitMessage(
				'Thank you for your message. We will get back to you soon!'
			);
			setFormData({
				name: '',
				email: '',
				phone: '',
				subject: '',
				message: '',
			});
		} catch (error) {
			setSubmitMessage(
				'There was an error sending your message. Please try again.'
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className='min-h-screen bg-white'>
			{/* Hero Section */}
			<div className='bg-gray-900 text-white py-16 px-4'>
				<div className='max-w-7xl mx-auto text-center'>
					<h1 className='text-4xl md:text-6xl font-bold mb-4'>
						Contact Us
					</h1>
					<p className='text-xl text-gray-300 max-w-2xl mx-auto'>
						We're here to help and answer any questions you might
						have. We look forward to hearing from you.
					</p>
				</div>
			</div>

			{/* Contact Methods Grid */}
			<section className='py-16 px-4 max-w-7xl mx-auto'>
				<div className='grid md:grid-cols-3 gap-8'>
					{contactMethods.map((method, index) => {
						const IconComponent = method.icon;
						return (
							<div
								key={index}
								className='bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300'>
								<div className='flex justify-center mb-4'>
									<IconComponent className='h-12 w-12 text-blue-600' />
								</div>
								<h3 className='text-xl font-semibold text-center mb-4'>
									{method.title}
								</h3>
								{method.details.map((detail, idx) => (
									<p
										key={idx}
										className='text-gray-600 text-center mb-2'>
										{detail}
									</p>
								))}
								<button className='w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'>
									{method.actionText}
								</button>
							</div>
						);
					})}
				</div>
			</section>

			{/* Contact Form Section */}
			<section className='py-16 px-4 bg-gray-50'>
				<div className='max-w-3xl mx-auto'>
					<h2 className='text-3xl font-bold text-center mb-8'>
						Send Us a Message
					</h2>
					<form onSubmit={handleSubmit} className='space-y-6'>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Your Name
								</label>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleChange}
									required
									className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Email Address
								</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									required
									className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
						</div>
						<div className='grid md:grid-cols-2 gap-6'>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Phone Number
								</label>
								<input
									type='tel'
									name='phone'
									value={formData.phone}
									onChange={handleChange}
									className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Subject
								</label>
								<input
									type='text'
									name='subject'
									value={formData.subject}
									onChange={handleChange}
									required
									className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-2'>
								Your Message
							</label>
							<textarea
								name='message'
								value={formData.message}
								onChange={handleChange}
								required
								rows='6'
								className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500'></textarea>
						</div>
						<div className='flex justify-center'>
							<button
								type='submit'
								disabled={isSubmitting}
								className='px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50'>
								{isSubmitting ? 'Sending...' : 'Send Message'}
							</button>
						</div>
						{submitMessage && (
							<div
								className={`text-center p-4 rounded-lg ${
									submitMessage.includes('error')
										? 'bg-red-100 text-red-700'
										: 'bg-green-100 text-green-700'
								}`}>
								{submitMessage}
							</div>
						)}
					</form>
				</div>
			</section>

			{/* Additional Information */}
			<section className='py-16 px-4'>
				<div className='max-w-7xl mx-auto'>
					<div className='grid md:grid-cols-3 gap-8'>
						<div className='text-center'>
							<Clock className='h-8 w-8 mx-auto text-blue-600 mb-4' />
							<h3 className='text-xl font-semibold mb-2'>
								Business Hours
							</h3>
							<p className='text-gray-600'>
								Monday - Friday: 9:00 AM - 6:00 PM
								<br />
								Saturday: 10:00 AM - 4:00 PM
								<br />
								Sunday: Closed
							</p>
						</div>
						<div className='text-center'>
							<MessageCircle className='h-8 w-8 mx-auto text-blue-600 mb-4' />
							<h3 className='text-xl font-semibold mb-2'>
								Live Chat
							</h3>
							<p className='text-gray-600'>
								Available 24/7
								<br />
								Average response time: 5 minutes
							</p>
						</div>
						<div className='text-center'>
							<Globe className='h-8 w-8 mx-auto text-blue-600 mb-4' />
							<h3 className='text-xl font-semibold mb-2'>
								International
							</h3>
							<p className='text-gray-600'>
								Global support available
								<br />
								Multiple languages supported
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
