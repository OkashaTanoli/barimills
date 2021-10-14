import React, { useState } from 'react'
import { Link } from "react-router-dom"



function Error() {


    return (
        <div>

            {/* It is providing openPopUp === true . Lekin ye muje bhi nhi pata ke kyun de raha ha isi liya mane 
            Header me props ke zariya popup false kiya ha */}

            {/* <Header /> */}

            <div style={{width:'100%',display:'flex',height:'100vh',justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'auto'}}>
                    <p style={{fontSize:'100px',color:'gray',fontWeight:'500',lineHeight:'0px',textAlign:'center'}}>
                        404 
                    </p>
                    <p style={{fontSize:'80px',color:'gray',fontWeight:'700',lineHeight:'0px',textAlign:'center'}}>
                       Not Found
                    </p>
                    <Link style={{fontSize:'40px',margin:'100px',textDecoration:'none',color:'brown'}} to='/'>
                        Go to home
                    </Link>

                </div>

            </div>

        </div>
    )
}





export default Error
