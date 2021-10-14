import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import '../products/everydaytowel.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Stitching1 from '../../images/stitching1.png'
import Stitching3 from '../../images/stitching3.png'
import Stitching6 from '../../images/stitching6.png'
import Stitching8 from '../../images/stitching8.jpg'
import Stitching9 from '../../images/stitching9.jpg'
import Stitching10 from '../../images/Stitchingnew.jpg'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"



function Stitching() {


    return (
        <div>

            <Header />

            <div className='everyDayTowelHead'>
                <div className='everyDayTowelHeadFirstDiv'>
                    <div>
                        <div style={{ display: 'flex' }}>
                            <Link to='/'>
                                <FaHome style={{ color: '#755847' }} size='20' />
                            </Link>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div className='productsEveryDayTowel' style={{ color: 'rgb(175, 175, 175)', fontSize: '17px', fontWeight: '700', fontFamily: 'aijaz', marginTop: '-3px' }}>
                                Production Facility
                            </div>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div className='productsEveryDayTowel' style={{ color: 'rgb(175, 175, 175)', fontSize: '17px', fontWeight: '700', fontFamily: 'aijaz', marginTop: '-3px' }}>
                                Stitching
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel' style={{ letterSpacing: '-3px', fontSize: '55px' }}>Stitching</p>
                            {/* <p className='everyDayTowelCollection'>Collection</p> */}
                        </div>
                        <div className='everyDayTowelText'>
                            Bari is equipped with top of the line Continuous Longitudinal Hemming facility
                            which is capable of producing enormous quantity of finished terry products with immaculate precision.
                        </div>

                    </div>
                </div>
                <div className='everyDayTowelHeadSecondDiv'>
                    <img src={Stitching1} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Stitching3} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Stitching6} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Stitching9} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Stitching8} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Stitching10} width='100%' />
                </div>
            </div>
            {/* <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Stitching3} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Stitching7} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Stitching8} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Stitching9} width='100%' />
                </div>
            </div> */}






            <Footer />
        </div>
    )
}


export default Stitching