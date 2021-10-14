import React, { useState, useEffect } from 'react'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import Image from '../../images/logo.png'
import { FaFacebookF, FaLinkedinIn, FaFax } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { IoIosMenu } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'
import { MdLocationOn, MdCall } from 'react-icons/md'
import { Link } from "react-router-dom"
import '../products/everydaytowel.css'
import '../career/career.css'
import Footer from '../smallcomponents/footer'
import Header from '../smallcomponents/header';


function Career() {



    // const [openAbout, setOpenAbout] = useState(false)
    // const [openProduct, setOpenProduct] = useState(false)
    // const [openFacility, setOpenFacility] = useState(false)

    // const [openDrawer, setDrawer] = useState(false)
    // const [openSearch, setSearch] = useState(false)
    const [getActive, setActive] = useState('all')




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

                <div className='vacanciesDiv'>

                    <div className='vacanciesHead'>
                        <h1>Vacancies</h1>
                    </div>
                    <div className='allManagementNonManagement'>
                        <div style={getActive === 'all' ? { backgroundColor: '#755847', color: 'white' } : {}} onClick={() => setActive('all')} className='allManagementNonManagementAll'>
                            All
                        </div>
                        <div style={getActive === 'manage' ? { backgroundColor: '#755847', color: 'white' } : {}} onClick={() => setActive('manage')} className='allManagementNonManagementManage'>
                            Management
                        </div>
                        <div style={getActive === 'nonmanage' ? { backgroundColor: '#755847', color: 'white' } : {}} onClick={() => setActive('nonmanage')} className='allManagementNonManagementNonManage'>
                            Non Management
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', fontSize: '15px', marginTop: '50px' }}>
                    Currently, no vacancies are available
                </div>
            </div>








            <Footer />
        </div>

    )

}


export default Career