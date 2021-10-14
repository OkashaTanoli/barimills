import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import './everydaytowel.css'
import { FaHome } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Image1 from '../../images/Bari Mills Website/Beach Towel/Beach Towels1.jpg'
import Image2 from '../../images/Bari Mills Website/Beach Towel/Beach Towels2.jpg'
import Image3 from '../../images/Bari Mills Website/Beach Towel/Beach Towels3.jpg'
import Image4 from '../../images/Bari Mills Website/Beach Towel/Beach Towels4.jpg'
import Image5 from '../../images/Bari Mills Website/Beach Towel/Beach Towels5.jpg'
import Image6 from '../../images/Bari Mills Website/Beach Towel/Beach Towels6.jpg'
import Image7 from '../../images/Bari Mills Website/Beach Towel/Beach Towels7.jpg'
import Image8 from '../../images/Bari Mills Website/Beach Towel/Beach Towels8.jpg'
import Image9 from '../../images/Bari Mills Website/Beach Towel/Beach Towels9.jpg'
import Image10 from '../../images/Bari Mills Website/Beach Towel/Beach Towels10.jpg'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"

function BeachTowel() {

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
                                Products
                            </div>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div className='productsEveryDayTowel' style={{ color: 'rgb(175, 175, 175)', fontSize: '17px', fontWeight: '700', fontFamily: 'aijaz', marginTop: '-3px' }}>
                                Beach Towel
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel'>Beach Towel</p>
                            <p className='everyDayTowelCollection'>Collection</p>
                        </div>
                        <div className='everyDayTowelText'>
                            Beach towels produced at Bari Mills are rated top amongst
                            retailers and consumers for their intrigued designs, absorbancy and light weights.
                        </div>
                    </div>
                </div>
                <div className='everyDayTowelHeadSecondDiv'>
                    <img src={Image1} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image2} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image3} width='100%' height='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image4} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image5} width='100%' height='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image6} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image7} width='100%' height='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image8} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image9} width='100%' height='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image10} width='100%' />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}


export default BeachTowel