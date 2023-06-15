'use client'

import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import TodoIcon from '@/public/images/icon-todo.svg'
import CalendarIcon from '@/public/images/icon-calendar.svg'
import ReminderIcon from '@/public/images/icon-reminders.svg'
import PlanningIcon from '@/public/images/icon-planning.svg'

import Logo from '@/public/images/logo.svg'
import Image from 'next/image'

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
				<div className='flex lg:flex-1'>
					<a href='#' className='-m-1.5 p-1.5'>
						<span className='sr-only'>Snap</span>
						<Image src={Logo} alt='snap' className='w-auto object-contain' />
					</a>
				</div>
				<div className='flex lg:hidden'>
					<button
						type='button'
						className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
						onClick={() => setMobileMenuOpen(true)}>
						<span className='sr-only'>Open main menu</span>
						<Bars3Icon className='h-6 w-6' aria-hidden='true' />
					</button>
				</div>
				<Popover.Group className='hidden lg:flex lg:gap-x-12'>
					<Popover className='relative'>
						<Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
							Product
							<ChevronDownIcon
								className='h-5 w-5 flex-none text-gray-400'
								aria-hidden='true'
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
							<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
								<div className='p-4'>
									{features.map((item) => (
										<div
											key={item.name}
											className='group relative flex gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50'>
											<div className='mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white'>
												<Image
													src={item.icon}
													alt=''
													className='w-auto object-contain'
												/>
											</div>
											<div className='flex-auto'>
												<a
													href={item.href}
													className='block font-semibold text-gray-900'>
													{item.name}
													<span className='absolute inset-0' />
												</a>
											</div>
										</div>
									))}
								</div>
							</Popover.Panel>
						</Transition>
					</Popover>

					<a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
						Careers
					</a>
					<a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
						About
					</a>

					<Popover className='relative'>
						<Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
							Company
							<ChevronDownIcon
								className='h-5 w-5 flex-none text-gray-400'
								aria-hidden='true'
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
							<Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5'>
								{company.map((item) => (
									<div
										key={item.name}
										className='relative rounded-lg p-4 hover:bg-gray-50'>
										<a
											href={item.href}
											className='block text-sm font-semibold leading-6 text-gray-900'>
											{item.name}
											<span className='absolute inset-0' />
										</a>
									</div>
								))}
							</Popover.Panel>
						</Transition>
					</Popover>
				</Popover.Group>
				<div className='hidden lg:flex lg:flex-1 lg:justify-end'>
					<a href='#' className='text-sm font-semibold leading-6 text-gray-900'>
						Log in <span aria-hidden='true'>&rarr;</span>
					</a>
				</div>
			</nav>
			<Dialog
				as='div'
				className='lg:hidden'
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}>
				<div className='fixed inset-0 z-10' />
				<Dialog.Panel className='fixed inset-y-0 right-0 z-10 flex w-full flex-col justify-between overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
					<div className='p-6'>
						<div className='flex items-center justify-between'>
							<a href='#' className='-m-1.5 p-1.5'>
								<span className='sr-only'>Your Company</span>
								<Image
									src={Logo}
									alt='snap logo'
									className='w-auto object-contain'
								/>
							</a>
							<button
								type='button'
								className='-m-2.5 rounded-md p-2.5 text-gray-700'
								onClick={() => setMobileMenuOpen(false)}>
								<span className='sr-only'>Close menu</span>
								<XMarkIcon className='h-6 w-6' aria-hidden='true' />
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
