import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import player1 from '../assets/player1.png'
import { Link } from 'react-router-dom';


export default function Esport(props) {
  return (
    <>
      <Header setHeadProgress={props.setProgress} />



      <section>
        <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '114px', color: 'white' }}>
          <div style={{ width: '900px' }}>
            Secured first place in the 2022 Fortnite World Cup Solo Championship, earning a $3 million prize. Led my team to victory in the 2021 League of Legends World Championship, becoming world champions.
          </div>
        </div>

        <div style={{  marginTop: '30px' }}>

          <div style={{textAlign:'center'}}>
            <Link to='/esportplayer'>

            <img style={{ margin: '20px' }} width={300} src={player1} alt="" />
            </Link>
            <img style={{ margin: '20px' }} width={300} src={player1} alt="" />
            <img style={{ margin: '20px' }} width={300} src={player1} alt="" />
            <img style={{ margin: '20px' }} width={300} src={player1} alt="" />
          </div>
          <div style={{textAlign:'center'}}>
            <img style={{ margin: '20px', marginRight: '150px' }} width={300} src={player1} alt="" />
            <img style={{ margin: '20px' }} width={300} src={player1} alt="" />
          </div>

          <div style={{textAlign:'center'}}>
            <img style={{ margin: '20px' }} width={300} src={player1} alt="" />
          </div>




        </div>
      </section>





      <Footer />
    </>
  )
}
