import React, { useState, useEffect } from 'react'
import expcont from "../../assets/expcont.png"
import expectationback from "../../assets/expectationback.png"
import budgutamountback from "../../assets/sp_budget_back_amount.png"
import expsub from "../../assets/expsubmit.png"
import expectations from "../../assets/sp_expection_back.png"
import { useNavigate, Link } from 'react-router-dom';

export default function GamerAchievement() {


  const [credential, setCredential] = useState({ contant: '', id: '' });
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');
  const [exp, setExp] = useState([]);
  const host = process.env.REACT_APP_API_REQUEST;
  const [loader, setLoader] = useState(false);
  // const host = "http://localhost:5000";
  const navigate = useNavigate();


  const addExpection = () => {
    document.getElementById('sp_add_expec').classList.toggle("disnone");
  }
  const addExpectionpdf = () => {
    document.getElementById('sp_add_expdf').classList.toggle("disnone");
  }
  const addPdf = () => {
    document.getElementById('sp_add_expec').classList.toggle("disnone");
    document.getElementById('sp_add_expdf').classList.toggle("disnone");
  }
  const editPdfContant = (eId, summary) => {
    document.getElementById('sp_add_expdfupdate').classList.toggle("disnone");
    setCredential({ contant: summary, id: eId });
  }
  const editPdfContantUpdate = async () => {
    document.getElementById('sp_add_expdfupdate').classList.toggle("disnone");

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gamer_adda");
    data.append("cloud_name", "dw5zqoz0n");
    try {
      if (image === null) {
        return console.log('work..');
      }

      const res = await fetch('https://api.cloudinary.com/v1_1/dw5zqoz0n/image/upload', {
        method: "POST",
        body: data
      })

      const cloudData = await res.json();
      setUrl(cloudData.url);

      const response = await fetch(`${host}/ach/expupdate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ pdfUrl: cloudData.url, summary: credential.contant, id: credential.id })
      });
      const json = await response.json();
      navigate('/sponsorprofile');
    } catch (error) {
      console.log(error);
    }
  }
  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value })
  }
  const fetchExpectation = async () => {
    const uresponse = await fetch(`${host}/auth/getuser`, {
      method: 'GET',
      headers: {
        'auth-token': localStorage.getItem('token')
      }
    });
    const userid = await uresponse.json();
    console.log(userid);
    if (userid) {
      const response = await fetch(`${host}/ach/getexp`, {
        method: 'GET',
        headers: {
          'userid': userid._id
        }
      });
      const json = await response.json();
      setExp(json);
      setLoader(true)
      console.log(json);
    }
  }
  const addPdfData = async () => {
    document.getElementById('sp_add_expdf').classList.toggle("disnone");

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "gamer_adda");
    data.append("cloud_name", "dw5zqoz0n");

    try {
      if (image === null) {
        return console.log('work..');
      }

      const res = await fetch('https://api.cloudinary.com/v1_1/dw5zqoz0n/image/upload', {
        method: "POST",
        body: data
      })

      const cloudData = await res.json();
      setUrl(cloudData.url);
      console.log(cloudData);

      const uresponse = await fetch(`${host}/auth/getuser`, {
        method: 'GET',
        headers: {
          'auth-token': localStorage.getItem('token')
        }
      });
      const userid = await uresponse.json();
      if (userid) {
        const response = await fetch(`${host}/ach/createexp`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ pdfUrl: cloudData.url, summary: credential.contant, userId: userid._id })
        });
        const json = await response.json();
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchExpectation();
  }, [])



  return (
    <>

      {loader ?
        <div className='sp_budget_id'>
          <p style={{ color: 'white', textAlign: 'center', width: '1000px', fontSize: '20px' }}>
            Add Your PDF Document
          </p>
          <div onClick={addExpection}>
            <div className='sp_budget_add'>
              +
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }}>

            {exp.map((element, myid) => {
              return <div style={{ width: '450px', padding: '20px', margin: '10px' }} key={myid}>
                {/* <a href={element.pdfUrl} target='_blank' style={{ textDecoration: 'none' , color:'black'}}> */}
                <div id='sp_Ex_added_data' className='sp_add_img_here sp_edit_data' style={{ marginTop: '10px' }}>
                  <div className='sp_edit_data_here' style={{ cursor: 'pointer' }} onClick={() => editPdfContant(element._id, element.summary)}>
                    <span class="material-symbols-outlined">edit</span>
                    <span>Edit</span>
                  </div>
                  <img width={400} src={budgutamountback} alt="" />
                  <p style={{ marginTop: '-225px', fontSize: '30px' }} >PDF</p>
                  <p className='ex_summary_cont' style={{ marginTop: '30px' }}>{element.summary}</p>
                </div>
                {/* </a> */}
              </div>
            })}

          </div>

        </div>
        : <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
          <div className='spinner_data'></div>
        </div>}



      <section id='sp_add_expec' className='sp_budget_add_id disnone'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img width={700} src={expectations} alt="" />
          <div className='sp_add_img_here' style={{ color: "black", marginTop: '-344' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '52%' }}>

              <div><h3>Notification</h3></div>
              <div style={{ marginTop: '6px', cursor: 'pointer' }} onClick={addExpection}><span class="material-symbols-outlined">
                close
              </span></div>
            </div>
            <div>
              <p>Add summary about your expectations</p>
            </div>
            <div>
              <button onClick={addPdf}>Ok</button>
            </div>
          </div>
        </div>
      </section>

      <section id='sp_add_expdf' className='sp_budget_add_id disnone'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img width={500} src={expectationback} alt="" />
          <div className='sp_add_img_here' style={{ color: "black", marginTop: '-390px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '52%' }}>

              <div><h3 style={{ opacity: '0' }}>Notification</h3></div>
              <div style={{ marginTop: '6px', cursor: 'pointer' }} onClick={addExpectionpdf}><span class="material-symbols-outlined">
                close
              </span></div>
            </div>
            <div>
              <p >ONLY PDF file</p>
              <input type="file" id='file' onChange={(e) => setImage(e.target.files[0])} name="file" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ position: 'absolute' }} width={400} src={expcont} alt="" />
              <textarea className='exp_input_para' id="contant" value={credential.contant} type='text' onChange={onChange} name="contant" placeholder='Add summary here' />
            </div>
            <div >
              <img width={200} src={expsub} alt="" />

              <p className='exp_para_submit' onClick={addPdfData}>Submit</p>
            </div>
          </div>
        </div>
      </section>

      <section id='sp_add_expdfupdate' className='sp_budget_add_id disnone'>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img width={500} src={expectationback} alt="" />
          <div className='sp_add_img_here' style={{ color: "black", marginTop: '-390px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '52%' }}>

              <div><h3 style={{ opacity: '0' }}>Notification</h3></div>
              <div style={{ marginTop: '6px', cursor: 'pointer' }} onClick={editPdfContant}><span class="material-symbols-outlined">
                close
              </span></div>
            </div>
            <div>
              <p >ONLY PDF file</p>
              <input type="file" id='file' onChange={(e) => setImage(e.target.files[0])} name="file" />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <img style={{ position: 'absolute' }} width={400} src={expcont} alt="" />
              <textarea className='exp_input_para' id="contant" value={credential.contant} type='text' onChange={onChange} name="contant" placeholder='Add summary here' />
            </div>
            <div >
              <img width={200} src={expsub} alt="" />

              <p className='exp_para_submit' onClick={editPdfContantUpdate}>Submit</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
