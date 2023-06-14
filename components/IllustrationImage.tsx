import Image from 'next/image'
import Desktop from '@/public/images/image-hero-desktop.png'
import Mobile from '@/public/images/image-hero-mobile.png'

const IllustrationImage = () => {
	return (
		<div className='md:order-1'>
			<Image
				src={Mobile}
				alt=''
				className='block w-auto object-contain md:hidden'
			/>
			<Image
				src={Desktop}
				alt=''
				className='hidden w-auto object-contain md:block'
			/>
		</div>
	)
}
export default IllustrationImage
