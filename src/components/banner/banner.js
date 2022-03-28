
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './banner.scss'

import { motion } from 'framer-motion'
import Fade from 'react-reveal/Fade';

export default function Banner() {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <motion.img transition={{ ease: "easeOut", duration: 2 }} src='./images/bannerchilli.jpg' height="auto" width="100%" alt="Img1" />
                    <Carousel.Caption>
                        <div className='txt'> <Fade right><h1>CHILLI <br />POWDER</h1>
                            <h6>ROHINI FOOD Products</h6></Fade></div>
                    </Carousel.Caption>
                    <Fade left><Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption></Fade>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <motion.img animate={{}} src='./images/bannerhaldi.jpg' height="auto" width="100%" alt="Img2" />
                    <Carousel.Item>
                        <img src='./images/ARRLOGO.png' height="auto" width="5px" alt="Img" />
                    </Carousel.Item>
                    <Carousel.Caption>
                        <div className='txt'><Fade right>
                            <h1>TURMERIC<br /> POWDER</h1>
                            <h6>ROHINI FOOD Products</h6>
                        </Fade></div>
                    </Carousel.Caption>
                    <Fade left><Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption></Fade>

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <motion.img animate={{}} src='./images/bannerVermicelli.jpg' height="auto" width="100%" alt="Img3" />
                    <Carousel.Caption>
                        <div className='txt'><Fade right>
                            <h1>ROASTED <br /> VERMICELLI</h1>
                            <h6>ROHINI FOOD Products</h6>
                        </Fade></div>
                    </Carousel.Caption>
                    <Fade left><Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption></Fade>

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <motion.img animate={{}} src='./images/bannerWheat.jpg' height="auto" width="100%" alt="Img3" />
                    <Carousel.Caption>
                        <div className='txt'><Fade right>
                            <h1>CHAKKI<br /> ATTA</h1>
                            <h6>ROHINI FOOD Products</h6>
                        </Fade></div>
                    </Carousel.Caption>
                    <Fade left><Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption></Fade>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}
