import { companies } from '@/data'
import Image from 'next/image'

const Companies = () => {
	return (
		<div className='flex flex-wrap justify-center gap-7 self-center md:self-start'>
			{companies.map((company) => (
				<Image
					key={company.name}
					src={company.icon}
					alt={company.name}
					className='w-auto object-contain'
				/>
			))}
		</div>
	)
}
export default Companies
