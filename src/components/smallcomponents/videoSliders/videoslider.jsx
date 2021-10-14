import React, { Component } from "react";
import Slider from "react-slick";
// import Video from '../../../video/video.mp4'
// import Video1 from '../../../video/video1.mp4'
import './videoslider.css'
import { GoPlay } from 'react-icons/go'
import { Link } from "react-router-dom";
import Thumbnail from '../../../images/thumbnail.png'

export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: window.matchMedia("(min-width: 768px)").matches? 3:window.matchMedia("(min-width: 560px)").matches?2:1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            pauseOnHover: true

        };


        return (


            <div style={{ width: '90%', margin: '50px auto', marginTop: '80px' }}>
                <div>
                    <h1 className='videoGallery'>Video Gallery</h1>
                </div>
                <div style={{ width: '100%', height: '1px', backgroundColor: '#d1d1d1', marginBottom: '40px' }}>

                </div>
                <Slider  {...settings}>
                    <Link to='./video1' target='_blank' className='videoSlider'>
                        <div className="goPlayIconDiv">
                            <GoPlay  className="goPlayIcon"/>
                        </div>
                        <img className='videoThumbnailImage' src={Thumbnail} width='100%' alt="" />
                    </Link>

                    <Link to='./video2' target='_blank' className='videoSlider'>
                        <div className="goPlayIconDiv">
                            <GoPlay  className="goPlayIcon"/>
                        </div>
                        <img src={Thumbnail} width='100%' alt="" />

                    </Link>
                    <Link to='./video3' target='_blank' className='videoSlider'>
                        <div className="goPlayIconDiv">
                            <GoPlay  className="goPlayIcon"/>
                        </div>
                        <img src={Thumbnail} width='100%' alt="" />

                    </Link>
                    <Link to='./video4' target='_blank' className='videoSlider'>
                        <div className="goPlayIconDiv">
                            <GoPlay  className="goPlayIcon"/>
                        </div>
                        <img src={Thumbnail} width='100%' alt="" />

                    </Link>

                </Slider>
            </div>

        )
    }
}