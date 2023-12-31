import React from 'react'

export default function Otp() {
    return (
        <>
            <section>

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div>
                        <div style={{color:'white',textAlign:'center'}}>
                            <h2>Let Confrim Your Phone Number and Email :/</h2>
                        </div>

                        <div className='form_create_user'>
                            <div>
                                <input className='input_field' type="text" placeholder='Phone Otp' />
                            </div>
                            <div style={{ color: 'white' }}>
                                2:00
                            </div>
                            <div>
                                <input className='input_field' type="text" placeholder='Email Otp' />
                            </div>
                            <div>
                                <a href="/">
                                    <button className='btn_new' style={{ background: 'white', color: 'black' }}>Ready to Play</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>



            </section>


        </>
    )
}
