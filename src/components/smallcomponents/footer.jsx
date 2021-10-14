import React from 'react'
import '../Main/main.css';
import { MdEmail } from 'react-icons/md'
import { Link } from "react-router-dom"



function Footer() {
    return (
        <div className="footer">

            <h3 style={{ fontFamily: 'okasha', color: 'rgb(70, 70, 70)' }}>ABOUT US</h3>
            <div style={{ display: 'flex', fontSize: '15px', color: 'gray', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to='/about' style={{ textDecoration: 'none', color: 'gray' }}>
                    <div className='footerText'>
                        INTRODUCTION
                </div>
                </Link>
                <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                <Link to='/group-of-companies'  style={{ textDecoration: 'none', color: 'gray' }}>
                    <div className='footerText'>
                        GROUP OF COMPANIES
                </div>
                </Link>
                {/* <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                <div className='footerText'>
                    SOCIAL COMPLAINCE POLICY
                </div>
                <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                <div className='footerText'>
                    MANAGEMENT SYSTEM ACCREDITATION
                </div> */}

            </div>
            <h3 style={{ fontFamily: 'okasha', color: 'rgb(70, 70, 70)', marginTop: '30px' }}>PRODUCTION FACILITY</h3>
            <div style={{ display: 'flex', fontSize: '15px', color: 'gray', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to='/production-facility/warping-and-sizing' style={{ color: 'gray', textDecoration: 'none' }}>
                    <div className='footerText'>
                        WARPING AND SIZING
                    </div>
                </Link>
                <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                <Link to='/production-facility/weaving' style={{ color: 'gray', textDecoration: 'none' }}>
                    <div className='footerText'>
                        WEAVING
                    </div>
                </Link>
                <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                <Link to='/production-facility/dyeing' style={{ color: 'gray', textDecoration: 'none' }}>
                    <div className='footerText'>
                        DYEING
                    </div>
                </Link>
                <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                <Link to='/production-facility/drying' style={{ color: 'gray', textDecoration: 'none' }}>
                    <div className='footerText'>
                        DRYING
                    </div>
                </Link>
                <div style={{ marginLeft: '15px', marginRight: '15px' }}>/</div>
                <Link to='/production-facility/stitching' style={{ color: 'gray', textDecoration: 'none' }}>
                    <div className='footerText'>
                        STITCHING
                    </div>
                </Link>

            </div>
            <h3 style={{ fontFamily: 'okasha', color: 'rgb(70, 70, 70)' }}>STAY CONNECTED</h3>
            <div style={{ display: 'flex', fontSize: '15px', color: 'gray', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to='/contact' style={{ textDecoration: 'none', color: 'gray' }}>
                    <div className='footerText'>
                        CONTACT US
                </div>
                </Link>

            </div>

            <h3 style={{ fontFamily: 'okasha', color: 'rgb(70, 70, 70)', marginTop: '40px' }}>WANT TO STAY UP TO DATE?</h3>
            <div className='emailDiv'>
                <div className="emailMainDiv">
                    <MdEmail className='emailIcon' size='25' />
                    <input className="inputEmail" type="text" name="" id="" />
                </div>
                <div className="subscribeBtn" style={{ backgroundColor: 'gray', height: '57px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTopRightRadius: '40px', borderBottomRightRadius: '40px', paddingLeft: '10px', paddingRight: '10px', fontSize: '18px', fontFamily: 'okasha', color: 'white' }}>
                    SUBSCRIBE
                </div>
            </div>
        </div>

    )
}


export default Footer