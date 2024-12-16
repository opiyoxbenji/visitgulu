// SHARED LAYOUT

import React from 'react';

export default function AuthLayout({ children }) {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen '>
			{children}
		</div>
	);
}
