import Companies from './Companies'
import Content from './Content'

const Hero = () => {
	return (
		<div className='flex flex-col gap-12 p-4 text-center md:gap-28 md:text-left'>
			<Content />
			<Companies />
		</div>
	)
}
export default Hero
