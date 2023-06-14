import Image from 'next/image'
import Audiophille from '@/public/images/client-audiophile.svg'
import Databiz from '@/public/images/client-databiz.svg'
import Maker from '@/public/images/client-maker.svg'
import Meet from '@/public/images/client-meet.svg'

const Companies = () => {
	return (
		<div className='flex flex-wrap justify-center gap-7 self-center md:self-start'>
			<Image src={Databiz} alt='' className='w-auto object-contain' />
			<Image src={Audiophille} alt='' className='w-auto object-contain' />
			<Image src={Meet} alt='' className='w-auto object-contain' />
			<Image src={Maker} alt='' className='w-auto object-contain' />
		</div>
	)
}
export default Companies
