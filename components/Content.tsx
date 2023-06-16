import Link from 'next/link'

const Content = () => {
	return (
		<div className='flex flex-col items-center gap-4 md:items-start md:gap-12'>
			<h1 className='text-4xl font-bold -tracking-[0.5px] text-offBlack md:max-w-lg md:text-[80px]/[80px] md:-tracking-[1.11px]'>
				Make remote work
			</h1>
			<p className='max-w-sm font-medium text-mediumGray md:max-w-lg md:text-lg'>
				Get your team in sync, no matter your location. Streamline processes,
				create team rituals, and watch productivity soar.
			</p>
			<Link
				href={'#'}
				className='mt-2 w-fit cursor-pointer rounded-2xl border bg-offBlack px-6 py-3 text-center font-bold -tracking-[0.2px] text-offWhite hover:border-offBlack hover:bg-offWhite hover:text-offBlack md:px-8 md:py-4 md:text-lg'>
				Learn more
			</Link>
		</div>
	)
}
export default Content
