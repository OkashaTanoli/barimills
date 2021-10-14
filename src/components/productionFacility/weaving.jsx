import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import '../products/everydaytowel.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Weaving2 from '../../images/weaving2.jpg'
import Weaving3 from '../../images/weaving3.jpg'
import Weaving4 from '../../images/weaving4.jpg'
import Weaving5 from '../../images/weaving5.jpg'
import Weaving8 from '../../images/weaving8.jpg'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"



function Weaving() {


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
                                Weaving
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel' style={{ letterSpacing: '-3px', fontSize: '55px' }}>Weaving</p>
                            {/* <p className='everyDayTowelCollection'>Collection</p> */}
                        </div>
                        <div className='everyDayTowelText'>
                            Weaving department at Bari Mills is well equipped with the state of the line
                            machinery capable to manufacture 2400 tonnes of high quality finished terry product.
                            Our weaving department has various units of Toyota Air Jet Looms, High Speed Shuttles Looms,
                            Shuttles Looms with Jumbo Jacquard.
                        </div>

                    </div>
                </div>
                <div className='everyDayTowelHeadSecondDiv'>
                    <img src={Weaving8} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Weaving2} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Weaving5} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Weaving4} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Weaving3} width='100%' />
                </div>
            </div>
            {/* <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Weaving6} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Weaving7} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Weaving1} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Weaving9} width='100%'/>
                </div>
            </div> */}




            <Footer />
        </div>
    )
}


export default Weaving