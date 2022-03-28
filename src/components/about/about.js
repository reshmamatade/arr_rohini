import React from 'react'
import './about.scss'
export default function About() {
    return (
        <div className='container about'>
            <div className='row'>
                <div className='col-md-6'><h2 className='heading'>Rohini Food Products</h2>
                    <h2 className='sub-heading'>From the House of A.R.R</h2>
                    <div className='text'>The A.R.R. Group was founded in the year 1947, by late Sri. A.R.Ramaswamy, Ex. Member of Legislative Assembly, Tamil Nadu and Ex.Chairman of Kumbakonam Municipality. Rohini Food Products was founded by Mr. Raman Subramanian and Mrs. Mahesh Raman, Grand Daughter of Sri.A.R.Ramaswamy. It was one of the Intrapreneurship initiatives from the House of A.R.R to extend the product portfolio from Tobbacco products to Food products.
                    </div>
                    <button className='btn btn-primary about-button'>CLICK HERE</button>
                </div>
                <div className='col-md-6'> <img className='image' src='https://arrrohinifoodproducts.com/wp-content/uploads/2022/01/THMBOOLAM-Product.png' /></div>
            </div>
        </div>


    )
}
