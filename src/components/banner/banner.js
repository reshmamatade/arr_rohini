
import React from 'react'
import { Carousel } from 'react-bootstrap'
import './banner.scss'


export default function Banner() {
    return (
        <div className='banner'>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerchilli.jpg' height="auto" width="100%" alt="Img1" />
                    <Carousel.Caption>
                        <div className='txt'> <h1>CHILLI <br />POWDER</h1>
                            <h6>ROHINI FOOD Products</h6></div>
                    </Carousel.Caption>
                    <Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerhaldi.jpg' height="auto" width="100%" alt="Img2" />
                    <Carousel.Item>
                        <img src='./images/ARRLOGO.png' height="auto" width="5px" alt="Img" />
                    </Carousel.Item>
                    <Carousel.Caption>
                        <div className='txt'>
                            <h1>TURMERIC<br /> POWDER</h1>
                            <h6>ROHINI FOOD Products</h6>
                        </div>
                    </Carousel.Caption>
                    <Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerVermicelli.jpg' height="auto" width="100%" alt="Img3" />
                    <Carousel.Caption>
                        <div className='txt'>
                            <h1>ROASTED <br /> VERMICELLI</h1>
                            <h6>ROHINI FOOD Products</h6>
                        </div>
                    </Carousel.Caption>
                    <Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerWheat.jpg' height="auto" width="100%" alt="Img3" />
                    <Carousel.Caption>
                        <div className='txt'>
                            <h1>CHAKKI<br /> ATTA</h1>
                            <h6>ROHINI FOOD Products</h6>
                        </div>
                    </Carousel.Caption>
                    <Carousel.Caption><img className="logo" src='./images/ARRLOGO.png' /></Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>
    )
}
