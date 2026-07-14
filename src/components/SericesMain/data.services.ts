import Services1 from '../../assets/images/services/1.png'
import Services2 from '../../assets/images/services/2.png'
import Services3 from '../../assets/images/services/3.png'
import Services4 from '../../assets/images/services/4.png'
import Services5 from '../../assets/images/services/5.png'

export interface IServicesData{
    name: string
    title: string
    text: string
    img: string
    color: string
}

export const serviceData:IServicesData[] = [
    {
        name: 'Technical Support',
        title: 'Best in class tech support for your company. We become your tech backbone ',
        text: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
        img: Services1,
        color: '#fff'
    },
    {
        name: 'Developoment',
        title: 'Bring your ideas to reality with certified team of developers, working with latest technologies ',
        text: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
        img: Services2,
        color: '#ECF8F9'
    },
    {
        name: 'AWS/Azure',
        title: 'We help you deploy, manage and secure your application on leading web services',
        text: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
        img: Services3,
        color: '#fff'
    },
    {
        name: 'Consulting',
        title: 'Get advice from world class professionals ',
        text: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
        img: Services4,
        color: '#F9F9FF'
    },
    {
        name: 'Information Technology',
        title: 'We want to get local identification in every corner of the world in this era of global citizenship.',
        text: 'Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. Through True Rich Attended does no end it his mother since real had half every.',
        img: Services5,
        color: '#fff'
    },
]
