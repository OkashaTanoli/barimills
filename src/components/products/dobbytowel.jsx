import React from 'react'
import Header from '../smallcomponents/header'
import './everydaytowel.css'
import { FaHome } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"
import Image1 from '../../images/Bari Mills Website/Terry Towel/Dobby Towel/1.jpg'
import Image2 from '../../images/Bari Mills Website/Terry Towel/Dobby Towel/2.jpg'
import Image3 from '../../images/Bari Mills Website/Terry Towel/Dobby Towel/3.jpg'
import Image4 from '../../images/Bari Mills Website/Terry Towel/Dobby Towel/4.jpg'
import Image5 from '../../images/Bari Mills Website/Terry Towel/Dobby Towel/8.jpg'

function DobbyTowel() {

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
                                Terry Towel
                            </div>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div className='productsEveryDayTowel' style={{ color: 'rgb(175, 175, 175)', fontSize: '17px', fontWeight: '700', fontFamily: 'aijaz', marginTop: '-3px' }}>
                                Dobby Towel
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel'>Dobby Towel</p>
                            <p className='everyDayTowelCollection'>Collection</p>
                        </div>
                        <div className='everyDayTowelText'>
                            Bari Mills offers a wide range of Dobby Towels in various blends and fibers.
                            Our product range is versatile and innovative, comprising of high quality towels.
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
                    
            <Footer />
        </div>
    )
}


export default DobbyTowel