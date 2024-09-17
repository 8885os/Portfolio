import { useRouter } from 'next/navigation'
import { IoArrowBack } from 'react-icons/io5'

const BackButton = () => {
	const router = useRouter()
	return (
		<div
			className='relative md:left-40 bg-transparent flex p-2 md:p-5 float-left w-3p items-center content-center'
			onClick={() => router.back()}>
			<button className='w-full h-full bg-neutral-800 bg-opacity-40 rounded-full p-1'>
				<IoArrowBack className='text-3xl rounded-full p-1 float-left' />
			</button>
		</div>
	)
}

export default BackButton
