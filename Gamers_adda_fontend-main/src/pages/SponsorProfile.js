import React from 'react'
import Footer from '../components/Footer'
import sponsors from '../assets/web logo Resize.png'
import "../components/css/Profile.css"
import { useState, useEffect } from "react";
import bioback from "../assets/sponsorbioback.png"
import budgutback from "../assets/sp_budget.png"
import budgutamount from "../assets/sp_budget_a.png"
import budgutamountok from "../assets/sp_budget_ok.png"
import budgutamountback from "../assets/sp_budget_back_amount.png"
import repeys from "../assets/rupeys.png"
import expectations from "../assets/sp_expection_back.png"
import Header from '../components/Header'
import { useParams } from 'react-router-dom';

export default function SponsorProfile(props) {

  const [amount, setAmount] = useState([]);
  const [exp, setExp] = useState([]);
  const [credential, setCredential] = useState({ userbio: '' });
  let { sponsorid } = useParams();
  const host = process.env.REACT_APP_API_REQUEST;
  // const host = "http://localhost:5000";
  const [loader, setLoader] = useState(false);


  const [count, setcount] = useState(1);

  const navigateToCont = (e) => {
    setcount(e)
  }

  const fetchAmount = async () => {

    const response = await fetch(`${host}/amount/getamount`, {
      method: 'GET',
      headers: {
        'userid': sponsorid
      }
    });
    const json = await response.json();
    setAmount(json);
  }

  const fetchData = async () => {
    const response = await fetch(`${host}/userbio/getbio`, {
      method: 'GET',
      headers: {
        'userid': sponsorid
      }
    });
    const json = await response.json();
    setCredential({ userbio: json[0].userBio });
    setLoader(true)
  }

  const fetchExpectation = async () => {
    const response = await fetch(`${host}/expec/getexp`, {
      method: 'GET',
      headers: {
        'userid': sponsorid
      }
    });
    const json = await response.json();
    setExp(json);
    setLoader(true)
  }


  useEffect(() => {
    fetchData();
    fetchAmount();
    fetchExpectation();
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
            <img width={200} src={sponsors} alt="" />
          </div>
          <div style={{ color: 'white', fontSize: '31px', fontWeight: '900' }}>
            Gamer Adda
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
              Budget
            </div>
            <div onClick={() => { navigateToCont(3) }} className={count === 3 ? 'profile_nav_white profile_header' : 'profile_header'}>
              Expectations
            </div>
            <div onClick={() => { navigateToCont(4) }} className={count === 4 ? 'profile_nav_white profile_header' : 'profile_header'}>
              Message
            </div>
          </div>
        </div>





        {count === 1 ? <div>
          {loader ?
            <div className='sp_bio'>
              <img src={bioback} width={800} alt="" />
              <p className='sp_bio_contant'>
                {credential.userbio}
              </p>
            </div> : <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
              <div className='spinner_data'> </div>
            </div>}
        </div> : <></>}


        {count === 2 ? <div>
          {amount ?
            <div className='sp_budget_id'>
              <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
                {amount.map((element, myid) => {
                  return <div key={element} style={{ display: 'flex', flexDirection: 'column', padding: "10px", cursor: 'pointer' }} >
                    <img width={500} src={budgutback} alt="" style={{ opacity: '0' }} />
                    <div id='sp_added_data' className='sp_add_img_here '>
                      <div className='sp_edit_data_here' style={{ opacity: '0' }}>
                        <span class="material-symbols-outlined">edit</span>
                        <span>Edit</span>
                      </div>
                      <img width={400} src={budgutamountback} alt="" />
                      <img width={100} style={{ marginTop: '-225px' }} className='sp_repeys' src={repeys} alt="" />
                      <p style={{ marginTop: '30px' }}>Sponsored amount {element.amount}</p>
                    </div>
                  </div>
                })}
              </div>
            </div>
            : <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
              <div className='spinner_data'> </div>
            </div>}
        </div> : <></>}


        {count === 3 ? <div>

          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>

            {exp.map((element, myid) => {
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
          <br />
          <br />
          <br />
        </div>
      </section>
      <Footer />


    </>
  )
}
