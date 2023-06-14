import IllustrationImage from '@/components/IllustrationImage'
import Hero from '@/components/Hero'

export default function Home() {
	return (
		<main className='md:px-40 md:py-11'>
			<section className='flex flex-col items-center gap-12 md:flex-row md:justify-center md:gap-32'>
				<IllustrationImage />
				<Hero />
			</section>
		</main>
	)
}
