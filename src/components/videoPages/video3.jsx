import React, { useState } from 'react'
import Video from '../../video/video1.mp4'
import './video.css'


function Video3() {


    return (
        <div class='Video1Page' style={{height:'100vh',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>
            <video width="85%" height="100%" controls autoPlay loop muted>
                <source src={Video} type="video/mp4" />
            </video>
        </div>
    )

}

export default Video3
