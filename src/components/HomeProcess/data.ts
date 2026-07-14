import HomeProcess1 from '../../assets/images/home-process/1.png'
import HomeProcess2 from '../../assets/images/home-process/2.png'
import HomeProcess3 from '../../assets/images/home-process/3.png'
import HomeProcess4 from '../../assets/images/home-process/4.png'
import HomeProcess5 from '../../assets/images/home-process/5.png'
import HomeProcess6 from '../../assets/images/home-process/6.png'

interface ICard {
	order: number
	img: string
	title: string
	text: string
}

export const processdata: ICard[] = [
	{
		order: 1,
		img: HomeProcess1,
		title: 'Discover',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 2,
		img: HomeProcess2,
		title: 'Designing',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 3,
		img: HomeProcess3,
		title: 'Development',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 4,
		img: HomeProcess4,
		title: 'Testing',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 5,
		img: HomeProcess5,
		title: 'Deployment',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
	{
		order: 6,
		img: HomeProcess6,
		title: 'Maintenance',
		text: 'We aim to attain the greatest satisfaction for our clients and be one of the prominent.',
	},
]
