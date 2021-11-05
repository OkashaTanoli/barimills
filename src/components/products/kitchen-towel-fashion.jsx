import React  from 'react'
import Header from '../smallcomponents/header'
import './everydaytowel.css'
import { FaHome } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"
import Image6 from '../../images/Bari Mills Website/Kitchen/1Fashion/13.jpg'
import Image7 from '../../images/Bari Mills Website/Kitchen/1Fashion/17.jpg'
import Image8 from '../../images/Bari Mills Website/Kitchen/1Fashion/18.jpg'
import Image9 from '../../images/Bari Mills Website/Kitchen/1Fashion/19.jpg'
import Image10 from '../../images/Bari Mills Website/Kitchen/1Fashion/20.jpg'

function KitchenTowelFashion() {

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
                                Kitchen Towel
                            </div>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div className='productsEveryDayTowel' style={{ color: 'rgb(175, 175, 175)', fontSize: '17px', fontWeight: '700', fontFamily: 'aijaz', marginTop: '-3px' }}>
                                Fashion
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel'>Fashion</p>
                            <p className='everyDayTowelCollection'>Collection</p>
                        </div>
                        <div className='everyDayTowelText'>
                            Our fashion towels are inspired by the latest trends and colorful
                            designs that help our customers to find the perfect item.
                        </div>
                    </div>
                </div>
                <div className='everyDayTowelHeadSecondDiv'>
                    {/* <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div> */}
                    <img src={Image10} width='100%' className='firstImage' />
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

            <Footer />
        </div>
    )
}


export default KitchenTowelFashion