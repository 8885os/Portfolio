// @ts-ignore
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
	SiAppwrite,
	SiReact,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiGithub,
} from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'
import MemoryProject from '../public/memoriesapp/memories.png'
import NetflixCloneProject from '../public/netflix/netflixclone.png'
import FacebookCloneProject from '../public/facebookapp/facebookclone.png'
import ChatAppProject from '../public/chatapp/chatapp.png'
import Horizon from '../public/bank/horizon.png'
import python from '../public/python.png'
import plaid from '../public/bank/plaidbank.png'
import historybank from '../public/bank/historybank.png'
import transferbank from '../public/bank/transferbank.png'
import accounts from '../public/bank/accounts.png'
import mobilebank from '../public/bank/mobilebank.png'
import mobilechat from '../public/chatapp/mobilechatapp.gif'
import addedchat from '../public/chatapp/addedchat.png'
import mainchat from '../public/chatapp/mainchat.png'
import pendingchat from '../public/chatapp/pendingchat.png'
import recentchat from '../public/chatapp/recentchat.png'
import mobilememory from '../public/memoriesapp/mobilememory.gif'
import facebookclone from '../public/facebookapp/facebookclone.png'
import mobilefb from '../public/facebookapp/mobilefb.gif'
import mobilenetflix from '../public/netflix/mobilenetflix.gif'
import netflixhome from '../public/netflix/home.jpg'
import netflixmain from '../public/netflix/main.png'
import netflixsearch from '../public/netflix/search.png'
import netflixtv from '../public/netflix/tv.png'
import netflixsignin from '../public/netflix/signin.png'
import netflixmovie from '../public/netflix/movie.png'
import admin from '../public/healthcare/admin.png'
import appointment from '../public/healthcare/appointment.png'
import home from '../public/healthcare/home.png'
import success from '../public/healthcare/success.png'
import register1 from '../public/healthcare/register1.png'
import register2 from '../public/healthcare/register2.png'
import mobilehealth from '../public/healthcare/mobilehealth.gif'

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
		logo: <SiHtml5 className='h-16 w-16 md:h-36 md:w-36 text-red-500' />,
	},
	{
		id: nanoid(),
		title: 'CSS',
		logo: <SiCss3 className='h-16 w-16 md:h-36 md:w-36 text-blue-500' />,
	},
	{
		id: nanoid(),
		title: 'Javascript',
		logo: (
			<SiJavascript className='h-16 w-16 md:h-36 md:w-36 text-yellow-300' />
		),
	},
	{
		id: nanoid(),
		title: 'React',
		logo: (
			<SiReact className='h-16 w-16 sm:h-26 sm:w-26 md:h-32 md:w-32 text-sky-400' />
		),
	},
	{
		id: nanoid(),
		title: 'Github',
		logo: (
			<SiGithub className='h-16 w-16 md:h-36 sm:h-26 sm:w-26 md:w-36 text-neutral-300' />
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
			<SiRedux className='h-16 w-16 sm:h-26 sm:w-26 md:h-32 md:w-32 text-purple-500' />
		),
	},
	{
		id: nanoid(),
		title: 'Tailwind',
		logo: (
			<SiTailwindcss className='h-16 w-16 sm:h-26 sm:w-26 md:h-32 md:w-32 text-blue-500' />
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
		title: 'HorizonBanking',
		src: Horizon,
		link: 'https://horizon-banking-two.vercel.app/sign-in',
		github: 'https://github.com/8885os/Horizon-Banking',
		stack: [
			{
				Typescript: (
					<SiTypescript className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-blue-500'></SiTypescript>
				),
				Nextjs: (
					<TbBrandNextjs className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-neutral-300'></TbBrandNextjs>
				),
				React: (
					<SiReact className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></SiReact>
				),
				Tailwind: (
					<SiTailwindcss className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-500'></SiTailwindcss>
				),
				Appwrite: (
					<SiAppwrite className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-[#DB1A5A]'></SiAppwrite>
				),
			},
			{
				Typescript: (
					<SiTypescript className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-blue-500'></SiTypescript>
				),
				Nextjs: (
					<TbBrandNextjs className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-neutral-300'></TbBrandNextjs>
				),
				React: (
					<SiReact className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-400'></SiReact>
				),
				Tailwind: (
					<SiTailwindcss className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-500'></SiTailwindcss>
				),
				Appwrite: (
					<SiAppwrite className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-[#DB1A5A]'></SiAppwrite>
				),
			},
		],
		subtitle: 'Financial Management App',
		description: [
			`Developed with Typescript, NextJs, React,  Shadcn, Plaid, Tailwind. It is able to connect to a real bank and display realtime data about transaction history, balance and can also handle transactions between banks.`,
		],
		features: [
			'Fully Responsive UI',
			'User Authentication',
			'Connect bank accounts with Plaid',
			'Realtime transaction history & Balance',
			'Connect multiple banks',
			'Handle Transactions between users',
		],
		images: {
			mobile: [mobilebank],
			desktop: [Horizon, accounts, historybank, transferbank, plaid],
		},
	},
	{
		id: nanoid(),
		title: 'ChatApp',
		src: ChatAppProject,
		link: 'https://realtime-chatapp-lemon.vercel.app/',
		github: 'https://github.com/8885os/Realtime-Chatapp',
		stack: [
			{
				Typescript: (
					<SiTypescript className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-blue-500'></SiTypescript>
				),
				Nextjs: (
					<TbBrandNextjs className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-neutral-300'></TbBrandNextjs>
				),
				React: (
					<SiReact className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></SiReact>
				),
				Tailwind: (
					<SiTailwindcss className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-500'></SiTailwindcss>
				),
			},
			{
				Typescript: (
					<SiTypescript className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-blue-500'></SiTypescript>
				),
				Nextjs: (
					<TbBrandNextjs className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-neutral-300'></TbBrandNextjs>
				),
				React: (
					<SiReact className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-400'></SiReact>
				),
				Tailwind: (
					<SiTailwindcss className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-500'></SiTailwindcss>
				),
			},
		],
		description: [
			`Developed with Typescript, NextJs, React, Tailwind. It is a realtime chat app where users can chat with each other. It has google authentication, protection of sensitive routes, preformant database queries with Redis.`,
		],
		subtitle: 'Realtime Chat App',
		features: [
			'Fully Responsive UI',
			'User Authentication',
			'Realtime chat between users',
			'Add other platform users as friends',
		],
		images: {
			mobile: [mobilechat],
			desktop: [mainchat, recentchat, addedchat, pendingchat],
		},
	},
	{
		id: nanoid(),
		title: 'Carepulse',
		src: admin,
		link: 'https://healthcare-app-omega.vercel.app/',
		github: 'https://github.com/8885os/Healthcare-App',
		stack: [
			{
				Typescript: (
					<SiTypescript className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-blue-500'></SiTypescript>
				),
				Nextjs: (
					<TbBrandNextjs className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-neutral-300'></TbBrandNextjs>
				),
				React: (
					<SiReact className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></SiReact>
				),
				Tailwind: (
					<SiTailwindcss className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-500'></SiTailwindcss>
				),
				Appwrite: (
					<SiAppwrite className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-[#DB1A5A]'></SiAppwrite>
				),
			},
			{
				Typescript: (
					<SiTypescript className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-blue-500'></SiTypescript>
				),
				Nextjs: (
					<TbBrandNextjs className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-neutral-300'></TbBrandNextjs>
				),
				React: (
					<SiReact className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-400'></SiReact>
				),
				Tailwind: (
					<SiTailwindcss className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-500'></SiTailwindcss>
				),
				Appwrite: (
					<SiAppwrite className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-[#DB1A5A]'></SiAppwrite>
				),
			},
		],
		subtitle: 'Healthcare Management System',
		description: [
			`Developed with Typescript, NextJs, React,  Shadcn, Tailwind, Sentry.`,
			`Carepulse is a Healthcare Management System which is designed to streamline and tackle the tedious checkup process.`,
			`Complete authentication - Once authorised, users can easily create an appointment request with their preferred doctor.`,
			`Upon a successful request, users are directed to a confirmation page.`,
			`Any requests can be viewed by Admins in the admin dashboard to be scheduled or cancelled.`,
		],
		features: [
			'Fully Responsive UI',
			'User Authentication',
			'Connect bank accounts with Plaid',
			'Realtime transaction history & Balance',
			'Connect multiple banks',
			'Handle Transactions between users',
		],
		images: {
			mobile: [mobilehealth],
			desktop: [admin, home, register1, register2, appointment, success],
		},
	},
	{
		id: nanoid(),
		title: 'NetflixClone',
		src: NetflixCloneProject,
		link: 'https://netflix-clone-61df7.firebaseapp.com/',
		github: 'https://github.com/8885os/NetflixClone',
		stack: [
			{
				React: (
					<SiReact className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></SiReact>
				),
				Firebase: (
					<SiFirebase className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-yellow-500'></SiFirebase>
				),
			},
			{
				React: (
					<SiReact className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-400'></SiReact>
				),
				Firebase: (
					<SiFirebase className='h-4 w-4 md:h-6 md:w-6 lg:h-12 lg:w-12 text-yellow-500'></SiFirebase>
				),
			},
		],
		description: [
			`Developed with React and Firebase Authentication. It is a recreation of Netflix which allows users to search for movies or shows, displays featured movies, select movies or shows to watch and display ratings, description and cast. `,
		],
		subtitle: 'Recreation of Netflix',
		features: [
			'Fully Responsive UI',
			'User Authentication',
			'Connect bank accounts with Plaid',
			'Realtime transaction history & Balance',
			'Connect multiple banks',
			'Handle Transactions between users',
		],
		images: {
			mobile: [mobilenetflix],
			desktop: [
				netflixmain,
				netflixsignin,
				netflixhome,
				netflixsearch,
				netflixmovie,
				netflixtv,
			],
		},
	},
	{
		id: nanoid(),
		title: 'MemoryProject',
		src: MemoryProject,
		link: '',
		github: 'https://github.com/8885os/Memories-App-MERN',
		stack: [
			{
				Mongodb: (
					<SiMongodb className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-green-500'></SiMongodb>
				),
				Express: (
					<SiExpress className='text-black h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 p-1p bg-white'></SiExpress>
				),
				React: (
					<SiReact className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></SiReact>
				),
				Nodejs: (
					<SiNodedotjs className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-green-500'></SiNodedotjs>
				),
				Heroku: (
					<SiHeroku className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-purple-500'></SiHeroku>
				),
			},
			{
				Mongodb: (
					<SiMongodb className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-green-500'></SiMongodb>
				),
				Express: (
					<SiExpress className='text-black h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 p-1p bg-white'></SiExpress>
				),
				React: (
					<SiReact className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-400'></SiReact>
				),
				Nodejs: (
					<SiNodedotjs className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-green-500'></SiNodedotjs>
				),
				Heroku: (
					<SiHeroku className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-purple-500'></SiHeroku>
				),
			},
		],
		description: [
			`Developed with MongoDB, Express, React, Nodejs. It is a social media app which allows users to create posts like messages and share photos. `,
		],
		subtitle: 'Social Media App',
		features: [
			'Fully Responsive UI',
			'User Authentication',
			'Connect bank accounts with Plaid',
			'Realtime transaction history & Balance',
			'Connect multiple banks',
			'Handle Transactions between users',
		],
		images: { mobile: [mobilememory], desktop: [MemoryProject] },
	},
	{
		id: nanoid(),
		title: 'FacebookClone',
		src: FacebookCloneProject,
		link: '',
		github: 'https://github.com/8885os/fb-clone',
		stack: [
			{
				React: (
					<SiReact className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-sky-400'></SiReact>
				),
				Firebase: (
					<SiFirebase className='h-4 w-4 sm:h-4 sm:w-4 md:h-4 md:w-4 text-yellow-500'></SiFirebase>
				),
			},
			{
				React: (
					<SiReact className='h-4 w-4  md:h-6 md:w-6 lg:h-12 lg:w-12 text-sky-400'></SiReact>
				),
				Firebase: (
					<SiFirebase className='h-4 w-4 md:h-6 md:w-6 lg:h-12 lg:w-12 text-yellow-500'></SiFirebase>
				),
			},
		],
		description: [
			`Developed with React and Firebase. It is a recreation of facebook where users can create posts and share photos.`,
		],
		subtitle: 'Recreation of Facebook',
		features: [
			'Fully Responsive UI',
			'User Authentication',
			'Connect bank accounts with Plaid',
			'Realtime transaction history & Balance',
			'Connect multiple banks',
			'Handle Transactions between users',
		],
		images: { mobile: [mobilefb], desktop: [facebookclone] },
	},
]
