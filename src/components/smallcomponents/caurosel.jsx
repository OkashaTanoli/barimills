import React, { useState } from 'react'
import './caurosel.css'
// import Imgage1 from '../../images/Slider/slider1.jpg'
import Imgage2 from '../../images/Slider/slider2.jpg'
// import Imgage3 from '../../images/Slider/slider3.jpg'
// import Imgage4 from '../../images/Slider/slider4.jpg'
import Imgage6 from '../../images/Slider/slider6.jpg'
// import Imgage10 from '../../images/Slider/slider10.jpg'
// import Imgage12 from '../../images/Slider/slider12.jpg'
// import Video from '../../video/video.mp4'
import { AiFillLeftCircle } from 'react-icons/ai'
import { AiFillRightCircle, AiFillPlayCircle } from 'react-icons/ai'

function Cau() {

    const images = [
        {
            image: Imgage2
        },
        {
            image: Imgage6
        },

    ]

    const [current, setCurrent] = useState(0)
    const length = images.length


    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }


    if (!Array.isArray(images) || images.length <= 0) {
        return null
    }

    return (
        <section className='slider'>
            <AiFillLeftCircle className='back' onClick={() => { prevSlide() }} />
            <AiFillRightCircle className='next' onClick={() => { nextSlide() }} />
            {/* <AiFillPlayCircle className='play' onClick={() => { func(true) }} /> */}

            {
                images.map((slide, index) => {
                    return (
                        <>
                            {/* <div className='imagediv' key={index}> */}
                            {index === current && (
                                // index === 0 ?
                                //     <video width="100%" height="100%" controls>
                                //         <source src={Video} type="video/mp4" />
                                //     </video>
                                //     :
                                    <img key={index} src={slide.image} alt="" className='image' />
                            )}
                            {/* </div> */}
                        </>
                    )
                })
            }
        </section>
    )
}
export default Cau