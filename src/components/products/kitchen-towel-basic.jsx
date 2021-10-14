import React from 'react'
import Header from '../smallcomponents/header'
import './everydaytowel.css'
import { FaHome} from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"
import Image1 from '../../images/Bari Mills Website/Kitchen/1Basic/1.jpg'
import Image2 from '../../images/Bari Mills Website/Kitchen/1Basic/2.jpg'
import Image3 from '../../images/Bari Mills Website/Kitchen/1Basic/3.jpg'
import Image4 from '../../images/Bari Mills Website/Kitchen/1Basic/4.jpg'
import Image5 from '../../images/Bari Mills Website/Kitchen/1Basic/7.jpg'

function KitchenTowelBasic() {


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
                                Basic
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel'>Basic</p>
                            <p className='everyDayTowelCollection'>Collection</p>
                        </div>
                        <div className='everyDayTowelText'>
                            These towels are absorbant, durable, affordable and available in a wide range of color combinations.
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
                    <img src={Image1} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image2} width='100%' height='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image3} width='100%' height='104%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image4} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image5} width='100%' />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}


export default KitchenTowelBasic