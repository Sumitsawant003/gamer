import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/web logo Resize.png'

import login from '../assets/Svg login2.psd.svg'
import social1 from '../assets/social_icon01.png'

export default function AddHeader(props) {


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
    return (
        <>

            <section id='setnav' className='header_section'>
                <div className='header_sec'>
                    <div style={{marginLeft:'45px'}}>
                        <Link to="/">
                            <img width={60} src={logo} alt="" />
                        </Link>
                    </div>
                    <div id='header_link_cont' className='header_link_cont displaynone'>
                        <div className="head_link">
                            <Link  onClick={moveProgress} to="/">Home</Link>
                        </div>
                        <div className="head_link">
                            <Link  onClick={moveProgress} to="/sponsors">Sponsors</Link>
                        </div>
                        <div className="head_link">
                            <Link  onClick={moveProgress} to="/gamers">Gamers</Link>
                        </div>
                        <div className="head_link">
                            <Link  onClick={moveProgress} to="/buy">Buy</Link>
                        </div>
                        <div className="head_link">
                            <Link  onClick={moveProgress} to="/articles">Articles</Link>
                        </div>
                    </div>
                    <div id='header_btn' className='header_btn displaynone'>
                        <div id='crossid' onClick={loginpage} className='header_cross_btn dis_none' >
                            <span class="material-symbols-outlined"> close </span>
                        </div>
                        <img id='loginsvg' onClick={loginpage} className='loginsvg'  src={login} />
                        <span id='redline' className='header_loing_line '></span>
                        <div id='sideline' className='newline_side dis_none'></div>
                    </div>
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

                    <div onClick={loginpage} style={{ position: 'fixed', top: '23px', right: '31px', cursor: 'pointer' }}><span class="material-symbols-outlined">
                        close
                    </span></div>
                    <section className="l-section " >

                        <div className="l-form-box">
                            <div className="l-form-value">

                                {/* <form >
                                    <h2 className="l-h2">Login</h2>
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
                                    <div className="l-forget">
                                        <label for=""><a href="#">Forget Password</a></label>
                                    </div>
                                    <button type="submit" className="l-button">Log in</button>

                                    <hr />



                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                                        <div className='log_with_google'> <img width={30} src='https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=43951' alt="" />Continue with Google</div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
                                        <div className='log_with_discord'> <img width={30} src={social1} alt="" />Continue with Discord</div>
                                    </div>
                                    <div className="l-register">
                                        <p>Don't have a account <Link to="/signup">SignUP</Link></p>
                                    </div>
                                </form> */}

                                <div>
                                    <div>
                                        <div style={{textAlign:'center',marginBottom:'40px'}}>
                                            Are you a ?
                                        </div>
                                        <div style={{width:'400px', display:'flex',justifyContent:'space-between'}}>
                                            <a href="/creategamer">
                                            <button className='btn_new'>Gamer</button>
                                            </a>
                                            <a href="/creategamer">
                                            <button className='btn_new'>Sponsor</button>
                                            </a>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'center',marginTop:"42px"}}>
                                        <a href="/welcome">
                                            <button style={{background:'white',color:'black'}} className='btn_new'>Sign In</button>
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
