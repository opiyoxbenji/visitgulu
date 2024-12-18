'use client';

import React from 'react';
import Link from 'next/link';

const Error = ({
	error,
	reset,
	message = "The page you're looking for seems to have gone on a little adventure.",
	errorCode = '500',
}) => {
	// Log the error to an error reporting service
	React.useEffect(() => {
		console.error('Caught error:', error);
		// Optional: Send error to monitoring service
		// errorReportingService.log(error);
	}, [error]);

	return (
		<div
			className='flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat'
			style={{
				backgroundImage:
					"url('https://images.unsplash.com/photo-1496398766793-e7528d18007d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
			}}>
			<div className='max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg'>
				<div className='text-9xl font-bold text-indigo-600 mb-4'>
					{errorCode}
				</div>
				<h1 className='text-4xl font-bold text-gray-800 mb-6'>
					Oops! Something Went Wrong
				</h1>
				<p className='text-lg text-gray-600 mb-8'>{message}</p>

				{/* Error Details (optional) */}
				{error && (
					<div className='bg-red-50 rounded-lg p-4 mb-8'>
						<p className='text-xs text-red-600 break-words'>
							{error.message || 'Unknown error'}
						</p>
					</div>
				)}

				<div className='flex flex-col space-y-4'>
					{reset && (
						<button
							onClick={() => reset()}
							className='inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors duration-300 mb-4'>
							Try Again
						</button>
					)}

					<Link
						href='/'
						className='inline-block bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-md hover:bg-gray-300 transition-colors duration-300'>
						Go Back Home
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Error;
