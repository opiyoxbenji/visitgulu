'use client';

import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
	const { data: session } = useSession();

	const handleSignout = async () => {
		await signOut({
			callbackUrl: '/login',
			redirect: true,
		});
	};

	return (
		<div className='grid place-items-center h-screen'>
			<div className='shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6'>
				<div>
					Name:{' '}
					{/* FIX USERNAME NOT APPEARING */}
					<span className='font-bold'>
						{session?.user?.firstName}
					</span>{' '}
				</div>
				<div>
					Email:{' '}
					<span className='font-bold'>{session?.user?.email}</span>{' '}
				</div>
				<button
					onClick={handleSignout}
					className='bg-red-500 text-white font-bold px-6 py-2 mt-4'>
					Log Out
				</button>
			</div>
		</div>
	);
}
