import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from "react";
import gamer from '../assets/gamers.png'
import Userbio from '../components/Userbio';
import GamerBio from '../components/edit_gamer/GamerBio';
import GamerAchievement from '../components/edit_gamer/GamerAchievement';
import GamerEvent from '../components/edit_gamer/GamerEvent';

export default function EditGamer(props) {
  const [count, setcount] = useState(1);
  const [user, setUser] = useState()
  const host = process.env.REACT_APP_API_REQUEST;

  const navigateToCont = (e) => {
    setcount(e)
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
     userData();
 }, [])

  return (
    <>
      <Header setHeadProgress={props.setProgress} />
      <div>
        here edit gamer
      </div>

      <section>
        <div>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <div>
            <img width={100} src={gamer} alt="" />
          </div>
          <div style={{ color: 'white', fontSize: '31px', fontWeight: '900' }}>
            {user? user.username: '-'}
          </div>
          <div style={{ marginTop: '15px' }}>
            <img style={{ borderRadius: '6px' }} width={100} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="" />
          </div>
        </div>

        <div className='profile_section'>
          <div className='profile_sec'>

            <div onClick={() => { navigateToCont(1) }} className={count === 1 ? 'profile_nav_white profile_header' : 'profile_header'}   >
              Bio
            </div>
            <div onClick={() => { navigateToCont(2) }} className={count === 2 ? 'profile_nav_white profile_header' : 'profile_header'}>
              ACHIEVEMENTS
            </div>
            <div onClick={() => { navigateToCont(3) }} className={count === 3 ? 'profile_nav_white profile_header' : 'profile_header'}>
              EVENTS
            </div>

          </div>
        </div>

        {count === 1 ? <GamerBio/> : <></>}
        {count === 2 ? <GamerAchievement/> : <></>}
        {count === 3 ? <GamerEvent/>: <></>}

      </section>

    </>
  )
}
