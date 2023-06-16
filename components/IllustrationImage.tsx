import Image from 'next/image'

const IllustrationImage = () => {
	return (
		<div className='md:order-1'>
			<Image
				src={'/images/image-hero-mobile.png'}
				height={282}
				width={375}
				alt=''
				priority
				className='block md:hidden'
			/>
			<Image
				src={'/images/image-hero-desktop.png'}
				height={640}
				width={480}
				alt=''
				priority
				className='hidden md:block'
			/>
		</div>
	)
}
export default IllustrationImage
