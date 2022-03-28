import React from 'react'
import './products.scss'

export default function Products() {
    return (
        <div>
            <h1>
                Shop by <span>Products</span>
            </h1>
            <div className="heading-section">
                <div className="content">
                    <div className="image-info">
                        <img className='image' src='https://arrrohinifoodproducts.com/wp-content/uploads/2021/10/GREEN.jpg' />
                        <div className="Text">
                            <h1>CHAKKI ATTA</h1>
                            <p>ARR Rohini Food Products</p>
                        </div>
                    </div>

                    <div className="image-info">
                        <img className='image' src='https://arrrohinifoodproducts.com/wp-content/uploads/2021/10/REdd.jpg' />
                        <div className="Text">
                            <h1>VERMICELLI</h1>
                            <p>ARR Rohini Food Products</p>
                        </div>
                    </div>
                </div>

                <div className="content">
                    <div className="image-info">
                        <img className='image' src='https://arrrohinifoodproducts.com/wp-content/uploads/2021/10/Red.jpg' />
                        <div className="Text">
                            <h1>CHILLI  POWDER</h1>
                            <p>ARR Rohini Food Products</p>
                        </div>
                    </div>

                    <div className="image-info">
                        <img className='image' src='https://arrrohinifoodproducts.com/wp-content/uploads/2021/10/Yellow.jpg' />
                        <div className="Text">
                            <h1>TURMERIC POWDER</h1>
                            <p>ARR Rohini Food Products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
