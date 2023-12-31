import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import logo from '../assets/web logo Resize.png'
import bage from '../assets/bage.png'
import '../components/css/Explore.css'

export default function Explore(props) {
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


        <div style={{display: 'flex', justifyContent:'center' }}>

       
        <div style={{width:'1400px', display: 'flex', flexWrap: 'wrap',justifyContent:'space-around' }}>

          <div className='new_card_sec'>
            <div style={{ textAlign: 'center', padding: '15px' }}>
              <img width={'70%'} src={logo} alt="" />
            </div>
            <div className='nc_line'></div>
            <div className='new_card_para'>
              <p className='nc_contant'>we are a web 2 gaming company from bangalore. we have a profanation esports team. we are building a community of 50k members.</p>
              <p style={{ margin: '0', textAlign: 'center', textTransform: 'uppercase', marginTop: '20px' }}>Ready To Sponsor</p>
              <p style={{ margin: '0', textAlign: 'center' }}>3,00,000</p>
            </div>
            <div className='nc_low_bage'>
              <img src={bage} alt="" />
            </div>
          </div>
          <div className='new_card_sec'>
            <div style={{ textAlign: 'center', padding: '15px' }}>
              <img width={'70%'} src={logo} alt="" />
            </div>
            <div className='nc_line'></div>
            <div className='new_card_para'>
              <p className='nc_contant'>we are a web 2 gaming company from bangalore. we have a profanation esports team. we are building a community of 50k members.</p>
              <p style={{ margin: '0', textAlign: 'center', textTransform: 'uppercase', marginTop: '20px' }}>Ready To Sponsor</p>
              <p style={{ margin: '0', textAlign: 'center' }}>3,00,000</p>
            </div>
            <div className='nc_low_bage'>
              <img src={bage} alt="" />
            </div>
          </div>
          <div className='new_card_sec'>
            <div style={{ textAlign: 'center', padding: '15px' }}>
              <img width={'70%'} src={logo} alt="" />
            </div>
            <div className='nc_line'></div>
            <div className='new_card_para'>
              <p className='nc_contant'>we are a web 2 gaming company from bangalore. we have a profanation esports team. we are building a community of 50k members.</p>
              <p style={{ margin: '0', textAlign: 'center', textTransform: 'uppercase', marginTop: '20px' }}>Ready To Sponsor</p>
              <p style={{ margin: '0', textAlign: 'center' }}>3,00,000</p>
            </div>
            <div className='nc_low_bage'>
              <img src={bage} alt="" />
            </div>
          </div>
          <div className='new_card_sec'>
            <div style={{ textAlign: 'center', padding: '15px' }}>
              <img width={'70%'} src={logo} alt="" />
            </div>
            <div className='nc_line'></div>
            <div className='new_card_para'>
              <p className='nc_contant'>we are a web 2 gaming company from bangalore. we have a profanation esports team. we are building a community of 50k members.</p>
              <p style={{ margin: '0', textAlign: 'center', textTransform: 'uppercase', marginTop: '20px' }}>Ready To Sponsor</p>
              <p style={{ margin: '0', textAlign: 'center' }}>3,00,000</p>
            </div>
            <div className='nc_low_bage'>
              <img src={bage} alt="" />
            </div>
          </div>
          <div className='new_card_sec'>
            <div style={{ textAlign: 'center', padding: '15px' }}>
              <img width={'70%'} src={logo} alt="" />
            </div>
            <div className='nc_line'></div>
            <div className='new_card_para'>
              <p className='nc_contant'>we are a web 2 gaming company from bangalore. we have a profanation esports team. we are building a community of 50k members.</p>
              <p style={{ margin: '0', textAlign: 'center', textTransform: 'uppercase', marginTop: '20px' }}>Ready To Sponsor</p>
              <p style={{ margin: '0', textAlign: 'center' }}>3,00,000</p>
            </div>
            <div className='nc_low_bage'>
              <img src={bage} alt="" />
            </div>
          </div>
          <div className='new_card_sec'>
            <div style={{ textAlign: 'center', padding: '15px' }}>
              <img width={'70%'} src={logo} alt="" />
            </div>
            <div className='nc_line'></div>
            <div className='new_card_para'>
              <p className='nc_contant'>we are a web 2 gaming company from bangalore. we have a profanation esports team. we are building a community of 50k members.</p>
              <p style={{ margin: '0', textAlign: 'center', textTransform: 'uppercase', marginTop: '20px' }}>Ready To Sponsor</p>
              <p style={{ margin: '0', textAlign: 'center' }}>3,00,000</p>
            </div>
            <div className='nc_low_bage'>
              <img src={bage} alt="" />
            </div>
          </div>






        </div>
        </div>



      </section>


      <Footer />
    </>
  )
}
