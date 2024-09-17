export type EachProject = {
	id: string
	title: string
	src: string
	link: string
	github: string
	stack: any
	description?: string
	subtitle?: string
	features?: string[]
	images?: {
		mobile?: string[]
		desktop?: string[]
	}
}
