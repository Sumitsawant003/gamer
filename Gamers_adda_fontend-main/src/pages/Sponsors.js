import React from 'react'
import logo from '../assets/web logo Resize.png'
import scard from '../assets/Sponsod Card 1-1.png'
import '../components/css/Explore.css'
import Footer from '../components/Footer'
import '../components/css/Header.css'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { useState, useEffect } from "react";



export default function Sponsors(props) {

  const [user, setUser] = useState([])
  const [loader, setLoader] = useState(false);
  // const host = "http://localhost:5000";
  const host = process.env.REACT_APP_API_REQUEST;

  const userData = async () => {
    const uresponse = await fetch(`${host}/auth/getsponsor`, {
      method: 'GET',
    });
    const userid = await uresponse.json();
    setUser(userid);
    setLoader(true)
  }

  useEffect(() => {
    userData();
  }, [])

  return (
    <>
      <Header setHeadProgress={props.setProgress} />

      <section>

        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          {loader ?
            <div style={{ width: '1400px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>

              {user.map((element) => {
                return <Link style={{ textDecoration: 'none' }} to={`/sponsorprofile/${element._id}`}>
                  <img className='card_sponsor' style={{ borderRadius: '15px', margin: '15px' }} width={400} src={scard} alt="" />
                </Link>
              })}

            </div>
            : <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
              <div className='spinner_data'></div>
            </div>}
        </div>
         
             
      </section>

      <Footer />

    </>
  )
}
