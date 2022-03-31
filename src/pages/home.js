import React from 'react'
import About from '../components/about/about'
import Banner from '../components/banner/banner'
import Products from '../components/products/products'
import Newsletter from '../components/newsletter/newsletter'

export default function HomePage() {
    return (
        <>
            <Banner />
            <About />
            <Products />
            <Newsletter />

        </>
    )
}
