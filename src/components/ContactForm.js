import { useRef, useState } from 'react'
import Title from './Title'
import { motion } from 'framer-motion'
import { z } from 'zod'
import emailjs from '@emailjs/browser'
const SERVICE_ID = 'service_ey0fdr4'
const TEMPLATE_ID = 'template_khlui2l'
const PUBLIC_KEY = 'UMdgiyIZxPQJ8oN32'
export default function ContactForm({ contactRef }) {
	const form = useRef()
	const emailRef = useRef()
	const nameRef = useRef()
	const subjectRef = useRef()
	const messageRef = useRef()

	const [success, setSuccess] = useState(null)
	const [error, setError] = useState(null)
	function handleSubmit(e) {
		e.preventDefault()
		const classNames = ['outline-red-500', 'border-red-500', 'border-2']
		const refs = [nameRef, emailRef, subjectRef, messageRef]
		refs.forEach((ref) => {
			classNames.forEach((className) => {
				ref.current.classList.remove(className)
			})
		})
		var formDetails = z.object({
			name: z.string().min(1),
			email: z.string().email(),
			subject: z.string().min(1),
			message: z.string().min(1),
		})
		console.log(form.current)
		try {
			const formData = new FormData(form.current)
			const data = Object.fromEntries(formData.entries())
			formDetails.parse(data)
			setError(null)
			setSuccess('Email sent successfully!')
		} catch (error) {
			if (error instanceof z.ZodError) {
				let count = 0
				error.issues.forEach((issue) => {
					switch (issue.path[0]) {
						case 'name':
							setSuccess(null)
							setError('Please enter your name')
							nameRef.current.classList.add(
								'outline-red-500',
								'border-red-500',
								'border-2'
							)
							count++
							break
						case 'email':
							setSuccess(null)
							setError('Please enter a valid email')
							emailRef.current.classList.add(
								'outline-red-500',
								'border-red-500',
								'border-2'
							)
							break
						case 'subject':
							setSuccess(null)
							setError('Please enter a subject')
							subjectRef.current.classList.add(
								'outline-red-500',
								'border-red-500',
								'border-2'
							)
							count++
							break
						case 'message':
							setSuccess(null)
							setError('Please enter a message')
							messageRef.current.classList.add(
								'outline-red-500',
								'border-red-500',
								'border-2'
							)
							count++
							console.log(count)

							break
						case count > 1:
							setSuccess(null)
							setError('Please fill in all the required fields')
							break
						default:
							setSuccess(null)
							setError(
								'Please fill in all the required fields: Name, Email, Subject, Message'
							)
							break
					}
				})
				return
			}
		}

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY, {
				name: form.current.name.value,
				email: form.current.email.value,
				subject: form.current.subject.value,
				message: form.current.message.value,
			})
			.then(
				(result) => {
					console.log(result.text)
				},
				(error) => {
					console.log(error.text)
				}
			)

		form.current.reset()
	}

	return (
		<div ref={contactRef} className='mt-4'>
			<Title text={'Contact Me'} />
			<div className='p-4 mx-auto max-w-xl '>
				<form
					className='mt-8 space-y-4 flex flex-col w-full justify-center'
					encType='text/plain'
					onSubmit={(e) => handleSubmit(e)}
					ref={form}>
					<input
						name='name'
						type='text'
						id='name'
						placeholder='Name'
						className='w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm border-2 outline-blue-500'
						ref={nameRef}
					/>
					<input
						name='email'
						type='email'
						placeholder='Email'
						id='email'
						ref={emailRef}
						className='w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm border-2 outline-blue-500'
					/>
					<input
						name='subject'
						type='text'
						placeholder='Subject'
						id='subject'
						className='w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 text-sm border-2 outline-blue-500'
						ref={subjectRef}
					/>
					<textarea
						name='message'
						placeholder='Message'
						id='message'
						className='w-full rounded-md px-4 text-gray-800 bg-gray-100 text-sm pt-3 border-2 outline-blue-500 resize-none'
						ref={messageRef}
					/>
					<div className='flex justify-center gap-8 items-center'>
						<motion.button
							className='px-6 py-2 rounded-md relative h-fit w-fit bg-neutral-800'
							initial={{ '--x': '100%', scale: 0.9 }}
							animate={{ '--x': '-200%' }}
							whileHover={{ scale: 1 }}
							transition={{
								repeat: Infinity,
								repeatType: 'loop',
								repeatDelay: 1,
								type: 'spring',
								stiffness: 20,
								damping: 15,
								mass: 2,
								scale: {
									type: 'spring',
									stiffness: 10,
									damping: 5,
									mass: 0.1,
								},
							}}>
							<span className='text-neutral-100 tracking-wide font-light h-full w-full block relative active:no-underline active:text-neutral-100 text-button'>
								Submit
							</span>
							<span className='block absolute inset-0 rounded-md p-px linear-overlay-2' />
						</motion.button>
						{error && <p className='text-red-500'>{error}</p>}
						{success && <p className='text-green-500'>{success}</p>}
					</div>
				</form>
			</div>
		</div>
	)
}
