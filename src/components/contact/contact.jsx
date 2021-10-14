import React, { useState, useEffect } from 'react'
import '../Main/main.css';
import '../smallcomponents/responsive.css'
import Image from '../../images/logo.png'
import { FaFacebookF, FaLinkedinIn, FaFax } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { IoIosMenu, IoMdMail } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'
import { MdLocationOn, MdCall } from 'react-icons/md'
import { Link } from "react-router-dom"
import './contact.css'
import '../products/everydaytowel.css'
import Footer from '../smallcomponents/footer'
import Header from '../smallcomponents/header';


function Contact() {



    // const [openAbout, setOpenAbout] = useState(false)
    // const [openProduct, setOpenProduct] = useState(false)
    // const [openFacility, setOpenFacility] = useState(false)

    // const [openDrawer, setDrawer] = useState(false)
    // const [openSearch, setSearch] = useState(false)




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



            <div className='contactUsHead'>
                <div style={{ color: '#755847' }}>
                    Contact
                </div>
                <div style={{ color: '#353434', marginLeft: '20px' }}>
                    Us
                </div>
            </div>



            <div className='interestedFormDiv'>
                <h1 style={{ fontFamily: 'okasha', color: '#755847', textAlign: 'center', fontSize: '40px' }}>Interested</h1>
                <p style={{ textAlign: 'center', fontSize: '18px', color: 'gray', fontFamily: 'aijaz' }}>We'll be happy to share more info with you.</p>
                <div style={{ marginTop: '50px' }}>
                    <div className='formDiv'>
                        <div className='inputFieldDiv'>
                            <input placeholder='Name*' className='inputField' type="text" name="" id="" />
                        </div>
                        <div className='inputFieldDiv'>
                            <input placeholder='Email*' className='inputField' type="text" name="" id="" />
                        </div>
                    </div>
                    <div className='formDiv'>
                        <div className='inputFieldDiv'>
                            <input placeholder='Country*' className='inputField' type="text" />
                        </div>
                        <div className='inputFieldDiv'>
                            <input placeholder='Company*' className='inputField' type="text" />
                        </div>
                        {/* <div className='inputFieldDiv'>
                            <select placeholder='Select Business' className='inputField' style={{}}>
                                <option value={null}>Select Business</option>
                                <option value='Domestic bed and bath'>Domestic bed and bath</option>
                                <option value='International Sheeting<'>International Sheeting</option>
                                <option value='International Towel and bathrobes'>International Towel and bathrobes</option>
                            </select>
                        </div> */}
                    </div>
                    {/* <div className='formDiv'>
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
                    </div> */}
                    <div className='formDiv'>
                        <div className='inputFieldDiv' style={{ width: '100%' }}>
                            <input placeholder='Message' type="text" className='inputField' style={{ width: '100%', minHeight: '100px' }} />
                        </div>
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                        <div className='submitBtn'>SUBMIT</div>
                    </div>
                </div>
            </div>


            <div className='mapDiv'>
                <div className='contactUsHeadSecond'>
                    <div style={{ color: '#755847' }}>
                        Head Office
                    </div>
                    <div style={{ color: '#353434', lineHeight: '50px' }}>
                        Location
                    </div>
                </div>

                <div style={{ width: '100%', position: 'relative', marginTop: '40px' }}>
                    <div className='infoBlockInMapDiv' style={{ position: 'absolute', top: 10, left: 10, right: 10, backgroundColor: '#b5b5b5', width: '500px' }}>
                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '0px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', borderBottom: '1px solid #ededed', borderRight: '1px solid #ededed' }}>
                                <MdLocationOn style={{ color: '#755847' }} size='25' />
                            </div>
                            <div style={{ paddingLeft: '20px', paddingRight: '20px', borderBottom: '1px solid #ededed', width: '90%' }}>
                                <p className='locationAddress'>D 107, Textile Avenue, SITE, Karachi, 75700, Pakistan.</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', width: '100%' }}>
                            <div style={{ padding: '0px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', borderBottom: '1px solid #ededed', borderRight: '1px solid #ededed' }}>
                                <MdCall style={{ color: '#755847' }} size='25' />
                            </div>
                            <div style={{ paddingLeft: '20px', paddingRight: '20px', borderBottom: '1px solid #ededed', width: '90%' }}>
                                <p className='locationAddress'>Telephones: +92-21 111-696-922</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div style={{ padding: '0px 5px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '10%', borderRight: '1px solid #ededed' }}>
                                <IoMdMail style={{ color: '#755847' }} size='25' />
                            </div>
                            <div style={{ paddingLeft: '20px', paddingRight: '20px', width: '90%' }}>
                                <p className='locationAddress'>Email: <a href='mailto:sales@barimills.com.pk' style={{ color: 'white', textDecoration: 'none', marginLeft: '2px' }}>sales@barimills.com.pk</a></p>
                            </div>
                        </div>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.5575820993054!2d66.99760001500387!3d24.913068284029134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8299071bf9461dea!2sBARI%20MILLS%20(M.%20YAHYA%20M.%20YOUSUF%20BARI)!5e0!3m2!1sen!2s!4v1618791004482!5m2!1sen!2s"
                        width="100%"
                        height="650"
                        style={{ border: '0' }}
                        loading="lazy">

                    </iframe>
                </div>
            </div>






            <Footer />
        </div>

    )

}


export default Contact