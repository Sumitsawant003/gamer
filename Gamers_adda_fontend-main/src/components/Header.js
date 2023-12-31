import React from 'react';
import logo from '../assets/web logo Resize.png'
import './css/Header.css'
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import login from '../assets/Svg login2.psd.svg'
import person from '../assets/person.jpg'
import social1 from '../assets/social_icon01.png'

export default function Header(props) {

    const [user, setUser] = useState()
    const navigate = useNavigate();
    let location = useLocation();
    const host = process.env.REACT_APP_API_REQUEST;

    const moveProgress = () => {
        props.setHeadProgress(10);
        props.setHeadProgress(100);
    }

    const burger = () => {
        document.getElementById('header_link_cont').classList.toggle("displaynone");
        document.getElementById('header_btn').classList.toggle('displaynone')
        document.getElementById('burger').firstChild.classList.toggle('burgerfirstchild')
        document.getElementById('b_second').classList.toggle('burgersecondchild')
        document.getElementById('b_four').classList.toggle('burgerfourchild')
        document.getElementById('burger').lastChild.classList.toggle('burgerthirdchild')
    }

    window.addEventListener("scroll", () => {
        var setnav = document.getElementById('setnav');
        if (setnav) {

            if (window.pageYOffset > 100) {
                document.getElementById('setnav').classList.add('header_scroll')
                document.getElementById('setnav').classList.remove('header_section')
            } else {
                document.getElementById('setnav').classList.remove('header_scroll')
                document.getElementById('setnav').classList.add('header_section')
            }
        }
    })

    const loginpage = () => {
        document.getElementById('loginsvg').classList.toggle('loginsvgwid');
        document.getElementById('crossid').classList.toggle('dis_none');
        document.getElementById('redline').classList.toggle('dis_width');

        setTimeout(() => {
            document.getElementById('loginpage').classList.toggle('loginpagewidthfull');
            document.getElementById('login_form').classList.toggle('dis_none');
        }, 500);
    }
    const showAccDe = () => {
        document.getElementById('acc_header_drop').classList.toggle('dis_none');
    }
    const LogOut = () => {
       localStorage.clear();
       navigate('/');
    }

    const userData = async () => {
       const uresponse = await fetch(`${host}/auth/getuser`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      const userid = await uresponse.json();
        setUser(userid);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            
            userData();
        }
    }, [])

    return (
        <>
            <section id='setnav' className='header_section'>
                <div className='header_sec'>
                    <div style={{ marginLeft: '45px' }}>
                        <Link to="/">
                            <img width={60} src={logo} alt="" />
                        </Link>
                    </div>
                    <div id='header_link_cont' className='header_link_cont displaynone'>
                        <div className="head_link">
                            <Link onClick={moveProgress} to="/">Home</Link>
                        </div>

                    
                        {location.pathname === '/' || location.pathname === '/esport' ||location.pathname === '/about' || location.pathname === '/more' ?
                            <div className="head_link">
                                <Link onClick={moveProgress} to="/sponsors">Explore</Link>
                            </div> :
                            <div className="head_link">
                                <Link onClick={moveProgress} to="/sponsors">Sponsors</Link>
                            </div>
                        }
                        {location.pathname === '/' || location.pathname === '/esport' ||location.pathname === '/about' || location.pathname === '/more' ?
                            <div className="head_link">
                               
                                <Link onClick={moveProgress} to="/esport">Esport</Link>
                            </div> :
                            <div className="head_link">
                                 <Link onClick={moveProgress} to="/gamers">Gamers</Link>
                            </div>
                        } 
                    </div>
                    {localStorage.getItem('token') ?
                        <div>
                            <div className='h_ac_sec' onClick={showAccDe}>
                                <div className='h_ac_img' style={{ display: 'flex' }}>
                                    <img src={person} alt="" />
                                </div>
                                <div className='h_ac_pername'>
                                    {user? user.username: 'muthu'}
                                    
                                </div>
                            </div>
                            <div id='acc_header_drop' className='h_ac_dorpdown dis_none '>
                                {user ? user.whois === "gamer"? <a href="/editgamer" style={{textDecoration:'none',color:'white'}}>   <div>Edit Profile</div></a>:
                                <a href="/editsponsor" style={{textDecoration:'none',color:'white'}}>   <div>Edit Profile</div></a> : ''}
                                
                                <div onClick={LogOut}>LogOut</div>
                            </div>

                        </div> :
                        <div id='header_btn' className='header_btn displaynone'>
                            <div id='crossid' onClick={loginpage} className='header_cross_btn dis_none' >
                                <span class="material-symbols-outlined"> close </span>
                            </div>
                            <img id='loginsvg' onClick={loginpage} className='loginsvg' src={login} />
                            <span id='redline' className='header_loing_line '></span>
                            <div id='sideline' className='newline_side dis_none'></div>
                        </div>}


                </div>
                <div id='burger' onClick={burger} className='burger'>
                    <div id='b_first'></div>
                    <div id='b_second'></div>
                    <div id='b_four'></div>
                    <div id="b_third"></div>
                </div>
            </section>

            <section id='loginpage' className='loginpage'>
                <div id='login_form' className='dis_none'>
                    <div id='crossid' onClick={loginpage} className='header_cross_btn ' >
                        <span class="material-symbols-outlined"> close </span>
                    </div>
                    <div id='sideline' className='newline_side '></div>
                    <section className="l-section " >
                        <div className="l-form-box">
                            <div className="l-form-value">
                               
                                <div>
                                    <div>
                                        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                            Are you a ?
                                        </div>
                                        <div style={{ width: '400px', display: 'flex', justifyContent: 'space-between' }}>
                                            <a href="/creategamer">
                                                <button className='btn_new'>Gamer</button>
                                            </a>
                                            <a href="/createsponsor">
                                                <button className='btn_new'>Sponsor</button>
                                            </a>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: "42px" }}>
                                            <a href="/login">
                                                <button style={{ background: 'white', color: 'black' }} className='btn_new'>Sign In</button>
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
