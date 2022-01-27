import React, { useState } from 'react'
import './main.css';
import '../smallcomponents/caurosel.css'
import Img1 from '../../images/terry3.jpg'
import Img2 from '../../images/Hospitality Towels.jpg'
import Img3 from '../../images/Wash Cloth.jpg'
import Img4 from '../../images/Kitchen.jpg'
import Img5 from '../../images/Bath Robes.jpg'
import Img6 from '../../images/Beach Towels.jpg'
import Img7 from '../../images/Jersey Bed Linen.jpg'
// import Img8 from '../../images/Automative.jpg'
import '../smallcomponents/responsive.css'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { Link } from "react-router-dom"
import { AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram, AiOutlineClose } from 'react-icons/ai'
import Cau from '../smallcomponents/caurosel'
import SwipeToSlide from '../smallcomponents/imageCaurosel/imagecaurosel'
import AllBusiness from '../smallcomponents/allbusiness'
import Header from '../smallcomponents/header'
import Footer from '../smallcomponents/footer'
import SusImage from '../../images/sustainability.jpg'
import AutoPlay from '../smallcomponents/videoSliders/videoslider'




const setItems = (text, fun, Active, acText, setImage, image) => {
    fun(text)
    Active(acText)
    setImage(image)
}

function Main() {




    const texts = {
        terry: 'Bari produces high quality Dobby and Jacquard Terry Towels with various fibers. Which include: Cotton, Modal & Bamboo blends. The towels are produced with special attributes, finished at a great value in promotional, mid-tier and exclusive categories.',
        hospitality: 'White, Dyed, Yarn Dyed in Jacquard and Dobby, dyed in VAT and reactive dyes are produced for institutional and hospitality clients stitched on our double needle automatic longitudinal stitching machines.',
        wash: 'Bari produces a variety of high quality White, Dyed, Yarn Dyed, Jacquard. Wash packs are produced for institutional as well as retailer segments of the market.',
        kitchen: 'Bari can produced an array of Kitchen towels in Jacquard, Dobby and Prints covering Flat weaves and Terry Fabric. With our in-house design team we develop design for the customers to choose or take inspiration from.',
        bath: 'Bari can produce a vast design of  bathrobes in different weight and styles, primarily being serviced in Europe but at times extend to North America.',
        beach: 'Beach towels produced at Bari Mills are rated top amongst retailers and consumers for their intrigued designs, absorbancy and light weights.',
        // automative: 'Bari Mills have a wide product range when it comes to Automotive Towels. We provide ultra soft and non abrasive microfiber cloth that ensures surface pretection.',
        jersy: 'Bari can produced all types of Knitted sheets and garments of various knitted weaves and weights. Keeping the comfort of the comsumer our top priority, we excell at delivering the best.',

    }

    const [getBathCollText, setBathCollText] = useState(texts.terry)
    const [getActive, setActive] = useState('terry')
    const [getImage, setImage] = useState(Img1)
    const [openPopUp, setOpenPopUp] = useState(false)


    return (
        <>

            <div className='mainDiv'>



                <div className='popUp' style={{ display: `${openPopUp === false ? 'none' : 'flex'} `, justifyContent: 'center' }}>
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
                                                    <Link to='/kitchen-towel-oven-mitts & pot-holder' style={{ textDecoration: 'none' }}>
                                                        <div className='popUpFirstBtn'>
                                                            <div className='popUpStyleDiv'></div>
                                                            Oven Mitts & Pot Holder
                                                        </div>
                                                    </Link>
                                                    {/* <Link to='/kitchen-towel-pot-holders' style={{ textDecoration: 'none' }}>
                                                        <div className='popUpSecondBtn'>
                                                            <div className='popUpStyleDiv'></div>
                                                            Pot Holder
                                                        </div>
                                                    </Link> */}
                                                </div>
                                                :
                                                false
                            }

                        </div>
                    </div>
                </div>

                <Header />
                <Cau />
                {/* <div className='sliderDownVideo' style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '50px',position:'relative' }}>
                    <video style={{margin:'20px',boxShadow:'0px 0px 20px black',borderRadius:'10px'}} width="80%" height="70%" loop autoPlay muted >
                        <source src={Video} type="video/mp4" />
                    </video>
                </div> */}
                <div className='bathCollection'>
                    <div className='firstDivBathColl'>
                        <div className='bathCollTextDiv'>
                            <div>
                                <p id='bath' style={{ fontFamily: 'okasha', color: '#4a4a4a', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>Product</p>
                                <p id='collection' style={{ fontFamily: 'okasha', color: 'white', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>Collection</p>
                            </div>
                            <div className='options'>
                                <div className={getActive === 'terry' ? 'active' : ''} onClick={() => { setItems(texts.terry, setBathCollText, setActive, 'terry', setImage, Img1) }}>Terry Towels</div>
                                <div className={getActive === 'hospitality' ? 'active' : ''} onClick={() => { setItems(texts.hospitality, setBathCollText, setActive, 'hospitality', setImage, Img2) }}>Hospitality Towels</div>
                                <div className={getActive === 'wash' ? 'active' : ''} onClick={() => { setItems(texts.wash, setBathCollText, setActive, 'wash', setImage, Img3) }}>Wash Cloth</div>
                                <div className={getActive === 'kitchen' ? 'active' : ''} onClick={() => { setItems(texts.kitchen, setBathCollText, setActive, 'kitchen', setImage, Img4) }}>Kitchen Towels</div>
                                <div className={getActive === 'bath' ? 'active' : ''} onClick={() => { setItems(texts.bath, setBathCollText, setActive, 'bath', setImage, Img5) }}>Bath Robes</div>
                                <div className={getActive === 'beach' ? 'active' : ''} onClick={() => { setItems(texts.beach, setBathCollText, setActive, 'beach', setImage, Img6) }}>Beach Towels</div>
                                {/* <div className={getActive === 'automative' ? 'active' : ''} onClick={() => { setItems(texts.automative, setBathCollText, setActive, 'automative', setImage, Img7) }}>Automotive Towels</div> */}
                                <div className={getActive === 'jersy' ? 'active' : ''} onClick={() => { setItems(texts.jersy, setBathCollText, setActive, 'jersy', setImage, Img7) }}>Jersey Bed Linen</div>
                            </div>
                        </div>
                        <div className='textDiv'>
                            <p className='texting'>
                                {getBathCollText}
                            </p>
                            {
                                getActive === 'terry' || getActive === 'hospitality' || getActive === 'wash' || getActive === 'kitchen' ?
                                    <div onClick={() => { setOpenPopUp(true) }} className='exploreBtn'>
                                        EXPLORE
                                    </div>
                                    :
                                    <Link to={
                                        getActive === 'bath' ? '/bath-robe'
                                            :
                                            getActive === 'beach' ? '/beach-towel'
                                                :
                                                getActive === 'automative' ? '/automative-towel'
                                                    :
                                                    getActive === 'jersy' ? '/jersey-bed-linen'
                                                        :
                                                        false
                                    } style={{ textDecoration: 'none' }}>
                                        <div className='exploreBtn'>
                                            EXPLORE
                                        </div>
                                    </Link>
                            }

                        </div>
                    </div>
                    <div className='secondDivBathColl'>
                        <img src={getImage} style={{ height: '100%', width: '100%' }} />
                    </div>
                </div>

                <AllBusiness />







                <div className='certDiv' style={{ marginTop: '70px' }}>
                    <div className='certificate' style={{ fontSize: '80px', color: 'gray', textAlign: 'center', fontWeight: '800', fontFamily: 'okasha' }}>
                        Certifications
                    </div>

                    <div className='swipeToSlideDiv' style={{ width: '100%', overflow: 'hidden', marginTop: '70px' }}>
                        <div className='swipeToSlideFull'>
                            <SwipeToSlide />
                        </div>
                        {/* <div className='swipeToSlideMid'>
                            <SwipeToSlide1200 />
                        </div>
                        <div className='swipeToSlideSmall'>
                            <SwipeToSlide780 />
                        </div> */}
                    </div>
                </div>


                <div className='res'>
                    <div className='susSecondDiv'>
                        <div id='susText' style={{ paddingTop: '15px', paddingLeft: '40px', paddingRight: '40px' }}>
                            <p id='bathLastFirstPage' style={{ fontFamily: 'okasha', color: '#4a4a4a', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>Sustainability</p>
                            {/* <p id='collectionLastFirstPage' style={{ fontFamily: 'okasha', color: 'white', fontSize: '80px', fontWeight: 'bold', lineHeight: '10px' }}>Sustainability</p> */}
                            <p id='collectionLastFirstPage' style={{ fontFamily: 'okasha', color: 'white', fontSize: '80px', fontWeight: 'bold', lineHeight: '0px' }}>At Bari</p>
                            <p className='susText'>
                                We	strongly	believe	in	creating value and	ensuring the	betterment	of	communities,
                                environment	and	the	society	at	large	through	sustainable	initiatives.	In	our	efforts	towards
                                sustaining	the	environment, Bari	Mills	is	continuously working	towards	becoming	an
                                environmentally friendly and	socially responsible	company	by	adopting the	best	practices
                                necessary	to	ensure	a	greener	society.
                            </p>
                            <Link to='sustainability' style={{ textDecoration: 'none' }}>
                                <div className='knowBtn'>
                                    KNOW MORE
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='susFirstDiv'>
                        <img src={SusImage} height='100%' width='100%' />
                    </div>
                </div>
                <div style={{ width: '100%', overflow: 'hidden' }}>
                    <div className='AutoPlayVideo'>
                        <AutoPlay />
                    </div>
                </div>




                <div className='socialLastDiv'>
                    <div>
                        <div>
                            <p className='socialLastText'>Social</p>
                        </div>
                        <div className='socialLastDivIcons' style={{ display: 'flex' }}>
                            <a href="https://www.facebook.com/barimills.pk"><div><FaFacebookF className='iconsLast' size='23' /></div></a>
                            {/* <div><AiFillYoutube className='iconsLast' size='23' /></div> */}
                            {/* <div><AiOutlineTwitter className='iconsLast' size='23' /></div> */}
                            <a href="https://www.instagram.com/bari.mills/?hl=en"><div><AiOutlineInstagram className='iconsLast' size='23' /></div></a>
                            <a href="https://www.linkedin.com/company/m-y-bari-mills-pvt-ltd/"> <div><FaLinkedinIn className='iconsLast' size='23' /></div></a>
                        </div>
                    </div>
                </div>
                <Footer />

            </div>
        </>
    )
}

export default Main;
