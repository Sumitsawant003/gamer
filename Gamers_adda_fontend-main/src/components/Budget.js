import React from 'react'
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

export default function Budget() {

  const navigate = useNavigate();
  const [amount, setAmount] = useState([]);
  const [loader, setLoader] = useState(false);
  const [credential, setCredential] = useState({ amount: '', setId: '', userbio: '' });
  const host = process.env.REACT_APP_API_REQUEST;
  // const host = "http://localhost:5000";

  const addBudget = () => {
    document.getElementById('sp_add_budget').classList.toggle("disnone");
  }
  const addAmount = async () => {
    const uresponse = await fetch(`${host}/auth/getuser`, {
      method: 'GET',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    });
    const userid = await uresponse.json();
    if (userid) {
      const response = await fetch(`${host}/amount/createamount`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ amount: credential.amount, userId: userid._id })
      });
      const json = await response.json();
      navigate('/sponsorprofile');
    }
  }
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }
  const updateAmount = (id, amount) => {
    document.getElementById('sp_add_budget_update').classList.toggle("disnone");
    setCredential({ amount: amount, setId: id })
  }
  const updateAmounttoggle = () => {
    document.getElementById('sp_add_budget_update').classList.toggle("disnone");

  }
  const handleupdate = async () => {
    const response = await fetch(`${host}/amount/updateamount`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: credential.setId, amount: credential.amount })
    });
    const json = await response.json();
    navigate('/sponsorprofile');
  }
  const fetchAmount = async () => {
    const uresponse = await fetch(`${host}/auth/getuser`, {
      method: 'GET',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    });
    const userid = await uresponse.json();
    if (userid) {
      const response = await fetch(`${host}/amount/getamount`, {
        method: 'GET',
        headers: {
          'userid': userid._id
        }
      });
      const json = await response.json();
      setAmount(json);
      setLoader(true)
      const response2 = await fetch(`${host}/userbio/getbio`, {
        method: 'GET',
        headers: {
          'userid': userid._id
        }
      });
      const json2 = await response2.json();
      setCredential({ userbio: json2.userBio });
    }
  }
  useEffect(() => {
    fetchAmount();
  }, [])

  return (
    <>



      {loader ?
        <div className='sp_budget_id'>
          <p style={{ color: 'white', textAlign: 'center', width: '1000px', fontSize: '25px' }}>
            Add Budget
          </p>
          <div onClick={addBudget}>
            <div className='sp_budget_add'>
              +
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' }}>
            {amount.map((element, myid) => {
              return <div key={element} style={{ display: 'flex', cursor: "pointer", flexDirection: 'column', padding: "10px" }} onClick={() => { updateAmount(element._id, element.amount) }} >
                <img width={500} src={budgutback} style={{ opacity: '0' }} alt="" />
                <div id='sp_added_data' className='sp_add_img_here sp_edit_data'>
                  <div className='sp_edit_data_here'>
                    <span class="material-symbols-outlined">edit</span>
                    <span>Edit</span>
                  </div>
                  <img width={400} src={budgutamountback} alt="" style={{ marginTop: '30px' }} />
                  <img width={100} style={{ marginTop: '-225px' }} className='sp_repeys' src={repeys} alt="" />
                  <p style={{ marginTop: '30px' }}>Sponsored amount {element.amount}</p>
                </div>
              </div>
            })}
          </div>
        </div>
        : <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
          <div className='spinner_data'></div>
        </div>}




      <section id='sp_add_budget' className='sp_budget_add_id disnone'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='close_bio_sp'><span onClick={addBudget} class="material-symbols-outlined">close</span></div>
          <img width={500} src={budgutback} alt="" />
          <div className='sp_add_img_here'>
            <div style={{ display: 'flex' }}>

              <img width={400} src={budgutamount} alt="" />
              <input id="amount" value={credential.amount} type='text' onChange={onChange} name="amount" className='sp_add_input' placeholder='Amount' />
            </div>
            <div className='sp_add_btn'>
              <img width={100} src={budgutamountok} alt="" />
              <div onClick={addAmount}>Ok</div>
            </div>
          </div>

        </div>
      </section>

      <section id='sp_add_budget_update' className='sp_budget_add_id disnone'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className='close_bio_sp'><span onClick={updateAmounttoggle} class="material-symbols-outlined">close</span></div>
          <img width={500} src={budgutback} alt="" />
          <div className='sp_add_img_here'>
            <div style={{ display: 'flex' }}>
              <img width={400} src={budgutamount} alt="" />
              <input id="amount" value={credential.amount} type='text' onChange={onChange} name="amount" className='sp_add_input' placeholder='Amount' />
            </div>
            <div className='sp_add_btn'>
              <img width={100} src={budgutamountok} alt="" />
              <div onClick={handleupdate}>Ok</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
