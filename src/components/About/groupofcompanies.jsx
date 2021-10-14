import React, { useState } from 'react'
import Header from '../smallcomponents/header'
import AboutBack from '../../images/aboutBack.jpg'
import './about.css'
import '../Main/main.css'
import { FaHome, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
// import Image from '../../images/22.jpg'
import Footer from '../smallcomponents/footer'
import { Link } from "react-router-dom"
import '../smallcomponents/responsive.css'
// import Image1 from '../../images/logo.png'
// import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
// import { HiSearch } from 'react-icons/hi'
// import { IoIosMenu } from 'react-icons/io'
// import { BiChevronDown } from 'react-icons/bi'



function GroupOfCompanies() {

    // const [openAbout, setOpenAbout] = useState(false)
    // const [openProduct, setOpenProduct] = useState(false)
    // const [openFacility, setOpenFacility] = useState(false)

    // const [openDrawer, setDrawer] = useState(false)
    // const [openSearch, setSearch] = useState(false)


    return (
        <div>


            {/* It is providing openPopUp === true . Lekin ye muje bhi nhi pata ke kyun de raha ha isi liya mane 
            Header me props ke zariya popup false kiya ha */}
            
            <Header  />






            <div style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '0', left: '0', backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%' }}></div>
                <img src={AboutBack} className='aboutBackGroungImage' />
                <div className='aboutBackGroungImageText' style={{ width: '100%', justifyContent: 'center', paddingLeft: "0px" }}>
                    <div className='aboutBackGroungImageTextContainer'>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <Link to='/'>
                                <FaHome className='homeIcon' size='20' />
                            </Link>
                            <div>
                                <GoChevronRight className='arrowIcon' size='23' />
                            </div>
                            <div style={{ color: '#e6e6e6', fontSize: '17px', fontWeight: '700', fontFamily: 'okasha', marginTop: '-5px' }}>
                                GROUP OF COMPANIES
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className='aboutText' id='aboutText' style={{ fontSize: '50px' }}>Group Of</div>
                            <div className='aboutUsText' id='aboutUsText' style={{ fontSize: '50px' }}>Companies</div>
                        </div>
                        <div>
                            {/* <p className='groupOfCompaniesName'><i> M. Yahya</i></p> */}
                            <p className='groupOfCompaniesName'> _ M. Yahya M. Yousuf Bari</p>
                            <p className='groupOfCompaniesName'> _ M. Y. Bari Pvt Ltd.</p>
                            <p className='groupOfCompaniesName'> _ Bari Linen</p>
                        </div>
                        {/* <div className='aboutUsLargeText'>
                            M.	Yahya	M.	Yousuf	Bari (Bari	Mills)	is	successfully	running	its	founding	company	since	the
                            last	7	decades,	with	its	commencement	in	1944.	In	2010	the	2	brother	decided	to	split	the
                            company	in	2	Groups. M.	Yahya	M.	Yousuf	Bari	the	parent	company	was	retained	by	us
                            whereas	they	(Ather	Bari)	made	a	new	company	by	the	name	of	Bari	Textile	Mills.
                        </div> */}
                    </div>
                </div>
            </div>







            <Footer />

        </div>














    )
}


export default GroupOfCompanies
