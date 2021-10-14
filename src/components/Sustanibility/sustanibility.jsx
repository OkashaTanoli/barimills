import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import '../About/about.css'
import '../Main/main.css'
import './sustainability.css'
import { Link } from "react-router-dom"
import AboutBack from '../../images/sustainablity2.jpg'
import '../smallcomponents/responsive.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Image from '../../images/22.jpg'
import Footer from '../smallcomponents/footer'
import LedIcon from '../../images/led.png'
import SteamIcon from '../../images/steam.png'
import WaterIcon from '../../images/water.png'
import RecycleIcon from '../../images/recycle.png'
import Flash from '../../images/flash.jpeg'
import Warn from '../../images/warn.jpeg'
import {BiRecycle} from 'react-icons/bi'
import {GrSolaris} from 'react-icons/gr'

function Sustanibility() {



    return (
        <div>
            <Header />


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
                                SUSTAINABILITY
                            </div>
                        </div>
                        <div style={{}}>
                            <div className='aboutText' style={{ color: '#858585' }}>Sustainability</div>
                            <div className='aboutUsText'>At Bari</div>
                        </div>
                        <div className='aboutUsLargeText'>
                            We	strongly	believe	in	creating value and	ensuring the	betterment	of	communities,
                            environment	and	the	society	at	large	through	sustainable	initiatives.	In	our	efforts	towards
                            sustaining	the	environment, Bari	Mills	is	continuously working	towards	becoming	an
                            environmentally friendly and	socially responsible	company	by	adopting the	best	practices
                            necessary	to	ensure	a	greener	society.

                        </div>
                    </div>
                </div>
            </div>



            <div className='sustainTextDiv'>
                <div className='SustainLargeText'>
                    Our	entire	team	put	vigorous	efforts	to	ensure	3R	at	every	stage	that	is	Reduce,	Reuse	and
                    Recycle waste.	Not	only	this,	we	are	working	tirelessly to	reduce	our	carbon	footprint	for	a
                    greener	society	and	inducting resource efficiency	initiatives to minimize	consumption	and
                    reduction	of	waste.
                </div>
                <div className='SustainLargeText SustainLargeText2'>
                    Different	trainings	and	other	awareness	programs are	also	made	part	of	corporate
                    development	of	our	staff	to	ensure	each	individual plays	their	role	towards	a	more
                    sustainable	society.
                </div>

            </div>


            <div className='extraBlocks'>
                <div className='extraBlocksFirst'>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#755847', position: 'absolute', top: '0' }}></div>
                    <div className='extraBlocksFirstOverLay' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '90%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={LedIcon} />
                            </div>
                            <p className='extraBlocksFirstOverLayText'>Reduced Power Consumption By Shifting From Conventional Lights To LED Lights.</p>
                        </div>

                    </div>
                </div>
                <div className='extraBlocksFirst'>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#755847', position: 'absolute', top: '0' }}></div>
                    <div className='extraBlocksFirstOverLay' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '90%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={SteamIcon} />
                            </div>
                            <p className='extraBlocksFirstOverLayText'>Generation Of Steam Through Waste Heat Recovery From Boiling.</p>
                        </div>
                    </div>
                </div>
                <div className='extraBlocksFirst'>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#755847', position: 'absolute', top: '0' }}></div>
                    <div className='extraBlocksFirstOverLay' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '90%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={WaterIcon} />
                            </div>
                            <p className='extraBlocksFirstOverLayText'>Recycling Of Waste Water Via Effluent Treatment Plant.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='extraBlocks' style={{ marginTop: '30px', justifyContent: 'space-between' }}>
                <div className='extraBlocksFirst'>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#755847', position: 'absolute', top: '0' }}></div>
                    <div className='extraBlocksFirstOverLay' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '90%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <img src={RecycleIcon} />
                            </div>
                            <p className='extraBlocksFirstOverLayText'>Effective Recycle Process As Per GRS Standards.</p>
                        </div>
                    </div>
                </div>
                <div className='extraBlocksFirst'>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#755847', position: 'absolute', top: '0' }}></div>
                    <div className='extraBlocksFirstOverLay' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '90%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <GrSolaris size={70} color="rgb(5,44,115)"  />
                            </div>
                            <p className='extraBlocksFirstOverLayText'>Promoting Green Energy, Shifted From Local Grid To Solar Power.</p>
                        </div>
                    </div>
                </div>
                <div className='extraBlocksFirst'>
                    <div style={{ width: '100%', height: '6px', backgroundColor: '#755847', position: 'absolute', top: '0' }}></div>
                    <div className='extraBlocksFirstOverLay' style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '90%' }}>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <BiRecycle size={70} color="rgb(5,44,115)" />
                            </div>
                            <p className='extraBlocksFirstOverLayText'>Frequent Use Of Recycled Material For Packaging.</p>
                        </div>
                    </div>
                </div>

            </div>


            <Footer />

        </div>
    )
}




export default Sustanibility