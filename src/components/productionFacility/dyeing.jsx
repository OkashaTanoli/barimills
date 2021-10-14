import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import '../products/everydaytowel.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Dyeing1 from '../../images/dyeing1.jpg'
import Dyeing2 from '../../images/dyeing2.jpg'
import Dyeing3 from '../../images/dyeing3.jpg'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"



function Dyeing() {


    // const [openAbout, setOpenAbout] = useState(false)
    // const [openProduct, setOpenProduct] = useState(false)
    // const [openFacility, setOpenFacility] = useState(false)

    // const [openDrawer, setDrawer] = useState(false)
    // const [openSearch, setSearch] = useState(false)



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
                                Dyeing
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel' style={{ letterSpacing: '-3px', fontSize: '55px' }}>Dyeing</p>
                            {/* <p className='everyDayTowelCollection'>Collection</p> */}
                        </div>
                        <div className='everyDayTowelText'>
                            One of the world’s best fabric treatment and dyeing machinery is used to create countless variety of dyed
                            terry products at our facility. High Temperature and High Pressure Dyeing process ensures high efficiency output.
                        </div>

                    </div>
                </div>
                <div className='everyDayTowelHeadSecondDiv'>
                    <img src={Dyeing1} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Dyeing2} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Dyeing3} width='100%' />
                </div>
            </div>






            <Footer />
        </div>
    )
}


export default Dyeing