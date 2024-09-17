import { FC } from 'react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
	return (
		<div className='flex flex-col content-center justify-center items-center w-full mt-6 mb-6'>
			<HoverBorderGradient>
				<a href='mailto:danieldavies300@gmail.com'>
					<button className='text-white'>
						Let's Get in Touch
						<FontAwesomeIcon icon={faLocationArrow} className='ml-2' />
					</button>
				</a>
			</HoverBorderGradient>
		</div>
	)
}

export default ContactForm
