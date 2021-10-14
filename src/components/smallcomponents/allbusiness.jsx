import React, { useState } from 'react'
import './allbusiness.css'
import { Link } from "react-router-dom"
// import First from '../../images/allbusiness1.jpg'
import CenterMode from './responsiveCaurosel/responsiveCaurosel'
import Warping from '../../images/warping1.jpg'
import Weaving from '../../images/weaving1.jpg'
import Dyeing from '../../images/dyeing1.jpg'
import Drying from '../../images/dryingback.jpg'
import Stitching from '../../images/stitching3.png'


function AllBusiness() {


    const texts = {
        first: 'From spun yarns	to high	quality	warp beams our sizing and warping process ensures the required precision.	Typical	feature	of	sizing	machines is that they are operator friendly while maintaining optimal output efficiency with a perfect process control. The sized warp beams	ensure maximum efficiency in weaving.',
        second: 'Weaving	department at Bari Mills is well equipped with the state of the line machinery capable to manufacture 1800 tonnes of high quality finished terry product. Our weaving department	has	various	units of Toyota	Air	Jet	Looms, High	Speed Shuttles Looms, Shuttles Looms with Jumbo Jacquard.',
        third: 'One	of	the	world’s	best fabric	treatment and dyeing machinery is used to create countless variety of dyed terry	products at	our	facility. High Temperature and High	Pressure Dyeing	process	ensures	high efficiency output.',
        forth: 'Our new Biancalani Drying and Finishing range has no	equal in the world. This helps in swelling,	perfect	straightening (super-soft, super-swelling) and de-twisting of the loops	on terry towels	coupled	with Uniformity	and	no directionality on pile fabrics.',
        fifth: 'Bari is equipped	with top of	the	line Continuous Longitudinal Hemming facility which is capable of producing enormous quantity of finished terry products with immaculate precision.'
    }

    const [getFull, setFull] = useState('first')
    return (
        <div className='allBusinessMain'>
            <div className='allBusinessHeadDiv'>
                <div className='allBusinessSubDiv'>
                    <p className='allOur' style={{ color: '#383838' }}>Production</p>
                    <p className='business' style={{ marginTop: '-110px', color: '#755847' }}>Facility</p>
                </div>
            </div>
            <CenterMode />

            <div className='onHoverSlider'>
                <div onMouseOver={() => { setFull('first') }} style={{ width: getFull === 'first' ? '40%' : '15%', height: '100%', borderRight: '6px solid white', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Warping})`,backgroundSize:'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '80%', paddingTop: '90px', paddingBottom: '90px' }}>
                        <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: getFull === 'first' ? '3px solid white' : 'none' }}>Warping and Sizing</p>
                        <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: getFull === 'first' ? '100%' : '0px', overflow: 'hidden', marginTop: '70px' }}>
                            <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '18px', color: 'white', marginBottom: '70px' }}>{texts.first}</p>
                            <Link to='/production-facility/warping-and-sizing' style={{ textDecoration: 'none' }}>
                                <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Show More</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div onMouseOver={() => { setFull('second') }} style={{ width: getFull === 'second' ? '40%' : '15%', height: '100%', borderRight: '6px solid white', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Weaving})`,backgroundSize:'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '80%', paddingTop: '90px', paddingBottom: '90px' }}>
                        <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: getFull === 'second' ? '3px solid white' : 'none' }}>Weaving</p>
                        <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: getFull === 'second' ? '100%' : '0px', overflow: 'hidden', marginTop: '70px' }}>
                            <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '18px', color: 'white', marginBottom: '70px' }}>{texts.second}</p>
                            <Link to='/production-facility/weaving' style={{ textDecoration: 'none' }}>
                                <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer' }}>Show More</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div onMouseOver={() => { setFull('third') }} style={{ width: getFull === 'third' ? '40%' : '15%', height: '100%', borderRight: '6px solid white', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Dyeing})`,backgroundSize:'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '80%', paddingTop: '90px', paddingBottom: '90px' }}>
                        <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: getFull === 'third' ? '3px solid white' : 'none' }}>Dyeing</p>
                        <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: getFull === 'third' ? '100%' : '0px', overflow: 'hidden', marginTop: '70px' }}>
                            <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '18px', color: 'white', marginBottom: '70px' }}>{texts.third}</p>
                            <Link to='/production-facility/dyeing' style={{ textDecoration: 'none' }}>
                                <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer' }}>Show More</div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div onMouseOver={() => { setFull('forth') }} style={{ width: getFull === 'forth' ? '40%' : '15%', height: '100%', borderRight: '6px solid white', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Drying})`,backgroundSize:'cover', display: 'flex', alignItems: 'center', justifyContent: 'center',position:'relative' }}>
                    <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', width: '80%', height:'100%',paddingTop: '90px', paddingBottom: '90px'}}>
                        <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: getFull === 'forth' ? '3px solid white' : 'none' }}>Drying</p>
                        <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: getFull === 'forth' ? '100%' : '0px', overflow: 'hidden', marginTop: '70px' }}>
                            <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '18px', color: 'white', marginBottom: '70px' }}>{texts.forth}</p>
                            <Link to='/production-facility/drying' style={{ textDecoration: 'none' }}>
                                <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer' }}>Show More</div>
                            </Link>
                        </div>
                    </div>

                </div>
                <div onMouseOver={() => { setFull('fifth') }} style={{ width: getFull === 'fifth' ? '40%' : '15%', height: '100%', borderRight: '6px solid white', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Stitching})`,backgroundSize:'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '80%', paddingTop: '90px', paddingBottom: '90px' }}>
                        <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: getFull === 'fifth' ? '3px solid white' : 'none' }}>Stitching</p>
                        <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: getFull === 'fifth' ? '100%' : '0px', overflow: 'hidden', marginTop: '70px' }}>
                            <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '18px', color: 'white', marginBottom: '70px' }}>{texts.fifth}</p>
                            <Link to='/production-facility/stitching' style={{textDecoration:'none'}}>
                                <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer' }}>Show More</div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* <div onMouseOver={() => { setFull('fifth') }} style={{ width: getFull === 'fifth' ? '40%' : '15%',  height: '100%', borderRight: '6px solid white', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${First})`, display: 'flex', alignItems: 'center', justifyContent: 'center'  }}>
                    <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '50%', paddingTop: '90px', paddingBottom: '90px' }}>
                        <p className="onHoverSliderHead"  style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: getFull === 'fifth' ? '3px solid white' : 'none' }}>Energy</p>
                        <div style={{transitionProperty: 'all', transitionDuration: '.2s',height:getFull === 'fifth'?'100%':'0px',overflow:'hidden' ,marginTop:'70px'}}>
                            <p style={{ textAlign:'center',fontSize:'22px',color:'white',marginBottom:'70px'}}>{texts.first}</p>
                            <div className="onHoverChangeBtn" style={{padding:'20px',color:'gray',fontSize:'18px',fontWeight:'700',backgroundColor:'white',textAlign:'center',borderRadius:'30px',transitionProperty: 'all', transitionDuration: '.4s',cursor:'pointer'}}>Show More</div>
                        </div>
                    </div>
                </div> */}
            </div>

        </div>
    )

}

export default AllBusiness