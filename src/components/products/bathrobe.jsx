import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import './everydaytowel.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import Img1 from '../../images/everyday1.jpg'
import Footer from '../smallcomponents/footer'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import Image from '../../images/logo.png'
import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { IoIosMenu } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'
import { Link } from "react-router-dom"
import Image1 from '../../images/Bari Mills Website/Bathrobes/bathrobes1.jpg'
import Image2 from '../../images/Bari Mills Website/Bathrobes/bathrobes6.jpg'
import Image3 from '../../images/Bari Mills Website/Bathrobes/bathrobes3.jpg'
import Image4 from '../../images/Bari Mills Website/Bathrobes/bathrobes4.jpg'
import Image5 from '../../images/Bari Mills Website/Bathrobes/bathrobes5.jpg'
import Image6 from '../../images/Bari Mills Website/Bathrobes/bathrobes7.jpg'
import Image7 from '../../images/Bari Mills Website/Bathrobes/bathrobes8.jpg'
import Image8 from '../../images/Bari Mills Website/Bathrobes/bathrobes9.jpg'

function BathRobe() {


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
                                Products
                            </div>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div className='productsEveryDayTowel' style={{ color: 'rgb(175, 175, 175)', fontSize: '17px', fontWeight: '700', fontFamily: 'aijaz', marginTop: '-3px' }}>
                                Bath Robe
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel'>Bath Robe</p>
                            <p className='everyDayTowelCollection'>Collection</p>
                        </div>
                        <div className='everyDayTowelText'>
                            Bari can produce a vast design of  bathrobes in different weight and styles,
                            primarily being serviced in Europe but at times extend to North America.
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
                    <img src={Image8} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <img src={Image7} width='100%' height='100%' />
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


export default BathRobe