import React from 'react'
import { ContactHeader } from '../../components'

const Contact = () => {
  return (
		<main className='contact-page'>
			<ContactHeader />
			<div className='container'>
				<iframe
        className='mb-24 lsm:mb-6'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21361.29669424907!2d69.24134900964816!3d41.30547884172001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b0cc379e9c3%3A0xa5a9323b4aa5cb98!2sTashkent%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1669097544460!5m2!1sen!2s'
					width='100%'
					height='409'
					loading='lazy'
				></iframe>
			</div>
		</main>
	)
}

export default Contact