import React, { Dispatch } from 'react'
import { projects } from '../Data'
import Image from 'next/image'
import '../index.css'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'
import BackButton from './BackButton'
import { AnimatedTooltip } from './ui/animated-tooltip'
import Stack from './Stack'
type ProjectPageProps = {
	title: string
	dispatch: Dispatch<{ type: string; title: string }>
}

const ProjectPage = ({ title, dispatch }: ProjectPageProps) => {
	return projects
		.filter((p) => p.title === title)
		.map((project) => (
			<div className='flex flex-col p-10'>
				<div className='flex w-full content-center justify-center items-center'>
					<BackButton dispatch={dispatch} />
					<div className='flex flex-col justify-center items-center text-center w-full mb-8'>
						<h1 className='md:text-4xl text-lg inline text-cyan-400 font-light'>
							{project.title}
						</h1>
						<h3 className='md:text-2xl text-3xl'>{project.subtitle}</h3>
					</div>
				</div>
				<div className='flex flex-col justify-center items-center'>
					<div className='flex flex-col ml-4 justify-center items-center border-2 rounded-3xl p-8 w-10/12'>
						<div className='flex gap-16'>
							<div className='flex flex-col mt-4 w-5/12 gap-8'>
								<p className='mt-4 text-left'>{project.description}</p>
								<div className='flex gap-3 flex-nowrap text-nowrap'>
									<p>Deployed At:</p>
									<a target='_blank' href={project.link}>
										{project.link}
									</a>
								</div>
							</div>
							<Stack project={project} />
						</div>

						<div className='flex justify-center gap-16 items-center mt-8 w-full'>
							<div className='flex flex-col gap-8'>
								<Image
									src={
										project.images &&
										'mobile' in project.images &&
										project.images.mobile[0]
									}
									alt={project.title}
									className='w-52'
								/>
							</div>
							<div className='w-7/12'>
								<Carousel>
									<CarouselContent>
										{project.images &&
											'desktop' in project.images &&
											project.images.desktop.map((image) => (
												<>
													{() => console.log(image)}
													<CarouselItem className='flex justify-center items-center'>
														<Image
															src={image}
															alt={project.title}
															className='w-11/12'
														/>
													</CarouselItem>
												</>
											))}
									</CarouselContent>
									<CarouselPrevious />
									<CarouselNext />
								</Carousel>
							</div>
						</div>
					</div>
				</div>
			</div>
		))
}

export default ProjectPage
