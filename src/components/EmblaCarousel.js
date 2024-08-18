import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import '../styles/embla.css'
import SkillCard from './SkillCard'

const TWEEN_FACTOR_BASE = 0.95
const EmblaCarousel = (props) => {
	const { slides, options } = props
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [
		AutoScroll({ playOnInit: true }),
	])
	const tweenFactor = useRef(0)

	const numberWithinRange = (number, min, max) =>
		Math.min(Math.max(number, min), max)

	const setTweenFactor = useCallback((emblaApi) => {
		tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
	}, [])

	const handleMouseUp = () => {
		emblaApi?.scrollNext()
		emblaApi?.reInit()
	}
	const tweenOpacity = useCallback((emblaApi, eventName) => {
		const engine = emblaApi.internalEngine()
		const scrollProgress = emblaApi.scrollProgress()
		const slidesInView = emblaApi.slidesInView()
		const isScrollEvent = eventName === 'scroll'

		emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
			let diffToTarget = scrollSnap - scrollProgress
			const slidesInSnap = engine.slideRegistry[snapIndex]

			slidesInSnap.forEach((slideIndex) => {
				if (isScrollEvent && !slidesInView.includes(slideIndex)) return

				if (engine.options.loop) {
					engine.slideLooper.loopPoints.forEach((loopItem) => {
						const target = loopItem.target()

						if (slideIndex === loopItem.index && target !== 0) {
							const sign = Math.sign(target)

							if (sign === -1) {
								diffToTarget = scrollSnap - (1 + scrollProgress)
							}
							if (sign === 1) {
								diffToTarget = scrollSnap + (1 - scrollProgress)
							}
						}
					})
				}

				const tweenValue = 2 - Math.abs(diffToTarget * tweenFactor.current)
				const opacity = numberWithinRange(tweenValue, 0, 1).toString()
				emblaApi.slideNodes()[slideIndex].style.opacity = opacity
			})
		})
	}, [])

	useEffect(() => {
		if (!emblaApi) return
		const autoScroll = emblaApi.plugins()?.autoScroll
		if (!autoScroll) return

		setTweenFactor(emblaApi)
		tweenOpacity(emblaApi)
		emblaApi
			.on('reInit', setTweenFactor)
			.on('reInit', tweenOpacity)
			.on('scroll', tweenOpacity)
			.on('slideFocus', tweenOpacity)
	}, [emblaApi, setTweenFactor, tweenOpacity])

	return (
		<div className='embla'>
			<div className='embla__viewport' ref={emblaRef} onMouseUp={handleMouseUp}>
				<div className='embla__container'>
					{slides.map((skill, index) => (
						<div className='embla__slide' key={index}>
							<SkillCard key={skill.id} icon={skill.logo} />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default EmblaCarousel
