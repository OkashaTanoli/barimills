import React from 'react'
import Header from '../smallcomponents/header'
import './everydaytowel.css'
import { FaHome} from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import { Link } from "react-router-dom"
import Image6 from '../../images/Bari Mills Website/Kitchen/1Basic/21.jpg'
import Image7 from '../../images/Bari Mills Website/Kitchen/1Basic/22.jpg'
import Image8 from '../../images/Bari Mills Website/Kitchen/1Basic/23.jpg'
import Image9 from '../../images/Bari Mills Website/Kitchen/1Basic/24.jpg'
import Image10 from '../../images/Bari Mills Website/Kitchen/1Basic/25.jpg'

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
                    <img src={Image6} width='100%' className='firstImage' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image10} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image7} width='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <img src={Image8} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image9} width='100%' />
                </div>
            </div>
            
            <Footer />
        </div>
    )
}


export default KitchenTowelBasic