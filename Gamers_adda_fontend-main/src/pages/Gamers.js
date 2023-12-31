import React from 'react'
import gamers from '../assets/gamers.png'
import bage from '../assets/bage.png'
import '../components/css/Explore.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import Header from '../components/Header'
import { useState, useEffect } from "react";

export default function Gamers(props) {

  const [user, setUser] = useState([])
  const [loader, setLoader] = useState(false);
  // const host = "http://localhost:5000";
  const host = process.env.REACT_APP_API_REQUEST;

  const userData = async () => {
    const uresponse = await fetch(`${host}/auth/getgamers`, {
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
                return <Link style={{ textDecoration: 'none' }} to={`/gamerprofile/${element._id}`}>

                <div className='new_card_sec'>
                  <div style={{ textAlign: 'center', padding: '15px' }}>
                    <img width={'35%'} src={gamers} alt="" />
                  </div>
                  <div className='nc_line'></div>
                  <div className='new_card_para'>
                    <p style={{ textAlign: 'center' }} className='nc_contant'>professional esports player | Esports manager | Tournament Organizer</p>
                    <p style={{ margin: '0', textAlign: 'center', textTransform: 'uppercase', marginTop: '20px' }}>valorant Lan event in bangalore</p>
                    <p style={{ margin: '0', textAlign: 'center' }}>11 - 12 - 2023</p>
                  </div>
                  <div className='nc_low_bage'>
                    <img src={bage} alt="" />
                  </div>
                </div>
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
