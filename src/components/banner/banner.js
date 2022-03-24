import React from 'react'
import { Carousel } from 'react-bootstrap'
import './banner.scss'
import bootstrap from 'bootstrap'

export default function Banner() {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerchilli.jpg' height="650px" width="100%" alt="Img1" />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerhaldi.jpg' height="650px" width="100%" alt="Img2" />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerVermicelli.jpg' height="650px" width="100%" alt="Img3" />
                </Carousel.Item>
                <Carousel.Item interval={4000}>
                    <img src='./images/bannerWheat.jpg' height="650px" width="100%" alt="Img3" />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
