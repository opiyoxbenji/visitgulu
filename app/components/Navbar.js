'use client';

import React, { useState } from 'react'
import { Home, Hotel, TicketCheck, MapPin, User, Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const desktopNavItems = [
		{
			href: '/',
			icon: <Home className='mr-2' />,
			labe: 'Home',
		},
		{
			href: '/hotels',
			icon: <Hotel className='mr-2' />,
			labe: 'Hotel',
		},
		{
			href: '/tickets',
			icon: <TicketCheck className='mr-2' />,
			labe: 'Tickets',
		},
		{
			href: '/contact',
			icon: <MapPin className='mr-2' />,
			labe: 'Contact',
		},
		// {
		// 	href: '/',
		// 	icon: <Home className='mr-2' />,
		// 	labe: 'Home',
		// },
  ];

  const mobileNavItems = [
		{
			href: '/',
			icon: <Home className='mr-2' />,
			label: 'Home',
		},
		{
			href: '/visit-gulu',
			icon: <Globe className='mr-2' />,
			label: 'Visit Gulu',
		},
		{
			href: '/hotels',
			icon: <Hotel className='mr-2' />,
			label: 'Hotels',
		},
		{
			href: '/tickets',
			icon: <TicketCheck className='mr-2' />,
			label: 'Tickets',
		},
		{
			href: '/contact',
			icon: <MapPin className='mr-2' />,
			label: 'Contact',
		},
  ];

  const handleNavigation = (href) => {
    window.location.href = href
  }

  return (
    <nav className='bg-purple-600 text-white sticky top-0 z-50 shadow-lg'>
      <div className='container mx-auto flex justify-between items-center p-4'>
        {/* Logo Section */}
        <div
          onClick={() => handleNavigation('/')}
        className='flex items-center text-2xl font-bold hover:opacity-80 hover:text-yellow-300 transition cursor-pointer'>
          <MapPin className='mr-2'/> Visit Gulu
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className='md:hidden'
        onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Desktop Navigation */}
      </div>
      

    </nav>
  )
}

export default Navbar