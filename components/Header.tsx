'use client'

import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'

import Image from 'next/image'
import Link from 'next/link'

import MenuIcon from '@/public/images/icon-menu.svg'
import CloseIcon from '@/public/images/icon-close-menu.svg'
import Logo from '@/public/images/logo.svg'

import Features from './Features'
import Company from './Company'
import CTA from './CTA'

import { navLinks } from '@/data'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	return (
		<header className='p-4 md:px-10 md:py-6'>
			<nav className='flex items-center justify-between' aria-label='Global'>
				<div className='flex items-center md:gap-16'>
					<div>
						<span className='sr-only'>Snap</span>
						<Image src={Logo} alt='snap' className='w-auto object-contain' />
					</div>

					<Popover.Group className='hidden lg:flex lg:gap-x-10'>
						<Features isDesktop />
						<Company isDesktop />
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								className='text-sm font-medium text-mediumGray hover:text-offBlack'>
								{link.name}
							</Link>
						))}
					</Popover.Group>
				</div>

				<div className='lg:hidden'>
					<button type='button' onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<Image src={MenuIcon} alt='' className='w-auto object-contain' />
					</button>
				</div>
				<CTA isDesktop />
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10 bg-offBlack opacity-75 ' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 flex w-2/3 flex-col justify-between overflow-y-auto bg-white '>
					<div className='p-5'>
						<div className='flex items-center justify-end'>
							<button type='button' onClick={() => setMobileMenuOpen(false)}>
								<span className='sr-only'>Close menu</span>
								<Image
									src={CloseIcon}
									alt=''
									className='w-auto object-contain'
								/>
							</button>
						</div>
						<div className='flow-root p-6'>
							<div className='flex flex-col gap-8'>
								<Popover.Group className='flex flex-col gap-4'>
									<Features />
									<Company />
									{navLinks.map((link) => (
										<Link
											key={link.name}
											href={link.href}
											className='font-medium text-mediumGray hover:text-offBlack'>
											{link.name}
										</Link>
									))}
								</Popover.Group>
								<CTA />
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
