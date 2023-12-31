import React from 'react'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import logo from '../assets/web logo Resize.png'

import Header from '../components/Header';
import { useLocation } from 'react-router-dom';


export default function Articles(props) {


  let location = useLocation();
  console.log(location.pathname);

  return (
    <>

      <Header setHeadProgress={props.setProgress} />


      <section>
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












      </section>






      <Footer />
    </>
  )
}
