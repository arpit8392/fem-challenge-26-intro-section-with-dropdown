'use client'

import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'

import MenuIcon from '@/public/images/icon-menu.svg'
import CloseIcon from '@/public/images/icon-close-menu.svg'

import TodoIcon from '@/public/images/icon-todo.svg'
import CalendarIcon from '@/public/images/icon-calendar.svg'
import ReminderIcon from '@/public/images/icon-reminders.svg'
import PlanningIcon from '@/public/images/icon-planning.svg'

import ArrowUpIcon from '@/public/images/icon-arrow-up.svg'
import ArrowDownIcon from '@/public/images/icon-arrow-down.svg'

import Logo from '@/public/images/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const features = [
	{
		name: 'Todo List',
		href: '#',
		icon: TodoIcon,
	},
	{
		name: 'Calendar',
		href: '#',
		icon: CalendarIcon,
	},
	{
		name: 'Reminders',
		href: '#',
		icon: ReminderIcon,
	},
	{
		name: 'Planning',
		href: '#',
		icon: PlanningIcon,
	},
]

const company = [
	{
		name: 'History',
		href: '#',
	},
	{
		name: 'Our Team',
		href: '#',
	},
	{
		name: 'Blog',
		href: '#',
	},
]

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

					<Popover.Group className='hidden md:flex md:gap-x-10'>
						<Popover className='relative'>
							{({ open }) => (
								<>
									<Popover.Button className='flex items-center gap-x-2 text-sm font-medium text-mediumGray hover:text-offBlack'>
										Features
										<Image
											src={open ? ArrowUpIcon : ArrowDownIcon}
											alt=''
											className='w-auto object-contain'
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter='transition ease-out duration-200'
										enterFrom='opacity-0 translate-y-1'
										enterTo='opacity-100 translate-y-0'
										leave='transition ease-in duration-150'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 translate-y-1'>
										<Popover.Panel className='absolute -left-20 top-full z-10 mt-5 w-40 rounded-xl bg-white p-6 shadow-lg'>
											{features.map((item) => (
												<div
													key={item.name}
													className='relative flex gap-4 rounded-lg py-2'>
													<Image
														src={item.icon}
														alt=''
														className='w-auto object-contain'
													/>
													<Link
														href={item.href}
														className='text-sm text-mediumGray hover:text-offBlack'>
														{item.name}
														<span className='absolute inset-0' />
													</Link>
												</div>
											))}
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>

						<Popover className='relative'>
							{({ open }) => (
								<>
									<Popover.Button className='flex items-center gap-x-2 text-sm font-medium text-mediumGray hover:text-offBlack'>
										Company
										<Image
											src={open ? ArrowUpIcon : ArrowDownIcon}
											alt=''
											className='w-auto object-contain'
										/>
									</Popover.Button>

									<Transition
										as={Fragment}
										enter='transition ease-out duration-200'
										enterFrom='opacity-0 translate-y-1'
										enterTo='opacity-100 translate-y-0'
										leave='transition ease-in duration-150'
										leaveFrom='opacity-100 translate-y-0'
										leaveTo='opacity-0 translate-y-1'>
										<Popover.Panel className='absolute -left-2 top-full z-10 mt-5 w-28 rounded-xl bg-white p-6 shadow-lg'>
											{company.map((item) => (
												<div
													key={item.name}
													className='relative rounded-lg py-2'>
													<Link
														href={item.href}
														className='text-sm text-mediumGray hover:text-offBlack'>
														{item.name}
														<span className='absolute inset-0' />
													</Link>
												</div>
											))}
										</Popover.Panel>
									</Transition>
								</>
							)}
						</Popover>

						<a
							href='#'
							className='text-sm font-medium text-mediumGray hover:text-offBlack'>
							Careers
						</a>
						<a
							href='#'
							className='text-sm font-medium text-mediumGray hover:text-offBlack'>
							About
						</a>
					</Popover.Group>
				</div>

				<div className='md:hidden'>
					<button type='button' onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<Image src={MenuIcon} alt='' className='w-auto object-contain' />
					</button>
				</div>

				<div className='hidden md:flex md:items-center md:gap-x-10'>
					<Link
						href={'#'}
						className='text-sm text-mediumGray hover:text-offBlack'>
						Login
					</Link>
					<Link
						href={'#'}
						className='rounded-[14px] border-[1.5px] border-mediumGray px-6 py-3 text-sm text-mediumGray hover:border-offBlack hover:text-offBlack'>
						Register
					</Link>
				</div>
			</nav>
			<Dialog
				as='div'
				className='md:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10 bg-offBlack opacity-75 ' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 flex w-2/3 flex-col justify-between overflow-y-auto bg-white '>
					<div className='p-6'>
						<div className='flex items-center justify-between'>
							<button type='button' onClick={() => setMobileMenuOpen(false)}>
								<span className='sr-only'>Close menu</span>
								<Image
									src={CloseIcon}
									alt=''
									className='w-auto object-contain'
								/>
							</button>
						</div>
						<div className='mt-6 flow-root'>
							<div className='-my-6 divide-y divide-gray-500/10'>
								<div className='space-y-2 py-6'>
									{features.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='group -mx-3 flex items-center gap-x-6 rounded-lg p-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
											<div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
												<Image
													src={item.icon}
													alt=''
													className='w-auto object-contain'
												/>
											</div>
											{item.name}
										</a>
									))}
								</div>
								<div className='space-y-2 py-6'>
									<a
										href='#'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										Features
									</a>
									<a
										href='#'
										className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										Marketplace
									</a>

									{company.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
											{item.name}
										</a>
									))}
								</div>
								<div className='py-6'>
									<a
										href='#'
										className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
										Log in
									</a>
								</div>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	)
}
