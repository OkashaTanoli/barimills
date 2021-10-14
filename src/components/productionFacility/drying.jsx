import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import '../products/everydaytowel.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Drying2 from '../../images/drying2.jpg'
import Drying3 from '../../images/drying3.jpg'
import Drying4 from '../../images/drying4.jpg'
import Drying5 from '../../images/drying5.jpg'
import Drying7 from '../../images/drying7.png'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"



function Drying() {


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
                                Drying
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel' style={{ letterSpacing: '-3px', fontSize: '55px' }}>Drying</p>
                            {/* <p className='everyDayTowelCollection'>Collection</p> */}
                        </div>
                        <div className='everyDayTowelText'>
                            Our new Biancalani Drying and Finishing range has no equal in the world. This helps in swelling, perfect straightening
                            (super-soft, super-swelling) and de-twisting of the loops on terry towels coupled with Uniformity and no directionality on pile fabrics.
                        </div>

                    </div>
                </div>
                <div className='everyDayTowelHeadSecondDiv'>
                    <img src={Drying7} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Drying2} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Drying3} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Drying4} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Drying5} width='100%' />
                </div>
            </div>
            {/* <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Drying6} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Drying1} width='100%' />
                </div>
            </div> */}






            <Footer />
        </div>
    )
}


export default Drying