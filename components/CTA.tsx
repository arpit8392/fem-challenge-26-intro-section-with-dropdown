import Link from 'next/link'

type Props = {
	isDesktop?: boolean
}

const CTADesktop = (
	<div className='hidden lg:flex lg:items-center lg:gap-x-10'>
		<Link href={'#'} className='text-sm text-mediumGray hover:text-offBlack'>
			Login
		</Link>
		<Link
			href={'#'}
			className='rounded-[14px] border-[1.5px] border-mediumGray px-6 py-3 text-sm text-mediumGray hover:border-offBlack hover:text-offBlack'>
			Register
		</Link>
	</div>
)

const CTAMobile = (
	<div className='flex flex-col gap-4 text-center'>
		<Link href={'#'} className='text-sm text-mediumGray hover:text-offBlack'>
			Login
		</Link>
		<Link
			href={'#'}
			className='rounded-[14px] border-[1.5px] border-mediumGray px-6 py-3 text-sm text-mediumGray hover:border-offBlack hover:text-offBlack'>
			Register
		</Link>
	</div>
)

const CTA = ({ isDesktop }: Props) => {
	const cta = isDesktop ? CTADesktop : CTAMobile
	return cta
}
export default CTA
