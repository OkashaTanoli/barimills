import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import AboutBack from '../../images/aboutBack.jpg'
import './about.css'
import '../Main/main.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Image from '../../images/22.jpg'
import Footer from '../smallcomponents/footer'
import { Link } from "react-router-dom"
import '../smallcomponents/responsive.css'
import Image1 from '../../images/logo.png'
import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { IoIosMenu } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'



function About() {

    // const [openAbout, setOpenAbout] = useState(false)
    // const [openProduct, setOpenProduct] = useState(false)
    // const [openFacility, setOpenFacility] = useState(false)

    // const [openDrawer, setDrawer] = useState(false)
    // const [openSearch, setSearch] = useState(false)



    return (
        <div>

            {/* It is providing openPopUp === true . Lekin ye muje bhi nhi pata ke kyun de raha ha isi liya mane 
            Header me props ke zariya popup false kiya ha */}

            <Header />







            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}
            {/* Header End */}










            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '0', left: '0', backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%' }}></div>
                <img src={AboutBack} className='aboutBackGroungImage' />
                <div className='aboutBackGroungImageText'>
                    <div className='aboutBackGroungImageTextContainer'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to='/'>
                                <FaHome className='homeIcon' size='20' />
                            </Link>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div style={{ color: '#e6e6e6', fontSize: '17px', fontWeight: '700', fontFamily: 'okasha', marginTop: '-5px' }}>
                                ABOUT US
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className='aboutText'>About</div>
                            <div className='aboutUsText'>Us</div>
                        </div>
                        <div className='aboutUsLargeText'>
                            Bari	Mills	is	a	leading,	home	textile	company,	that	stands	with	a	cut	above	the	rest	in
                            Pakistan	as	well	as	internationally.		We	export	bath	products	to	leading	retailers,	hospitality
                            and	healthcare	industries	across	the	world,	primarily	to	the	USA,	Canada,	Australia,	and
                            Europe.
                        </div>
                    </div>
                </div>
            </div>
            <div className='formBeingASolitary'>
                <div className='formBeingASolitaryDivFirst'>
                    <div className='formBeingASolitaryDivFirstTextContainer'>
                        {/* <p className='formBeingText'>
                            “From	mediocre sewing	thread	manufacturer	an	d	yarn	trader	the	company	has	evolved	into
                            becoming	one	of	Pakistan’s	leading	home	textile	manufacturer.”
                        </p>
                        <p className='formBeingName'>Nabeel	Bari</p>
                        <p className='formBeingNameHead'>CEO	Bari	Mills.</p> */}
                    </div>
                </div>
                <div className='formBeingASolitarySecondDiv'>
                    <img className='formBeingASolitarySecondDivImage' src={Image} alt="" />
                </div>
            </div>

            <div style={{ height: '15px', width: '100%', backgroundColor: '#adadad' }}></div>

            <div className='ourVision'>
                <div className='ourVisionDivFirst'>
                    <div style={{ display: 'flex' }}>
                        <p className='ourVisionOur'>Our</p>
                        <p className='ourVisionVision'>Vision</p>
                    </div>
                    <p id='ourVisionText' style={{ color: 'gray', fontSize: '20px', marginTop: '-90px', width: '500px', paddingLeft: '20px' }}>To	provide	quality	products	that	exceed	the	expectations	of	our	esteemed	customers,	in
                        terms	of	value,	quality	and	service	as	well	as	fulfilling	our	responsibilities	towards	beingcorporate	citizens.</p>
                </div>
                <div className='ourVisionDivSecond'>
                    <div style={{ display: 'flex', alignSelf: 'left' }}>
                        <p className='ourVisionOur'>Our</p>
                        <p className='ourVisionVision'>Mission</p>
                    </div>
                    <p id='ourVisionText' style={{ color: 'gray', fontSize: '20px', marginTop: '-90px', width: '500px', paddingLeft: '20px' }}>
                        Our	endeavor	remains	continuous	to	adopt	to	customers’ requirements,
                        provide exceptional	customer	services	by	pursuing	business	through
                        innovation	and	advanced	technology	so	as	to	further	grow	our	business,
                        to	make	new	partners	– new	relationships.</p>
                </div>
            </div>

            {/* <div style={{ backgroundColor: 'rgb(248, 248, 248)' }}>
                <div className='ourPhilosophy'>
                    <div className='ourPhilosophyHead'>
                        <p style={{ color: '#525252' }}>Our</p>
                        <p style={{ color: '#755847', marginLeft: '20px' }}>Philosophy</p>
                    </div>
                    <p className='ourPhilosophyText '>People who don't buckle in, don't walk away.</p>
                    <p className='ourPhilosophyText ourPhilosophyTextMargin'>People who ooze good under pressure and smile when it rains on them.</p>
                    <p className='ourPhilosophyText '>People who make bitter, better.</p>
                    <p className='ourPhilosophyText ourPhilosophyTextMargin'>Fix what's broken and improve what's not. People who stumble. Fall. Fail. Hurt. But are just not ready to give up until it is done.</p>
                    <p className='ourPhilosophyText ourPhilosophyTextMargin'>We are for these kinds of people.</p>
                    <p className='ourPhilosophyText'>And we believe these people have the power to inspire all of us.</p>


                </div>
            </div> */}
            <Footer />
        </div>
    )
}





export default About
