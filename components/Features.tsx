import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import ArrowUpIcon from '@/public/images/icon-arrow-up.svg'
import ArrowDownIcon from '@/public/images/icon-arrow-down.svg'
import { features } from '@/data'
import Link from 'next/link'

type Props = {
	isDesktop?: boolean
}

const FeaturesDesktop = (
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
)

const FeaturesMobile = (
	<Popover className='relative'>
		{({ open }) => (
			<>
				<Popover.Button className='flex items-center gap-x-4 font-medium text-mediumGray hover:text-offBlack'>
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
					<Popover.Panel className='mt-4 bg-white pl-6'>
						{features.map((item) => (
							<div
								key={item.name}
								className='relative flex items-center gap-4 py-2'>
								<Image
									src={item.icon}
									alt=''
									className='w-auto object-contain'
								/>
								<Link
									href={item.href}
									className=' text-mediumGray hover:text-offBlack'>
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
)

const Features = ({ isDesktop}: Props ) => {
	const features = isDesktop ? FeaturesDesktop : FeaturesMobile

	return features
}
export default Features
