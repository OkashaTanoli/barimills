import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import '../products/everydaytowel.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Warping1 from '../../images/warping1.jpg'
import Warping2 from '../../images/warping2.jpg'
import Warping3 from '../../images/warping3.jpg'
import Warping4 from '../../images/warping4.jpg'
import Warping5 from '../../images/warping5.jpg'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"



function WarpingAndSizing() {


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
                                Warping And Sizing
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel' style={{ letterSpacing: '-3px', fontSize: '55px' }}>Warping And Sizing</p>
                            {/* <p className='everyDayTowelCollection'>Collection</p> */}
                        </div>
                        <div className='everyDayTowelText'>
                            From spun yarns to high quality warp beams, our sizing and warping process ensures the required precision.
                            Typical feature of sizing machines is that they are operator friendly while maintaining
                            optimal output efficiency with a perfect process control. The sized warp beams ensure maximum efficiency in weaving.
                        </div>

                    </div>
                </div>
                <div className='everyDayTowelHeadSecondDiv'>
                    <img src={Warping1} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Warping4} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Warping2} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Warping3} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Warping5} width='100%' />
                </div>
            </div>
            {/* <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Warping6} width='100%' />
                </div>
            </div> */}




            <Footer />
        </div>
    )
}


export default WarpingAndSizing