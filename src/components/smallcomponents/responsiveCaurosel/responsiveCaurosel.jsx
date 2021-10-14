import React, { Component } from "react";
import Slider from "react-slick";
import First from '../../../images/allbusiness1.jpg'
import Warping from '../../../images/warping1.jpg'
import Weaving from '../../../images/weaving1.jpg'
import Dyeing from '../../../images/dyeing1.jpg'
import Drying from '../../../images/dryingback.jpg'
import Stitching from '../../../images/stitching3.png'
import './responsiveCaurosel.css'
import { Link } from 'react-router-dom'

export default class CenterMode extends Component {
    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "30px",
            slidesToShow: 1,
            speed: 500
        };
        const texts = {
            first: 'From spun yarns	to high	quality	warp beams our sizing and warping process ensures the required precision.	Typical	feature	of	sizing	machines is	they are operator friendly while maintaining optimal output efficiency with a perfect process control. The sized warp beams	ensure maximum efficiency in weaving.',
            second: 'Weaving	department at Bari Mills is wellequipped with the state of the line machinery capable to manufacture 1800 tonnes of high quality finished terry product. Our weaving department	has	various	units of Toyota	Air	Jet	Looms, High	Speed Shuttles Looms, Shuttles Looms with Jumbo Jacquard.',
            third: 'One	of	the	world’s	best fabric	treatment and dyeing machinery is used to create countless variety of dyed terry	products at	our	facility. High Temperature and High	Pressure Dyeing	process	ensures	high efficiency output.',
            forth: 'Our new Biancalani Drying and Finishing range has no	equal in the world. This helps in swelling,	perfect	straightening (super-soft, super-swelling) and de-twisting of the loops	on terry towels	coupled	with Uniformity	and	no directionality on pile fabrics.',
            fifth: 'Bari is equipped	with top of	the	line Continuous Longitudinal Hemming facility which is capable of producing enormous quantity of finished terry products with immaculate precision.'
        }

        return (
            <div className='responsiveCauroselMain'>
                <Slider {...settings}>
                    <div style={{}}>
                        <div className='onHoverSlide' style={{ borderLeft: '5px solid white', borderRight: '5px solid white', width: '100%', height: '500px', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Warping})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '50%', paddingTop: '90px', paddingBottom: '90px' }}>
                                <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: '3px solid white' }}>Warping and Sizing</p>
                                <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: '100%', overflow: 'hidden', marginTop: '70px' }}>
                                    <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '22px', color: 'white', marginBottom: '70px' }}>{texts.first}</p>
                                    <Link to='/production-facility/warping-and-sizing' style={{ textDecoration: 'none' }}>
                                        <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='onHoverSlide' style={{ borderLeft: '5px solid white', borderRight: '5px solid white', width: '100%', height: '500px', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Weaving})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '50%', paddingTop: '90px', paddingBottom: '90px' }}>
                                <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: '3px solid white' }}>Weaving</p>
                                <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: '100%', overflow: 'hidden', marginTop: '70px' }}>
                                    <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '22px', color: 'white', marginBottom: '70px' }}>{texts.second}</p>
                                    <Link to='/production-facility/weaving' style={{ textDecoration: 'none' }}>
                                        <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='onHoverSlide' style={{ borderLeft: '5px solid white', borderRight: '5px solid white', width: '100%', height: '500px', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Dyeing})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '50%', paddingTop: '90px', paddingBottom: '90px' }}>
                                <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: '3px solid white' }}>Dyeing</p>
                                <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: '100%', overflow: 'hidden', marginTop: '70px' }}>
                                    <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '22px', color: 'white', marginBottom: '70px' }}>{texts.third}</p>
                                    <Link to='/production-facility/dyeing' style={{ textDecoration: 'none' }}>
                                        <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='onHoverSlide' style={{ borderLeft: '5px solid white', borderRight: '5px solid white', width: '100%', height: '500px', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Drying})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '50%', paddingTop: '90px', paddingBottom: '90px' }}>
                                <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: '3px solid white' }}>Drying</p>
                                <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: '100%', overflow: 'hidden', marginTop: '70px' }}>
                                    <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '22px', color: 'white', marginBottom: '70px' }}>{texts.forth}</p>
                                    <Link to='/production-facility/drying' style={{ textDecoration: 'none' }}>
                                        <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='onHoverSlide' style={{ borderLeft: '5px solid white', borderRight: '5px solid white', width: '100%', height: '500px', transitionProperty: 'all', transitionDuration: '.3s', background: `url(${Stitching})`, backgroundSize: 'cover', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div className='onHoverSliderContainer' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '15px', paddingRight: '15px', height: '100%', width: '50%', paddingTop: '90px', paddingBottom: '90px' }}>
                                <p className="onHoverSliderHead" style={{ textAlign: 'center', fontSize: '25px', color: 'white', fontWeight: '700', fontFamily: 'okasha', borderBottom: '3px solid white' }}>Stitching</p>
                                <div className='onHoverhoverConatiner' style={{ transitionProperty: 'all', transitionDuration: '.2s', height: '100%', overflow: 'hidden', marginTop: '70px' }}>
                                    <p className="onHoverSliderText" style={{ textAlign: 'center', fontSize: '22px', color: 'white', marginBottom: '70px' }}>{texts.fifth}</p>
                                    <Link to='/production-facility/stitching' style={{ textDecoration: 'none' }}>
                                        <div className="onHoverChangeBtn" style={{ padding: '20px', color: 'gray', fontSize: '18px', fontWeight: '700', backgroundColor: 'white', textAlign: 'center', borderRadius: '30px', transitionProperty: 'all', transitionDuration: '.4s', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Show More</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}