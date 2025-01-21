'use client';

import { signOut, useSession } from 'next-auth/react';
import { User, Mail, LogOut, Settings, Bell, Shield, Key } from 'lucide-react';

export default function UserInfo() {
	const { data: session } = useSession();

	const handleSignout = async () => {
		await signOut({
			callbackUrl: '/login',
			redirect: true,
		});
	};

	return (
		// <div className='grid place-items-center h-screen'>
		// 	<div className='shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6'>
		// 		<div className='mb-4 md:mb-0'>
		// 			Name:{' '}
		// 			{/* FIX USERNAME NOT APPEARING */}
		// 			<span className='font-bold'>
		// 				{session?.user?.firstName}
		// 			</span>{' '}
		// 		</div>
		// 		<div>
		// 			Email:{' '}
		// 			<span className='font-bold'>{session?.user?.email}</span>{' '}
		// 		</div>
		// 		<button
		// 			onClick={handleSignout}
		// 			className='bg-red-500 text-white font-bold px-6 py-2 mt-4'>
		// 			Log Out
		// 		</button>
		// 	</div>
		// </div>
		<div className='min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8'>
			<div className='max-w-4xl mx-auto'>
				{/* Header */}
				<div className='bg-white rounded-lg shadow-md p-6 mb-6'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between'>
						<div className='mb-4 md:mb-0'>
							<h1 className='text-2xl font-bold text-gray-800'>
								Welcome back{' '}
								{session?.user?.firstName || 'User'}
							</h1>
							<p className='text-gray-600 mt-1'>
								Manage your account settings and preferences
							</p>
						</div>
						<button
							onClick={handleSignout}
							className='flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition-colors'>
							<LogOut className='w-4 h-4 mr-2' />
							Sign Out
						</button>
					</div>
				</div>

				{/* Main Content Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{/* Profile info card */}
					<div className='bg-white rounded-lg shadow-md p-6'>
						<h2 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
							<User className='w-5 h-5 mr-2 text-blue-500' />
							Profile Info.
						</h2>
						<div className='space-y-4'>
							<div className='flex items-center space-x-2 p-3 bg-gray-50 rounded-md'>
								<User className='w-4 h-4 text-gray-500' />
								<span className='text-gray-600'>Name:</span>
								<span className='font-semibold text-gray-800'>
									{session?.user?.firstName}
								</span>
							</div>
							<div className='flex items-center space-x-2 p-3 bg-gray-50 rounded-md'>
								<User className='w-4 h-4 text-gray-500' />
								<span className='text-gray-600'>Email:</span>
								<span className='font-semibold text-gray-800'>
									{session?.user?.email}
								</span>
							</div>
						</div>
					</div>

					{/* Quick Actions Card */}
					<div className='bg-white rounded-lg shadow-md p-6'>
						<h2 className='text-lg font-semibold text-gray-800 mb-4 flex items-center'>
							<Settings className='w-5 h-5 mr-2 text-blue-500' />
							Quick Actions
						</h2>
						<div className='space-y-3'>
							<button className='w-full flex items-center p-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors'>
								<Shield className='w-4 h-4 mr-3 text-gray-500' />
								Privacy Settings
							</button>
							<button className='w-full flex items-center p-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors'>
								<Bell className='w-4 h-4 mr-3 text-gray-500' />
								Notification Preferences
							</button>
							<button className='w-full flex items-center p-3 text-left text-gray-700 hover:bg-gray-50 rounded-md transition-colors'>
								<Key className='w-4 h-4 mr-3 text-gray-500' />
								Change Password
							</button>
						</div>
					</div>
				</div>

				{/* Activity section */}
				<div className='mt-6 bg-white rounded-lg shadow-md p-6'>
					<h2 className='text-lg font-semibold text-gray-800 mb-4'>
						Recent Activity
					</h2>
					<div className='space-y-3'>
						{[1, 2, 3].map((_, index) => (
							<div
								key={index}
								className='flex items-center justify-between p-3 bg-gray-50 rounded-md'>
								<div className='flex items-center space-x-3'>
									<div className='w-2 h-2 bg-blue-500 rounded-full'></div>
									<span className='text-gray-600'>
										Last login from Chrome on Windows
									</span>
								</div>
								<span className='text-sm text-gray-500'>
									2 hours ago
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
