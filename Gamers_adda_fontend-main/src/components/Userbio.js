import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate, Link } from 'react-router-dom';
import bioback from "../assets/sponsorbioback.png";
import './css/Userbio.css'

export default function Userbio() {
    const navigate = useNavigate();
    const host = process.env.REACT_APP_API_REQUEST;
    // const host = "http://localhost:5000";
    const [credential, setCredential] = useState({ userbio: '' });
    const [loader, setLoader] = useState(false);

    const editBio = () => {
        document.getElementById('sp_editbio').classList.toggle("disnone");
    }
    const submitBio = async () => {
        const uresponse = await fetch(`${host}/auth/getuser`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        const userid = await uresponse.json();
        if (userid) {
            const response = await fetch(`${host}/userbio/createbio`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ userBio: credential.userbio, userId: userid._id })
            });
            const json = await response.json();
            navigate('/sponsorprofile');
        }
        document.getElementById('sp_editbio').classList.toggle("disnone");
    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
    const fetchData = async () => {
        const uresponse = await fetch(`${host}/auth/getuser`, {
            method: 'GET',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        const userid = await uresponse.json();
        if (userid) {
            const response = await fetch(`${host}/userbio/getbio`, {
                method: 'GET',
                headers: {
                    'userid': userid._id
                }
            });
            const json = await response.json();
            setCredential({ userbio: json[0].userBio });
            setLoader(true);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {loader?
                <div className='sp_bio'>
                    <img src={bioback} width={800} alt="" />
                    <div className='userbio_pen_logo' onClick={editBio}>
                        <span class="material-symbols-outlined" style={{ fontSize: '50px' }}>edit</span>
                    </div>
                    <p className='sp_bio_contant'>
                        {credential.userbio}
                    </p>
                </div>
                :  <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
                <div className='spinner_data'> </div>
            </div>}

            <section id='sp_editbio' className='sp_budget_add_id disnone'>
                <div className='close_bio_sp'><span onClick={editBio} class="material-symbols-outlined">close</span></div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={bioback} width={800} alt="" />
                    <div className='sp_userbio_contant'>
                        <textarea id="userbio" value={credential.userbio} onChange={onChange} name="userbio" type="text" />
                        <button onClick={submitBio}>submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}
