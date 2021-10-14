import React from 'react'
import './imagecaurosel.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Component } from "react";
import Cert1 from '../../../images/cert1.png'
import Cert2 from '../../../images/cert2.png'
import Cert3 from '../../../images/cert3.png'
import Cert4 from '../../../images/cert4.png'
import Cert5 from '../../../images/cert5.jpeg'
import Cert6 from '../../../images/cert6.jpeg'
import Cert7 from '../../../images/cert7.jpeg'
import Cert8 from '../../../images/cert8.png'
import Cert9 from '../../../images/cert9.jpeg'
import Cert10 from '../../../images/cert10.jpeg'

function SwipeToSlide() {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: window.matchMedia("(min-width: 1200px)").matches? 6:window.matchMedia("(min-width: 780px)").matches?4:window.matchMedia("(min-width: 450px)").matches?2:1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,

  }

  return (
    <div style={{ backgroundColor: 'white',cursor:'grab' }}>
      {/* <h2>Swipe To Slide</h2> */}
      <Slider {...settings}>
        <div className='certificateOne'>
          <img src={Cert1} alt="" width='200px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert2} alt="" width='150px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert3} alt="" width='200px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert4} alt="" width='150px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert5} alt="" width='150px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert6} alt="" width='150px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert7} alt="" width='150px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert8} alt="" width='200px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert9} alt="" width='150px' />
        </div>
        <div className='certificateOne'>
          <img src={Cert10} alt="" width='200px' />
        </div>
      </Slider>
    </div>
  );
}


export default SwipeToSlide