import React from 'react'
import './css/Footer.css'
import logo from '../assets/web logo Resize.png'
import social1 from '../assets/social_icon01.png'
import social2 from '../assets/social_icon02.png'
import social3 from '../assets/social_icon03.png'
import social4 from '../assets/social_icon04.png'


export default function Footer() {
    return (
        <>

            <section>

                <div className='set_upper_footer'>
                    <footer className='set_footer'>
                        <div className='footer_col_1'>
                            <div className='f_icon_sec'>
                                <img width={70} src={logo} alt="" />
                                <div>
                                    <b>Gamers Adda</b>
                                </div>
                            </div>
                            <div style={{ paddingRight: '10px' }}>
                                <p>Gamer Adda Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, excepturi!</p>
                            </div>
                            <div>
                                <div>
                                    Connect with Us -- 	&gt; 	&gt;
                                </div>
                                <div style={{ display: 'flex', marginTop: '10px' }}>
                                    <img className="footer-icon" src={social1} alt="" />
                                    <img className="footer-icon" src={social2} alt="" />
                                    <img className="footer-icon" src={social3} alt="" />
                                    <img className="footer-icon" src={social4} alt="" />
                                </div>
                            </div>

                        </div>
                        <div className='footer_col_2'>
                            <div className='footer_link_head'>
                                <b>Quick Link</b>
                            </div>
                            <div className='footer_links'>
                                <a href="">Home</a>
                                <a href="">Explore</a>
                                <a href="">Esport</a>
                                <a href="">About</a>
                                <a href="">More</a>
                            </div>
                        </div>
                        <div className='footer_col_3'>
                            <div className='footer_link_head'>
                                <b>SUPPORTS</b>
                            </div>
                            <div className='footer_links'>
                                <a href="">Privacy</a>
                                <a href="">Help</a>
                                <a href="">Setting</a>
                                <a href="">Policy</a>
                                <a href="">T&C</a>

                            </div>
                        </div>
                        <div className='footer_col_4'>
                            <div className='footer_link_head'>
                                <b>NEWSLETTER</b>
                            </div>
                            <div>
                                <p>Subscribe our newsletter to get our latest update & newsconsectetur</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <input className="newletterst" placeholder="Enter email address" type="text" />
                                <img className="newletterbtn" src="https://raw.githubusercontent.com/imamangupta/Play-Ground/main/Img/sendemail.webp" alt="" />
                            </div>
                        </div>
                    </footer>
                </div>
                <div className='set_upper_copy_right'>

                <div className='footer_copy_right'>
                    COPYRIGHT © 2023 - ALL RIGHTS RESERVED BY GAMER ADDA
                </div>
                </div>

            </section>
        </>
    )
}
