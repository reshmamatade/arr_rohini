import React from 'react'
import './newsletter.scss'
export default function Newsletter() {
    return (
        <>
            <div className='info'><img className='back-img' alt='bg' src="http://arrrohinifoodproducts.com/wp-content/uploads/2021/03/Footer15-h19.jpg" height="auto" width="100%" >
            </img>

            </div>
            <div className='news'>
                <div>Newsletter Sign Up</div>
                <p>Sign up for our email and be the first who know our special offers! Furthermore, we will give a 15% discount on the next order after you sign up.</p>
                <input className='Email' placeholder='Your email address'></input>
                <p className='form-btn'></p>
                <button type='submit' >
                    <span>SUBSCRIBE</span>
                </button>

            </div>
        </>
    )
}


