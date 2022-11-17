import React, { useState } from 'react'
import { Deatils, Requirements, Responsibilities } from './career.item.main.data'
import './index.scss'

const CareerItemMain = () => {
    const [active, setActive] = useState<string>('Details')
  return (
    <section className='career-item-main'>
        <div className="container">
            <div className="inner">
                <div className="heading">
                    <button className={active === 'Details' ? 'heading-btn active' : 'heading-btn'} onClick={()=>setActive('Details')}>Details</button>
                    <button className={active === 'Requirements' ? 'heading-btn active' : 'heading-btn'} onClick={()=>setActive('Requirements')}>Requirements</button>
                    <button className={active === 'Responsibilities' ? 'heading-btn active' : 'heading-btn'} onClick={()=>setActive('Responsibilities')}>Responsibilities</button>
                </div>
                <div className="body">
                    <ul>
                   {active === 'Details' && Deatils.map((item, index)=>(
                    <li key={index}>{item}</li>
                   ))}
                   {active === 'Requirements' && Requirements.map((item, index)=>(
                    <li key={index}>{item}</li>
                   ))}
                   {active === 'Responsibilities' && Responsibilities.map((item, index)=>(
                    <li key={index}>{item}</li>
                   ))}
                   </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CareerItemMain