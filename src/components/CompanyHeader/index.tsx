import React from 'react'
import './index.scss'

const CompanyHeader = () => {
	return (
		<header className="company-header">
			<div className="container relative">
                <img className='shape-img' src={require("../../assets/images/btn-shape.png")} alt="" />
				<div className="orange-box"></div>
				<h2 className="section-title">Award-winning Company seen and used by millions around the world.</h2>
				<p className="company-header-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. </p>
			</div>
            <div className='container company-header-gallery'>
                <img src={require(("../../assets/images/home-about/1.jpg"))} alt="" />
                <img src={require(("../../assets/images/home-about/2.jpg"))} alt="" />
                <img src={require(("../../assets/images/home-about/3.jpg"))} alt="" />
            </div>
		</header>
	)
}

export default CompanyHeader
