import React from 'react'
import { Link } from 'react-router-dom';
import '../components/css/Login.css'

import social1 from '../assets/social_icon01.png'

export default function Register() {
    return (
        <>
            <section className="l-section">
                <div className="l-form-box">
                    <div className="l-form-value">
                        <form >
                            <h2 className="l-h2">Signup</h2>
                            <div className="l-inputbox">
                                <ion-icon name="mail-outline"></ion-icon>
                                <input id="email" type='text' name="email" required />
                                <label for="">Email</label>
                            </div>
                            <div className="l-inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input id="password" type='password' name="password" required />
                                <label for="">Password</label>
                            </div>
                            <button type="submit" className="l-button">Signup</button>
                            <hr />
                            <div style={{display:'flex',justifyContent:'center', marginTop:'5px'}}>
                                <div className='log_with_google'> <img width={30} src='https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951' alt="" />Continue with Google</div>
                            </div>
                            <div style={{display:'flex',justifyContent:'center', marginTop:'5px'}}>
                                <div className='log_with_discord'> <img width={30} src={social1} alt="" />Continue with Discord</div>
                            </div>
                            <div className="l-register">
                                <p>If have a account <Link to="/login">Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </>
    )
}
