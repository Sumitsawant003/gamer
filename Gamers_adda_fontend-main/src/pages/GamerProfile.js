import React from 'react'
import bioback from "../assets/sponsorbioback.png"
import Footer from '../components/Footer'
import gamers from '../assets/gamers.png'
import "../components/css/Profile.css"
import { useState, useEffect } from "react";
import Header from '../components/Header'
import { useParams } from 'react-router-dom';
import budgutamountback from "../assets/sp_budget_back_amount.png"

export default function GamerProfile(props) {

  const [count, setcount] = useState(1);
  let { gamerid } = useParams();
  const [bio, setBio] = useState();
  const [event, setEvent] = useState([]);
  const [achievement, setAchievement] = useState([]);
  const host = process.env.REACT_APP_API_REQUEST;
  // const host = "http://localhost:5000";
  const [loader, setLoader] = useState(false);

  const navigateToCont = (e) => {
    console.log(e);
    setcount(e)
  }
  const fetchBio = async () => {
    const response = await fetch(`${host}/userbio/getbio`, {
      method: 'GET',
      headers: {
        'userid': gamerid
      }
    });
    const json = await response.json();
    setBio(json[0].userBio);
    console.log(json);
    setLoader(true)
  }

  const fetchAchievement = async () => {
    const response = await fetch(`${host}/ach/getexp`, {
      method: 'GET',
      headers: {
        'userid': gamerid
      }
    });
    const json = await response.json();
    setAchievement(json);
    setLoader(true)
  }

  const fetchEvent = async () => {
    const response = await fetch(`${host}/event/getexp`, {
      method: 'GET',
      headers: {
        'userid': gamerid
      }
    });
    const json = await response.json();
    setEvent(json);
    setLoader(true)
  }



  useEffect(() => {
    fetchBio();
    fetchAchievement();
    fetchEvent();
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
        </div>


        <div style={{ textAlign: 'center', marginTop: '15px' }}>
          <div>
            <img width={100} src={gamers} alt="" />
          </div>
          <div style={{ color: 'white', fontSize: '31px', fontWeight: '900' }}>
            Muthu
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
            <div onClick={() => { navigateToCont(2) }} className={count === 2 ? 'profile_nav_white profile_header' : 'profile_header'}   >
              Achievements
            </div>
            <div onClick={() => { navigateToCont(3) }} className={count === 3 ? 'profile_nav_white profile_header' : 'profile_header'}   >
              Events
            </div>
            <div onClick={() => { navigateToCont(4) }} className={count === 4 ? 'profile_nav_white profile_header' : 'profile_header'}   >
              Message
            </div>
          </div>
        </div>







        {count === 1 ? <div>
          {loader ?
            <div className='sp_bio'>
              <img src={bioback} width={800} alt="" />
              <p className='sp_bio_contant'>
                {bio}
              </p>
            </div> : <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
              <div className='spinner_data'> </div>
            </div>}
        </div> : <></>}


        {count === 2 ? <div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>

            {achievement.map((element, myid) => {
              return <div style={{ width: '450px', padding: '20px', margin: '10px' }} key={myid}>

                <div id='sp_Ex_added_data' className='sp_add_img_here sp_edit_data' style={{ marginTop: '10px' }}>
                  <div className='sp_edit_data_here' style={{ opacity: '0' }}>
                    <span class="material-symbols-outlined">edit</span>
                    <span>Edit</span>
                  </div>
                  <img width={400} src={budgutamountback} alt="" />
                  <p style={{ marginTop: '-225px', fontSize: '30px' }} >PDF</p>
                  <p className='ex_summary_cont' style={{ marginTop: '30px' }}>{element.summary}</p>
                </div>

              </div>
            })}
          </div>
        </div> : <></>}

        {count === 3 ? <div>
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>

            {event.map((element, myid) => {
              return <div style={{ width: '450px', padding: '20px', margin: '10px' }} key={myid}>

                <div id='sp_Ex_added_data' className='sp_add_img_here sp_edit_data' style={{ marginTop: '10px' }}>
                  <div className='sp_edit_data_here' style={{ opacity: '0' }}>
                    <span class="material-symbols-outlined">edit</span>
                    <span>Edit</span>
                  </div>
                  <img width={400} src={budgutamountback} alt="" />
                  <p style={{ marginTop: '-225px', fontSize: '30px' }} >PDF</p>
                  <p className='ex_summary_cont' style={{ marginTop: '30px' }}>{element.summary}</p>
                </div>

              </div>
            })}
          </div>
        </div> : <></>}

        {count === 4 ? <div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p style={{ color: 'white', textAlign: 'center', width: '1000px', fontSize: '25px' }}>
              Massage
            </p>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div> : <></>}




        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>





      </section>
      <Footer />


    </>
  )
}
