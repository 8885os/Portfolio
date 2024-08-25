import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	SiTypescript,
	SiRedux,
	SiTailwindcss,
	SiMongodb,
	SiExpress,
	SiNodedotjs,
	SiHeroku,
	SiFirebase,
	SiSentry,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import { faGithub, faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import MemoryProject from './images/memories.png'
import NetflixCloneProject from './images/netflixclone.png'
import FacebookCloneProject from './images/facebookclone.png'
import ChatAppProject from './images/chatapp.png'
import Horizon from './images/horizon.png'
import python from './images/python.png'
export const sections = [
	{
		id: nanoid(),
		title: 'About Me',
	},
	{
		id: nanoid(),
		title: 'Skills',
	},
	{
		id: nanoid(),
		title: 'Projects',
	},
]

export const skills = [
	{
		id: nanoid(),
		title: 'HTML',
		logo: (
			<FontAwesomeIcon
				icon={faHtml5}
				className='h-16 w-16 md:h-36 md:w-36 text-red-500'
			/>
		),
	},
	{
		id: nanoid(),
		title: 'CSS',
		logo: (
			<FontAwesomeIcon
				icon={faCss3}
				className='h-16 w-16 md:h-36 md:w-36 text-blue-500'
			/>
		),
	},
	{
		id: nanoid(),
		title: 'Javascript',
		logo: (
			<FontAwesomeIcon
				icon={faJs}
				className='h-16 w-16 md:h-36 md:w-36 text-yellow-300'
			/>
		),
	},
	{
		id: nanoid(),
		title: 'React',
		logo: (
			<FontAwesomeIcon
				icon={faReact}
				className='h-16 w-16  md:h-36 md:w-36 text-sky-400'
			/>
		),
	},
	{
		id: nanoid(),
		title: 'Github',
		logo: (
			<FontAwesomeIcon
				icon={faGithub}
				className='h-16 w-16 md:h-36 sm:h-26 sm:w-26 md:w-36 text-neutral-300'
			/>
		),
	},
	{
		id: nanoid(),
		title: 'Typescript',
		logo: (
			<SiTypescript className='h-16 w-16 sm:h-26 sm:w-26 md:h-32 md:w-32 text-blue-500' />
		),
	},
	{
		id: nanoid(),
		title: 'Next.js',
		logo: (
			<TbBrandNextjs className='h-16 w-16 sm:h-26 sm:w-26 md:h-36 md:w-36 text-neutral-300' />
		),
	},
	{
		id: nanoid(),
		title: 'Redux',
		logo: (
			<SiRedux className='h-16 w-16 sm:h-26 sm:w-26 md:h-36 md:w-36 text-purple-500' />
		),
	},
	{
		id: nanoid(),
		title: 'Tailwind',
		logo: (
			<SiTailwindcss className='h-16 w-16 sm:h-26 sm:w-26 md:h-36 md:w-36 text-sky-500' />
		),
	},
	{
		id: nanoid(),
		title: 'Python',
		logo: python,
	},
]

export const projects = [
	{
		id: nanoid(),
		title: 'Horizon Banking',
		src: Horizon,
		link: 'https://horizon-banking-two.vercel.app/sign-in',
		github: 'https://github.com/8885os/Horizon-Banking',
		stack: {
			Typescript: (
				<SiTypescript className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-blue-500'></SiTypescript>
			),
			'Next.js': (
				<TbBrandNextjs className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-neutral-300'></TbBrandNextjs>
			),
			React: (
				<FontAwesomeIcon
					icon={faReact}
					className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></FontAwesomeIcon>
			),
			Tailwind: (
				<SiTailwindcss className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-500'></SiTailwindcss>
			),
			Sentry: (
				<SiSentry className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-neutral-300'></SiSentry>
			),
		},
	},
	{
		id: nanoid(),
		title: 'Chat App',
		src: ChatAppProject,
		link: '',
		github: 'https://github.com/8885os/Memories-App-MERN',
		stack: {
			Typescript: (
				<SiTypescript className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-blue-500'></SiTypescript>
			),
			'Next.js': (
				<TbBrandNextjs className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-neutral-300'></TbBrandNextjs>
			),
			React: (
				<FontAwesomeIcon
					icon={faReact}
					className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></FontAwesomeIcon>
			),
			Tailwind: (
				<SiTailwindcss className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-500'></SiTailwindcss>
			),
		},
	},
	{
		id: nanoid(),
		title: 'Memory Project',
		src: MemoryProject,
		link: '',
		github: 'https://github.com/8885os/Memories-App-MERN',
		stack: {
			MongoDB: (
				<SiMongodb className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-green-500'></SiMongodb>
			),
			Express: (
				<SiExpress className='text-black h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 p-1p bg-white'></SiExpress>
			),
			React: (
				<FontAwesomeIcon
					icon={faReact}
					className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></FontAwesomeIcon>
			),
			Nodejs: (
				<SiNodedotjs className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-green-500'></SiNodedotjs>
			),
			Heroku: (
				<SiHeroku className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-purple-500'></SiHeroku>
			),
		},
	},
	{
		id: nanoid(),
		title: 'Netflix Clone',
		src: NetflixCloneProject,
		link: 'https://netflix-clone-61df7.firebaseapp.com/',
		github: 'https://github.com/8885os/NetflixClone',
		stack: {
			React: (
				<FontAwesomeIcon
					icon={faReact}
					className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></FontAwesomeIcon>
			),
			Firebase: (
				<SiFirebase className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-yellow-500'></SiFirebase>
			),
		},
	},
	{
		id: nanoid(),
		title: 'Facebook Clone',
		src: FacebookCloneProject,
		link: '',
		github: 'https://github.com/8885os/fb-clone',
		stack: {
			React: (
				<FontAwesomeIcon
					icon={faReact}
					className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></FontAwesomeIcon>
			),
			Firebase: (
				<SiFirebase className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-yellow-500'></SiFirebase>
			),
		},
	},
]
