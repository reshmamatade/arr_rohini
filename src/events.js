import React, { useState } from 'react'
import { Form } from 'react-bootstrap'

export default function Events() {
    const [name, setName] = useState('')
    const submit = (e) => {
        e.preventDefault();
        console.log("name", name)
    }
    const btnSubmit = false

    const renderBtn = () => {
        if (btnSubmit) {
            return <button className='btn btn-primary' onClick={(e) => submit(e)}>Submit</button>
        } else {
            return <button className='btn btn-outline-primary' >Cancel</button>
        }
    }
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div >
                        <Form.Group>
                            <Form.Label>
                                Enter Name
                            </Form.Label>
                            <Form.Control type='text' placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className='mt-3' >
                            {renderBtn()} </Form.Group>

                    </div>
                </div>
            </div>
        </div >
    )
}
