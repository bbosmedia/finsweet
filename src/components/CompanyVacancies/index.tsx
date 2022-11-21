import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { dataVacancies } from './data.vacancies'
import './index.scss'

const CompanyVacancies = () => {
	return (
		<section className='company-vacancies'>
			<div className='container'>
				<div className='company-vacancies-inner'>
					{dataVacancies.map((item, index) => (
						<div key={index} className='card bg-white p-12 sm:p-4'>
							<h5 className='vacancy-name'>{item.name}</h5>
							<p className='vacancy-time'>{item.time}</p>
							<p className='vacancy-salary'>{item.salary}</p>
							<Link className='vacancy-link' to={item.link}>
								<span>Apply Now</span> <BsArrowRight />
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default CompanyVacancies
