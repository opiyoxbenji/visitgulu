import Link from 'next/link';
// import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin, TiSocialGithub } from 'react-icons/ti';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-black text-white py-8 px-8'>
			<div className='container mx-auto  px-4 grid grid-cols-1 md:grid-cols-3 gap-8'>
				{/* Company Info Column */}
				<div>
					<h3 className='text-xl font-bold mb-4'>
						Visit<span className='text-[#B22222]'>Gulu</span>
					</h3>
					<p className='text-gray-300'>
						Explore the hidden gems of Northern Uganda. Your
						adventure begins here with seamless travel experiences.
						Building amazing digital experiences.
					</p>
				</div>

				{/* Quick Links Column */}
				<div>
					<h4 className='text-lg font-semibold mb-4 text-[#B22222]'>
						Quick Links
					</h4>
					<nav className='space-y-2'>
						<Link
							href='/'
							className='hover:text-[#FFD700] transition'>
							Home
						</Link>
						<Link
							href='/about'
							className='block hover:text-[#FFD700] transition'>
							About
						</Link>
						<Link
							href='/services'
							className='block hover:text-[#FFD700] transition'>
							Services
						</Link>
						<Link
							href='/contact'
							className='block hover:text-[#FFD700] transition'>
							Contact
						</Link>
					</nav>
				</div>

				{/* Socials & Contacts Column */}
				<div>
					<h4 className='text-lg font-semibold mb-4 text-[#B22222]'>
						Connect With Us
					</h4>
					<div className='flex space-x-4'>
						<Link
							href='https://facebook.com'
							target='_blank'
							rel='noopener noreferrer'>
							<TiSocialFacebook
								className='hover:text-blue-500 transition'
								size={30}
							/>
						</Link>
						<Link
							href='https://x.com'
							target='_blank'
							rel='noopener noreferrer'>
							<TiSocialTwitter
								className='hover:text-blue-400 transition'
								size={30}
							/>
						</Link>
						<Link
							href='https://instagram.com'
							target='_blank'
							rel='noopener noreferrer'>
							<TiSocialInstagram
								className='hover:text-pink-500 transition'
								size={30}
							/>
						</Link>
						<Link
							href='https://linkedin.com'
							target='_blank'
							rel='noopener noreferrer'>
							<TiSocialLinkedin
								className='hover:text-blue-600 transition'
								size={30}
							/>
						</Link>
					</div>
					
				</div>
			</div>

			{/* Copyright Section */}
			<div className='border-t border-gray-700 mt-8 pt-4 text-center'>
				<p className='text-gray-400'>
					© {currentYear} VisitGulu. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
