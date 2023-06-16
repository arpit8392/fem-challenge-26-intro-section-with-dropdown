import { Popover, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment } from 'react'
import ArrowUpIcon from '@/public/images/icon-arrow-up.svg'
import ArrowDownIcon from '@/public/images/icon-arrow-down.svg'
import { company } from '@/data'
import Link from 'next/link'

type Props = {
	isDesktop?: boolean
}

const CompanyDesktop = (
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
							<div key={item.name} className='relative rounded-lg py-2'>
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

const CompanyMobile = (
	<Popover className='relative'>
		{({ open }) => (
			<>
				<Popover.Button className='flex items-center gap-x-4 font-medium text-mediumGray hover:text-offBlack'>
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
					<Popover.Panel className='mt-4 bg-white pl-6'>
						{company.map((item) => (
							<div key={item.name} className='relative py-2'>
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

const Company = ({ isDesktop }: Props) => {
	const company = isDesktop ? CompanyDesktop : CompanyMobile
	return company
}
export default Company
