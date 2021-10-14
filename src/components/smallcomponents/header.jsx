import React, { useState, useEffect } from 'react'
import '../Main/main.css';
import './responsive.css'
import Image from '../../images/barilog.png'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiFillYoutube, AiOutlineClose, AiOutlineTwitter, AiOutlineInstagram, AiFillFacebook } from 'react-icons/ai'
import { HiSearch } from 'react-icons/hi'
import { IoIosMenu } from 'react-icons/io'
import { BiChevronDown } from 'react-icons/bi'
import { Link } from "react-router-dom"



function Header() {


    const [openAbout, setOpenAbout] = useState(false)
    const [openProduct, setOpenProduct] = useState(false)
    const [openFacility, setOpenFacility] = useState(false)

    const [openDrawer, setDrawer] = useState(false)
    const [openSearch, setSearch] = useState(false)


    return (
        <div className='header'>
            {/* <div className='popUp' style={{ display: `${openPopUp === false ? 'none' : 'flex'} `, justifyContent: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%' }}>
                    <div className='popUpDiv'>
                        <div className='popUpDivCrossBtn' onClick={() => setOpenPopUp(false)}>
                            <AiOutlineClose size='40' />
                        </div>
                        {
                            getActive === 'terry' ?
                                <div>
                                    <h1 className='popUpHead'>Terry Towels</h1>
                                    <Link to='/dobby-towel' style={{ textDecoration: 'none' }}>
                                        <div className='popUpFirstBtn'>
                                            <div className='popUpStyleDiv'></div>
                                            Dobby Towels
                                        </div>
                                    </Link>
                                    <Link to='/jacquard-towel' style={{ textDecoration: 'none' }}>
                                        <div className='popUpSecondBtn'>
                                            <div className='popUpStyleDiv'></div>
                                            jacquard Towels
                                        </div>
                                    </Link>
                                </div>
                                :
                                getActive === 'hospitality' ?
                                    <div>
                                        <h1 className='popUpHead'>Hospitality Towels</h1>
                                        <Link to='/hospitality-towel-dyed' style={{ textDecoration: 'none' }}>
                                            <div className='popUpFirstBtn'>
                                                <div className='popUpStyleDiv'></div>
                                                Dyed (VAT & Reactive Dyes)
                                            </div>
                                        </Link>
                                        <Link to='/hospitality-towel-whites' style={{ textDecoration: 'none' }}>
                                            <div className='popUpSecondBtn'>
                                                <div className='popUpStyleDiv'></div>
                                                White
                                            </div>
                                        </Link>
                                    </div>
                                    :
                                    getActive === 'wash' ?
                                        <div>
                                            <h1 className='popUpHead'>Wash Cloths</h1>
                                            <Link to='/wash-cloths-basic' style={{ textDecoration: 'none' }}>
                                                <div className='popUpFirstBtn'>
                                                    <div className='popUpStyleDiv'></div>
                                                    Basic
                                                </div>
                                            </Link>
                                            <Link to='/wash-cloths-fashion' style={{ textDecoration: 'none' }}>
                                                <div className='popUpSecondBtn'>
                                                    <div className='popUpStyleDiv'></div>
                                                    Fashion
                                                </div>
                                            </Link>
                                        </div>
                                        :
                                        getActive === 'kitchen' ?
                                            <div>
                                                <h1 className='popUpHead'>Kitchen Towels</h1>
                                                <Link to='/kitchen-towel-basic' style={{ textDecoration: 'none' }}>
                                                    <div className='popUpFirstBtn'>
                                                        <div className='popUpStyleDiv'></div>
                                                        Basic
                                                    </div>
                                                </Link>
                                                <Link to='/kitchen-towel-fashion' style={{ textDecoration: 'none' }}>
                                                    <div className='popUpFirstBtn'>
                                                        <div className='popUpStyleDiv'></div>
                                                        Fashion
                                                    </div>
                                                </Link>
                                                <Link to='/kitchen-towel-oven-mitts' style={{ textDecoration: 'none' }}>
                                                    <div className='popUpFirstBtn'>
                                                        <div className='popUpStyleDiv'></div>
                                                        Oven Mitts
                                                    </div>
                                                </Link>
                                                <Link to='/kitchen-towel-pot-holders' style={{ textDecoration: 'none' }}>
                                                    <div className='popUpSecondBtn'>
                                                        <div className='popUpStyleDiv'></div>
                                                        Pot Holder
                                                    </div>
                                                </Link>
                                            </div>
                                            :
                                            false
                        }

                    </div>
                </div>
            </div> */}
            <div className='searchBarDiv' style={{ height: `${openSearch === false ? '0' : '100vh'}`, position: 'absolute', top: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.9)', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 2 }}>
                <div style={{ width: '100%', textAlign: 'center' }}>
                    <AiOutlineClose onClick={() => { setSearch(false) }} style={{ color: 'white', cursor: 'pointer' }} size='50' />
                    <h1 style={{ fontSize: '60px', fontFamily: 'okasha', color: 'white' }}>Search Here</h1>
                    <input className='searchInput' type="text" name="" id="" />
                    <HiSearch size='40' style={{ color: 'white', cursor: 'pointer' }} />
                </div>
            </div>

            <div style={{ height: `${openDrawer === false ? '0' : '100vh'}`, overflow: 'hidden' }} className='rsponsiveHead'>
                <div className='responsiveMenu'>
                    <div className='crossIconDiv' onClick={() => { setDrawer(false) }}>
                        <AiOutlineClose size='40' className='crossIcon' />
                    </div>
                    <div style={openAbout === false ? { height: '81px' } : { height: '165px' }} className='aboutComplete'>
                        <div onClick={() => { setOpenAbout(openAbout === false ? true : false) }} className="responsiveMenuItem">
                            <Link to='/about' style={{ textDecoration: 'none', color: 'gray' }}>
                                ABOUT US
                            </Link >
                            <BiChevronDown size='25' style={{ marginLeft: '5px', float: 'right', marginRight: '60px' }} />

                        </div>
                        <Link to='/about' style={{ textDecoration: 'none' }}>
                            <div className="responsiveMenuItemAbout">
                                INTRODUCTION
                            </div>
                        </Link>
                        <Link to='/group-of-companies' style={{ textDecoration: 'none' }}>
                            <div className="responsiveMenuItemAbout last">
                                GROUP OF COMPANIES
                            </div>
                        </Link>
                    </div>

                    <div style={openProduct === false ? { height: '81px' } : { height: '775px' }} className='aboutComplete'>
                        <div onClick={() => { setOpenProduct(openProduct === false ? true : false) }} className="responsiveMenuItem">
                            PRODUCTS
                            <BiChevronDown size='25' style={{ marginLeft: '5px', float: 'right', marginRight: '60px' }} />
                        </div>
                        <div className="responsiveMenuItemAbout responsiveTerryTowel">
                            TERRY TOWELS
                            <div>
                                <Link to='/dobby-towel' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>DOBBY TOWELS</li>
                                    </ul>
                                </Link>
                                <Link to='/jacquard-towel' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>JACQUARD TOWELS</li>
                                    </ul>
                                </Link>
                            </div>
                        </div>
                        <div className="responsiveMenuItemAbout responsiveTerryTowel">
                            HOSPITALITY TOWELS
                            <div>
                                <Link to='hospitality-towel-dyed' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>DYED (VAT-Reactive)</li>
                                    </ul>
                                </Link>
                                <Link to='hospitality-towel-whites' style={{ textDecoration: 'none', color: 'gray' }} >
                                    <ul>
                                        <li>WHITE COLLECTION</li>
                                    </ul>
                                </Link>
                            </div>
                        </div>
                        <div className="responsiveMenuItemAbout responsiveTerryTowel">
                            WASH CLOTHS
                            <div>
                                <Link to='/wash-cloths-basic' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>BASIC</li>
                                    </ul>
                                </Link>
                                <Link to='/wash-cloths-fashion' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>FASHION</li>
                                    </ul>
                                </Link>
                            </div>
                        </div>
                        <div className="responsiveMenuItemAbout responsiveTerryTowel">
                            KITCHEN TOWELS
                            <div>
                                <Link to='/kitchen-towel-basic' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>BASIC</li>
                                    </ul>
                                </Link>
                                <Link to='/kitchen-towel-fashion' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>FASHION</li>
                                    </ul>
                                </Link>
                                <Link to='/kitchen-towel-oven-mitts and pot-holder' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>OVEN MITTS & POT HOLDER </li>
                                    </ul>
                                </Link>
                                {/* <Link to='/kitchen-towel-pot-holders' style={{ textDecoration: 'none', color: 'gray' }}>
                                    <ul>
                                        <li>POT HOLDERS</li>
                                    </ul>
                                </Link> */}
                            </div>
                        </div>

                        <Link to='/bath-robe' style={{ textDecoration: 'none' }}>
                            <div className="responsiveMenuItemAbout">
                                BATH ROBE
                            </div>
                        </Link>
                        <Link to='/beach-towel' style={{ textDecoration: 'none' }}>
                            <div className="responsiveMenuItemAbout">
                                BEACH TOWELS
                            </div>
                        </Link>
                        {/* <Link to='/automative-towel' style={{ textDecoration: 'none' }}>
                            <div className="responsiveMenuItemAbout ">
                                AUTOMOTIVE TOWELS
                            </div>
                        </Link> */}
                        <Link to='/jersey-bed-linen' style={{ textDecoration: 'none' }}>
                            <div className="responsiveMenuItemAbout last">
                                JERSEY BED LINEN
                            </div>
                        </Link>

                    </div>

                    <div className='aboutComplete'>
                        <Link to='/production-facility' style={{ textDecoration: 'none' }}>
                            <div className="responsiveMenuItem">
                                PRODUCTION FACILITY
                            </div>
                        </Link>
                        {/* <Link to='/warping-and-sizing' style={{ textDecoration: 'none' }}>
                        <div className="responsiveMenuItemAbout">
                            WARPING AND SIZING
                        </div>
                    </Link>
                    <Link to='weaving' style={{ textDecoration: 'none' }}>
                        <div className="responsiveMenuItemAbout">
                            WEAVING
                        </div>
                    </Link>
                    <Link to='dyeing' style={{ textDecoration: 'none' }}>
                        <div className="responsiveMenuItemAbout">
                            DYEING
                        </div>
                    </Link>
                    <Link to='drying' style={{ textDecoration: 'none' }}>
                        <div className="responsiveMenuItemAbout">
                            DRYING
                        </div>
                    </Link>
                    <Link to='stitching' style={{ textDecoration: 'none' }}>
                        <div className="responsiveMenuItemAbout last">
                            STITCHING
                        </div>
                    </Link> */}

                    </div>
                    <a href='http://bari-studio.com/' style={{ textDecoration: 'none' }}>
                        <div className='responsiveMenuItem'>
                            BARI STUDIO
                        </div>
                    </a>
                    <Link to='/sustainability' style={{ textDecoration: 'none' }}>
                        <div className='responsiveMenuItem'>
                        SUSTAINABILITY
                        </div>
                    </Link>
                    <Link to='/contact' style={{ textDecoration: 'none' }}>
                        <div className='responsiveMenuItem'>
                            CONTACT
                        </div>
                    </Link>
                    <Link to='/career' style={{ textDecoration: 'none' }}>
                        <div className='responsiveMenuItem'>
                            CAREER
                        </div>
                    </Link>

                </div>
            </div>
            <div className='logo'>
                <div className='menuBtn' onClick={() => setDrawer(true)}>
                    <IoIosMenu className='menuIcon' size='50' />
                </div>
                <Link to='/'>
                    <img className='logoImage' src={Image} alt="logo" width='89px' />
                </Link>
            </div>
            <div className='menu'>
                <div className='showing' style={{ position: 'relative', height: '100%' }}>

                    <Link to='/about' className='not-active'>
                        <div className='activeBorder'></div>
                        <p className='textDecorationLine'>About Us</p>
                        <BiChevronDown size='25' style={{ marginLeft: '5px' }} />
                    </Link>
                    <div className='sub-menu'>
                        <Link to='/about' style={{ textDecorationLine: 'none' }}>
                            <div className='sub'>
                                <div className='onHoverShow'></div>
                                <p className='text'>Introduction</p>
                            </div>
                        </Link>
                        <Link to='/group-of-companies' style={{ textDecorationLine: 'none' }}>
                            <div className='sub'>
                                <div className='onHoverShow'></div>
                                <p>Group Of Compnaies</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className='showing' style={{ position: 'relative', height: '100%' }}>
                    <div className='not-active'>
                        <div className='activeBorder'></div>
                        <p>Products</p>
                        <BiChevronDown size='25' style={{ marginLeft: '5px' }} />
                    </div>
                    <div className='sub-menu'>
                        <div className='sub terryTowelSub' style={{ height: '47px', cursor: 'pointer', overflow: 'hidden' }}>
                            <div className='onHoverShow'></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
                                <span className='text'>Terry Towels</span>
                                <BiChevronDown size='25' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ marginTop: '25px', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
                                <Link to='/dobby-towel' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ marginTop: '5px', paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', borderBottom: '1px solid #e8e8e8', paddingLeft: '10px' }}>
                                        <p className='text'>Dobby Towels</p>
                                    </div>
                                </Link>
                                <Link to='/jacquard-towel' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', paddingLeft: '10px', marginBottom: '5px' }}>
                                        <p className='text'>Jacquard Towels</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='sub terryTowelSub' style={{ height: '47px', cursor: 'pointer', overflow: 'hidden' }}>
                            <div className='onHoverShow'></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
                                <span className='text'>Hospitality Towels</span>
                                <BiChevronDown size='25' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ marginTop: '25px', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
                                <Link to='hospitality-towel-dyed' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ marginTop: '5px', paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', borderBottom: '1px solid #e8e8e8', paddingLeft: '10px' }}>
                                        <p className='text'>Dyed (VAT -Reactive)</p>
                                    </div>
                                </Link>
                                <Link to='hospitality-towel-whites' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', paddingLeft: '10px', marginBottom: '5px' }}>
                                        <p className='text'>White Collection</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='sub terryTowelSub' style={{ height: '47px', cursor: 'pointer', overflow: 'hidden' }}>
                            <div className='onHoverShow'></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
                                <span className='text'>Wash Cloths</span>
                                <BiChevronDown size='25' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ marginTop: '25px', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
                                <Link to='/wash-cloths-basic' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ marginTop: '5px', paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', borderBottom: '1px solid #e8e8e8', paddingLeft: '10px' }}>
                                        <p className='text'>Baisc</p>
                                    </div>
                                </Link>
                                <Link to='/wash-cloths-fashion' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', paddingLeft: '10px', marginBottom: '5px' }}>
                                        <p className='text'>Fashion</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='sub terryTowelSub kitchenTowelSub' style={{ height: '47px', cursor: 'pointer', overflow: 'hidden' }}>
                            <div className='onHoverShow'></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '10px' }}>
                                <span className='text'>Kitchen Towel</span>
                                <BiChevronDown size='25' style={{ marginLeft: '5px' }} />
                            </div>
                            <div style={{ marginTop: '25px', borderTop: '1px solid #e8e8e8', borderBottom: '1px solid #e8e8e8' }}>
                                <Link to='/kitchen-towel-basic' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ marginTop: '5px', paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', borderBottom: '1px solid #e8e8e8', paddingLeft: '10px' }}>
                                        <p className='text'>Baisc</p>
                                    </div>
                                </Link>
                                <Link to='/kitchen-towel-fashion' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', borderBottom: '1px solid #e8e8e8', paddingLeft: '10px' }}>
                                        <p className='text'>Fashion</p>
                                    </div>
                                </Link>
                                <Link to='/kitchen-towel-oven-mitts and pot-holder' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                    <div className='terryTowelDivs' style={{ paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', borderBottom: '1px solid #e8e8e8', paddingLeft: '10px' }}>
                                        <p className='text'>Oven Mitts & Pot Holder</p>
                                    </div>
                                </Link>
                                {/* <Link to='/kitchen-towel-pot-holders' style={{ textDecoration: 'none', color: '#e0e0e0' }}>
                                <div className='terryTowelDivs' style={{ paddingTop: '4px', paddingBottom: '4px', marginLeft: '30px', paddingLeft: '10px', marginBottom: '5px' }}>
                                    <p className='text'>Pot Holder</p>
                                </div>
                            </Link> */}
                            </div>
                        </div>

                        <Link to='/bath-robe' style={{ textDecoration: 'none' }}>
                            <div className='sub'>
                                <div className='onHoverShow'></div>
                                <p>Bath Robe</p>
                            </div>
                        </Link>
                        <Link to='/beach-towel' style={{ textDecoration: 'none' }}>
                            <div className='sub'>
                                <div className='onHoverShow'></div>
                                <p>Beach Towels</p>
                            </div>
                        </Link>
                        {/* <Link to='/automative-towel' style={{ textDecoration: 'none' }}>
                            <div className='sub'>
                                <div className='onHoverShow'></div>
                                <p>Automotive Towels</p>
                            </div>
                        </Link> */}
                        <Link to='/jersey-bed-linen' style={{ textDecoration: 'none' }}>
                            <div className='sub'>
                                <div className='onHoverShow'></div>
                                <p>Jersey Bed Linen</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='showing' style={{ position: 'relative', height: '100%', cursor: 'pointer' }}>
                    <Link to='/production-facility' className='not-active'>
                        <div className='activeBorder'></div>
                        <p>Production Facility</p>
                    </Link>
                    {/* <div className='sub-menu'>
                    <Link to='/warping-and-sizing' style={{ textDecoration: 'none' }}>
                        <div className='sub'>
                            <div className='onHoverShow'></div>
                            <p className='text'>WARPING AND SIZING</p>
                        </div>
                    </Link>
                    <Link to='/weaving' style={{ textDecoration: 'none' }}>
                        <div className='sub'>
                            <div className='onHoverShow'></div>
                            <p>WEAVING</p>
                        </div>
                    </Link>
                    <Link to='/dyeing' style={{ textDecoration: 'none' }}>
                        <div className='sub'>
                            <div className='onHoverShow'></div>
                            <p>DYEING</p>
                        </div>
                    </Link>
                    <Link to='/drying' style={{ textDecoration: 'none' }}>
                        <div className='sub'>
                            <div className='onHoverShow'></div>
                            <p>DRYING</p>
                        </div>
                    </Link>
                    <Link to='stitching' style={{ textDecoration: 'none' }}>
                        <div className='sub'>
                            <div className='onHoverShow'></div>
                            <p>STITCHING</p>
                        </div>
                    </Link>
                </div> */}
                </div>


                <a href='http://bari-studio.com' className='not-active'>
                    <div className='activeBorder'></div>
                    <p>Bari Studio</p>
                </a>
                <Link to='/sustainability' className='not-active'>
                    <div className='activeBorder'></div>
                    <p>Sustanibility</p>
                </Link>
                <Link to='/contact' className='not-active'>
                    <div className='activeBorder'></div>
                    <p>Contact</p>
                </Link>
                <Link to='/career' className='not-active'>
                    <div className='activeBorder'></div>
                    <p>Career</p>
                </Link>
            </div>
            <div className='social'>
                <div className='socialIcons'>
                    <FaFacebookF size='17' className='icons' />
                    <AiFillYoutube size='20' className='icons' />
                    <AiOutlineTwitter size='20' className='icons' />
                    <AiOutlineInstagram size='19' className='icons' />
                    <FaLinkedinIn size='20' className='icons' />
                </div>
                <div onClick={() => { setSearch(true) }} className='searchIcon'>
                    <HiSearch size='22' className='searching' />
                </div>
            </div>
        </div>
    )
}



export default Header;
