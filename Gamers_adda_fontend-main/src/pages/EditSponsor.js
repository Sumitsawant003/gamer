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
import { useNavigate, Link } from 'react-router-dom';
import Userbio from '../components/Userbio';
import Budget from '../components/Budget';
import Expectation from '../components/Expectation';



export default function EditSponsor(props) {
  const navigate = useNavigate();
  const [count, setcount] = useState(1);
  const [amount, setAmount] = useState([]);
  const [credential, setCredential] = useState({ amount: '', setId: '', userbio: '' });
  const host = process.env.REACT_APP_API_REQUEST;
  // const host = "http://localhost:5000";


  const navigateToCont = (e) => {
    console.log(e);
    setcount(e)
  }







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

          </div>
        </div>


        {count === 1 ? <Userbio /> : <></>}
        {count === 2 ? <Budget /> : <></>}
        {count === 3 ? <Expectation /> : <></>}

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
