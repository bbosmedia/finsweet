interface ICard {
	order: number
	img: string
	title: string
	text: string
}

export const processdata: ICard[] = [
	{
		order: 1,
		img: require('../../assets/images/home-process/1.png'),
		title: 'Discover',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 2,
		img: require('../../assets/images/home-process/2.png'),
		title: 'Designing',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 3,
		img: require('../../assets/images/home-process/3.png'),
		title: 'Development',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 4,
		img: require('../../assets/images/home-process/4.png'),
		title: 'Testing',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 5,
		img: require('../../assets/images/home-process/5.png'),
		title: 'Deployment',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 6,
		img: require('../../assets/images/home-process/6.png'),
		title: 'Maintenance',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
]
