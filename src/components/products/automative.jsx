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



function Automative() {


    // const [openAbout, setOpenAbout] = useState(false)
    // const [openProduct, setOpenProduct] = useState(false)
    // const [openFacility, setOpenFacility] = useState(false)

    // const [openDrawer, setDrawer] = useState(false)
    // const [openSearch, setSearch] = useState(false)



    return (
        <div>

            <Header />









            <div className='everyDayTowelHead'>
                <div className='everyDayTowelHeadFirstDiv' style={{width:'90%'}}>
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
                                Automative Towel
                            </div>
                        </div>
                        <div className='everyDayTowelEveryDayTowelCollection'>
                            <p className='everyDayTowelEveryDayTowel' style={{ letterSpacing: '-3px', fontSize: '55px' }}>Automative Towel</p>
                            <p className='everyDayTowelCollection'>Collection</p>
                        </div>
                        <div className='everyDayTowelText'>
                            Bari Mills have a wide product range when it comes to Automotive Towels. We provide ultra soft
                            and non abrasive microfiber cloth that ensures surface pretection.
                        </div>
                        {/* <div className='buyNowBtnDiv'>
                            <div className='buyNowBtn'>
                                BUY NOW
                            </div>
                        </div> */}
                    </div>
                </div>
                {/* <div className='everyDayTowelHeadSecondDiv'>
                    <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div>
                    <img src={Img1} width='100%' className='firstImage' />
                </div> */}
            </div>
            {/* <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div>
                    <img src={Img1} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div>
                    <img src={Img1} width='100%' height='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div>
                    <img src={Img1} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div>
                    <img src={Img1} width='100%' height='100%' />
                </div>
            </div>
            <div className='imagesMainDiv'>
                <div className='imagesMainDinFirstDiv'>
                    <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div>
                    <img src={Img1} width='100%' />
                </div>
                <div className='imagesMainDinSecondDiv'>
                    <div className='everyDayTowelHeadSecondDivHoverShow' >
                        <div className='everyDayTowelHeadSecondDivHoverShowDiv' >
                            <div className='buyNowBtn'>
                                REQUIRE NOW
                            </div>
                        </div>
                    </div>
                    <img src={Img1} width='100%' height='100%' />
                </div>
            </div> */}



            {/* <div className='interestedFormDiv'>
                <h1 style={{ fontFamily: 'okasha', color: '#755847', textAlign: 'center', fontSize: '40px' }}>Interested</h1>
                <p style={{ textAlign: 'center', fontSize: '18px', color: 'gray', fontFamily: 'aijaz' }}>We'll be happy to share more info with you.</p>
                <div style={{ marginTop: '50px' }}>
                    <div className='formDiv'>
                        <div className='inputFieldDiv'>
                            <input placeholder='Name*' className='inputField' type="text" name="" id="" />
                        </div>
                        <div className='inputFieldDiv'>
                            <input placeholder='Phone*' className='inputField' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='formDiv'>
                        <div className='inputFieldDiv'>
                            <input placeholder='Email*' className='inputField' type="text" />
                        </div>
                        <div className='inputFieldDiv'>
                            <select placeholder='Select Business' className='inputField' style={{}}>
                                <option value={null}>Select Business</option>
                                <option value='Domestic bed and bath'>Domestic bed and bath</option>
                                <option value='International Sheeting<'>International Sheeting</option>
                                <option value='International Towel and bathrobes'>International Towel and bathrobes</option>
                            </select>
                        </div>
                    </div>
                    <div className='formDiv'>
                        <div className='inputFieldDiv'>

                            <select placeholder='Select Business' className='inputField' style={{}}>
                                <option value={null}>Select State</option>
                                <option value='Bihar'>Bihar</option>
                                <option value='Goa'>Goa</option>
                                <option value='Delhi'>Delhi</option>
                                <option value='Gijrat'>Gijrat</option>
                            </select>
                        </div>
                        <div className='inputFieldDiv'>
                            <input placeholder='City' className='inputField' type="text" />
                        </div>
                    </div>
                    <div className='formDiv'>
                        <div className='inputFieldDiv' style={{ width: '100%' }}>
                            <input placeholder='Message' type="text" className='inputField' style={{ width: '100%', minHeight: '100px' }} />
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <div className='submitBtn'>SUBMIT</div>
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}


export default Automative