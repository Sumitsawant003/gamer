import React from 'react'

export default function CreateSponsor() {

    setTimeout(() => {
        console.log('3min');
        document.getElementById('welcome_into').style.display = 'none';
    }, 3000);
    return (
        <>

            <section>

                <div id='welcome_into' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
                    <div style={{ textAlign: 'center', color: 'white' }}>
                        <h2>Hi Sponsor</h2>
                        <h2>Signup To Fund The Dreams Of</h2>
                        <h2>Millions Of Gamers!</h2>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div className='form_create_user'>
                        <div>
                            <input className='input_field' type="text" placeholder='Gamers User name' />
                        </div>
                        <div>
                            <input className='input_field' type="text" placeholder='Phone number' />
                        </div>
                        <div>
                            <input className='input_field' type="text" placeholder='E-mail' />
                        </div>
                        <div>
                            <input className='input_field' type="text" placeholder='Password' />
                        </div>
                        <div>
                            <input className='input_field' type="text" placeholder='Comfirm Passwrod' />
                        </div>
                        <div>
                            <input className='input_field' type="text" placeholder='Date of Birth' />
                        </div>
                        <div>
                            <input className='input_field' type="text" placeholder='Country' />
                        </div>
                        <div>
                            <a href="/sotp">

                                <button className='btn_new' style={{ background: 'white', color: 'black' }}>Let's Go</button>
                            </a>
                        </div>
                    </div>


                </div>



            </section>

        </>
    )
}
