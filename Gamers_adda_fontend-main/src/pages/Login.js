import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import '../components/css/Login.css'

export default function Login() {


    const navigate = useNavigate();
    let host = process.env.REACT_APP_API_REQUEST;
    const [loader, setLoader] = useState(true);


    const [credential, setCredential] = useState({ email: '', password: '' });

    const loginSubmit = async (e) => {
        setLoader(false);
        e.preventDefault();
        const response = await fetch(`${host}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credential.email, password: credential.password })
        });
        const json = await response.json();
        console.log(json);

        if (json) {
            if (json.errors) {
               console.log('error');
            } else {
                localStorage.setItem('token', json.authToken)
                setLoader(true);
                navigate('/');
            }
        }
    }

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }




    return (
        <>
            <section className="l-section">
                <div className="l-form-box">
                    <div className="l-form-value">
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                            {loader?
                          

                            <div className='form_create_user'>
                                <div>
                                    <input id="email" value={credential.email} type='text' onChange={onChange} name="email"  className='input_field' placeholder='email/ phone/ username' />
                                </div>
                                <div>
                                    <input id="password" value={credential.password} type='text' onChange={onChange} name="password"  className='input_field'  placeholder='password' />
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <a href="/">
                                        <button className='btn_new' onClick={loginSubmit} style={{ background: 'white', color: 'black' }}>Let's Go</button>
                                    </a>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', color: 'white' }}>
                                    <div>
                                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                                        <label for="vehicle1">Remainber Me</label>
                                    </div>
                                    <div>
                                        <a style={{ color: 'white' }} href="">Forget passwrod</a>
                                    </div>
                                </div>
                            </div>
                              : <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                              <div className='spinner_data'> </div>
                            </div>}

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
