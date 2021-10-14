import React, { useState, useEffect } from 'react'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import Header from '../smallcomponents/header';
// import Image from '../../images/logo.png'
// import { FaFacebookF, FaLinkedinIn, FaFax } from 'react-icons/fa'
// import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
// import { HiSearch } from 'react-icons/hi'
// import { IoIosMenu } from 'react-icons/io'
// import { BiChevronDown } from 'react-icons/bi'
// import { MdLocationOn, MdCall } from 'react-icons/md'
import { Link } from "react-router-dom"
import '../products/everydaytowel.css'
import Footer from '../smallcomponents/footer'
import Dyeing from '../../images/dyeing1copy.jpg'
import Drying from '../../images/Dryingnew.jpg'
import Weaving from '../../images/Weavingnew.jpg'
import Warping from '../../images/warping4copy.jpg'
import Stitching from '../../images/stitching7copy.jpg'


function MianPage() {



    // const [openAbout, setOpenAbout] = useState(false)
    // const [openProduct, setOpenProduct] = useState(false)
    // const [openFacility, setOpenFacility] = useState(false)

    // const [openDrawer, setDrawer] = useState(false)
    // const [openSearch, setSearch] = useState(false)
    // const [getActive, setActive] = useState('all')




    return (

        <div>

           <Header />




            {/* 
                                  Header End
                                  Header End
                                  Header End
                                  Header End
                                  Header End
                                  Header End
                                  Header End
                                  Header End
                                  Header End
                                  Header End
                                  Header End */}



            <div>
                <div className='sus'>
                    <div className='susSecondDiv'>
                        <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <p id='bath' style={{ fontFamily: 'okasha', color: '#4a4a4a', fontSize: '80px', fontWeight: 'bold', lineHeight: '50px' }}>Warping and</p>
                            <p id='collection' style={{ fontFamily: 'okasha', color: 'white', fontSize: '80px', lineHeight: '0px', fontWeight: 'bold' }}>Sizing</p>
                            <p className='susText'>
                                From spun yarns	to high	quality	warp beams, our sizing and warping process ensures the required
                                precision.	Typical	feature	of	sizing	machines is that they are operator friendly while maintaining
                                optimal output efficiency with a perfect process control. The sized warp beams	ensure maximum
                                efficiency in weaving.
                            </p>
                            <Link to='/production-facility/warping-and-sizing' style={{ textDecoration: 'none' }}>
                                <div className='knowBtn'>
                                    KNOW MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='susFirstDiv'>
                        <img src={Warping} height='100%' width='100%' />
                    </div>
                </div>
                <div className='sus'>
                    <div className='susSecondDiv'>
                        <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <p id='bath' style={{ fontFamily: 'okasha', color: '#4a4a4a', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>Weaving</p>
                            <p className='susText'>
                                Weaving	department at Bari Mills is well equipped with the state of the line machinery
                                capable to manufacture 2400 tonnes of high quality finished terry product. Our weaving
                                department	has	various	units of Toyota	Air	Jet	Looms, High	Speed Shuttles Looms, Shuttles
                                Looms with Jumbo Jacquard.
                        </p>
                            <Link to='/production-facility/weaving' style={{ textDecoration: 'none' }}>
                                <div className='knowBtn'>
                                    KNOW MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='susFirstDiv'>
                        <img src={Weaving} height='100%' width='100%' />
                    </div>
                </div>
                <div className='sus'>
                    <div className='susSecondDiv'>
                        <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <p id='bath' style={{ fontFamily: 'okasha', color: '#4a4a4a', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>Dyeing</p>
                            <p className='susText'>
                                One	of	the	world's	best fabric	treatment and dyeing machinery is used to create countless
                                variety of dyed terry products at our facility. High Temperature and High Pressure Dyeing
                                process	ensures	high efficiency output.
                        </p>
                            <Link to='/production-facility/dyeing' style={{ textDecoration: 'none' }}>
                                <div className='knowBtn'>
                                    KNOW MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='susFirstDiv'>
                        <img src={Dyeing} height='100%' width='100%' />
                    </div>
                </div>
                <div className='sus'>
                    <div className='susSecondDiv'>
                        <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <p id='bath' style={{ fontFamily: 'okasha', color: '#4a4a4a', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>Drying</p>
                            <p className='susText'>
                                Our new Biancalani Drying and Finishing range has no	equal in the world.
                                This helps in swelling,	perfect	straightening (super-soft, super-swelling) and
                                de-twisting of the loops on terry towels coupled with Uniformity	and	no directionality
                                on pile fabrics.
                        </p>
                            <Link to='/production-facility/drying' style={{ textDecoration: 'none' }}>
                                <div className='knowBtn'>
                                    KNOW MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='susFirstDiv'>
                        <img src={Drying} height='100%' width='100%' />
                    </div>
                </div>
                <div className='sus'>
                    <div className='susSecondDiv'>
                        <div style={{ marginLeft: '30px', marginRight: '30px' }}>
                            <p id='bath' style={{ fontFamily: 'okasha', color: '#4a4a4a', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>Stitching</p>
                            <p className='susText'>
                                Bari is equipped	with top of	the	line Continuous Longitudinal Hemming
                                facility which is capable of producing enormous quantity of finished terry
                                products with immaculate precision.
                        </p>
                            <Link to='/production-facility/stitching' style={{ textDecoration: 'none' }}>
                                <div className='knowBtn'>
                                    KNOW MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='susFirstDiv'>
                        <img src={Stitching} height='100%' width='100%' />
                    </div>
                </div>
            </div>







            <Footer />
        </div>

    )

}


export default MianPage