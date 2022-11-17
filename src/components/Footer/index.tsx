import React from 'react'
import { BsArrowRight, BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { siteMainLinks, siteResourcesLinks, siteServiceLinks } from './footer.data'
import './index.scss'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container footer-main">
				<img src={require('../../assets/images/btn-shape.png')} alt="" />
				<div className="footer-main-left">
					<h3 className="heading">Let's make something special</h3>
					<h5 className="subheading">Let's talk! 🤙 </h5>
					<div className="links">
						<a href="tel:02079932905">020 7993 2905</a>
						<a href="mailto:hi@finsweet.com">hi@finsweet.com</a>
					</div>
					<div className="line"></div>
					<p className="address">DLF Cybercity, Bhubaneswar, India, &52050</p>
				</div>
				<div className="footer-main-right">
					<div className="footer-main-links">
						<ul className="site-links">
							{siteMainLinks.map((link) => (
								<li key={link}>
									<Link className="bold" to={'/' + link.toLowerCase()}>
										{link}
									</Link>
								</li>
							))}
						</ul>
						<div>
							<h6 className="bold mb-3">Serice</h6>
							<ul className="site-links">
								{siteServiceLinks.map((link) => (
									<li key={link}>
										<Link to="/">{link}</Link>
									</li>
								))}
							</ul>
						</div>
						<div>
							<h6 className="bold mb-3">Resourses</h6>
							<ul className="site-links">
								{siteResourcesLinks.map((link) => (
									<li key={link}>
										<Link to="/">{link}</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
					<Link className='contact-link' to="/contact">
						<div className="colored-box"></div>
						<span>Contact Us</span>
						<BsArrowRight />
					</Link>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container">
					<div className="footer-bottom-right">
						<Link to="/">
							<img src={require('../../assets/images/Logo-black.png')} alt="" />
						</Link>
						<p>&copy; {new Date().getFullYear()} Finsweet</p>
					</div>
					<div className="socials">
						<a href="facebook.com">
							<BsFacebook />
						</a>
						<a href="facebook.com">
							<BsTwitter />
						</a>
						<a href="facebook.com">
							<BsInstagram />
						</a>
						<a href="facebook.com">
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
