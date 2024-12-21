import React from 'react'

const page = () => {
  return (
		<section class='bg-blue-50 dark:bg-slate-800' id='contact '>
			<div class='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
				<div class='mb-4'>
					<div class='mb-6 max-w-3xl text-center md:mx-auto md:mb-12'>
						<p class='text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200'>
							Contact Us
						</p>
						<h2 class='font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl'>
							Let's Connect
						</h2>
						<p class='mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400'>
							We're here to help and answer any questions you
							might have. We look forward to hearing from you!
						</p>
					</div>
				</div>
				<div class='flex items-stretch justify-center'>
					<div class='grid md:grid-cols-2 gap-8'>
						<div class='h-full pr-6'>
							<p class='mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400'>
								Our team is dedicated to providing exceptional
								support. Whether you have a question,
								suggestion, or just want to say hello, we're
								always ready to listen and help.
							</p>
							<ul class='space-y-6'>
								<li class='flex items-start space-x-4'>
									<div class='flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-gray-50 flex-shrink-0'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											class='h-6 w-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
											/>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
											/>
										</svg>
									</div>
									<div>
										<h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
											Our Address
										</h3>
										<address class='not-italic text-gray-600 dark:text-slate-400'>
											Queens Avenue Road
											<br />
											Gulu, Uganda
										</address>
									</div>
								</li>
								<li class='flex items-start space-x-4'>
									<div class='flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-gray-50 flex-shrink-0'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											class='h-6 w-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1c-8.284 0-15-6.716-15-15V5z'
											/>
										</svg>
									</div>
									<div>
										<h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
											Contact
										</h3>
										<div class='text-gray-600 dark:text-slate-400'>
											<p>
												Phone:{' '}
												<a
													href='tel:+11234567890'
													class='hover:text-blue-600 transition-colors'>
													+256 (777) 456-7890
												</a>
											</p>
											<p>
												Email:{' '}
												<a
													href='mailto:support@company.com'
													class='hover:text-blue-600 transition-colors'>
													support@company.com
												</a>
											</p>
										</div>
									</div>
								</li>
								<li class='flex items-start space-x-4'>
									<div class='flex h-12 w-12 items-center justify-center rounded-full bg-blue-900 text-gray-50 flex-shrink-0'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											class='h-6 w-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'>
											<path
												stroke-linecap='round'
												stroke-linejoin='round'
												stroke-width='2'
												d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
											/>
										</svg>
									</div>
									<div>
										<h3 class='text-lg font-semibold text-gray-900 dark:text-white'>
											Working Hours
										</h3>
										<p class='text-gray-600 dark:text-slate-400'>
											Monday - Friday: 08:00 - 17:00
											<br />
											Saturday &amp; Sunday: 08:00 - 12:00
										</p>
									</div>
								</li>
							</ul>
						</div>
						<div class='card h-fit max-w-6xl p-5 md:p-12 bg-white dark:bg-slate-700 rounded-lg shadow-lg'>
							<h2 class='mb-6 text-2xl font-bold text-gray-900 dark:text-white'>
								Ready to Get Started?
							</h2>
							<form id='contactForm' class='space-y-6'>
								<div class='grid grid-cols-1 gap-6'>
									<div>
										<label
											for='name'
											class='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
											Full Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											required
											autocomplete='name'
											placeholder='Enter your full name'
											class='block w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:text-white'
										/>
									</div>
									<div>
										<label
											for='email'
											class='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
											Email Address
										</label>
										<input
											type='email'
											id='email'
											name='email'
											required
											autocomplete='email'
											placeholder='Enter your email address'
											class='block w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:text-white'
										/>
									</div>
									<div>
										<label
											for='message'
											class='block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300'>
											Your Message
										</label>
										<textarea
											id='message'
											name='message'
											rows='5'
											required
											placeholder='Write your message here...'
											class='block w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-slate-800 dark:text-white'></textarea>
									</div>
								</div>
								<div>
									<button
										type='submit'
										class='w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300'>
										Send Message
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
  );
}

export default page