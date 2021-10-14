import React  from 'react'
import Header from '../smallcomponents/header'
import './everydaytowel.css'
import { FaHome } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Image1 from '../../images/Bari Mills Website/Jersey Bed Linen/1.jpg'
import Image2 from '../../images/Bari Mills Website/Jersey Bed Linen/2.jpg'
import Image3 from '../../images/Bari Mills Website/Jersey Bed Linen/3.jpg'
import Image4 from '../../images/Bari Mills Website/Jersey Bed Linen/4.jpg'
import Image5 from '../../images/Bari Mills Website/Jersey Bed Linen/5.jpg'
import Image6 from '../../images/Bari Mills Website/Jersey Bed Linen/6.jpg'
import Image7 from '../../images/Bari Mills Website/Jersey Bed Linen/7.jpg'
import Image8 from '../../images/Bari Mills Website/Jersey Bed Linen/8.jpg'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"

function JerseyBedLinen() {


    return (
        <div>




            <Header />

            <div className='everyDayTowelHead'>
                <div className='everyDayTowelHeadFirstDiv' >
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
                                Jersey Bed Linen
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel' style={{ letterSpacing: '-3px', fontSize: '55px' }}>Jersey Bed Linen</p>
                            <p className='everyDayTowelCollection'>Collection</p>
                        </div>
                        <div className='everyDayTowelText'>
                            Bari can produced all types of Knitted sheets and garments of various knitted weaves and weights.
                            Keeping the comfort of the consumer our top priority, we excell at delivering the best.
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
                    <img src={Image7} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image8} width='100%' height='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image6} width='100%' />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}


export default JerseyBedLinen