import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Massages from "./Massages";
import Char1 from "../assets/char1.png";
import Char2 from "../assets/char2.png";
import Char3 from "../assets/char3.png";
import homebackground from "../assets/homebackground.mp4";
import { useState } from "react";
import "../components/css/Home.css";
import "../components/css/style.css";
import Rank from "./Rank";



export default function Home(props) {
  const [count, setcount] = useState(1);

  const navigateToCont = (e) => {
    console.log(e);
    setcount(e);
  };
  const unmutedvideo = () => {
    console.log("asdf");
    document.getElementById("myvideo").removeAttribute("muted");
  };

  return (
    <>
      <Massages />
      <Header setHeadProgress={props.setProgress} />
      <section>
        <div>
          <video id="myvideo" autoPlay loop muted style={{ width: "100%" }}>
            <source src={homebackground} type="video/mp4" />
          </video>
          <div onClick={unmutedvideo}></div>
        </div>

        <div>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img src={Char3} width={200} alt="" />
          </div>
          <div>
            <div className="ab_sect_info">
              {count === 1 ? (
                <>
                  {" "}
                  <h3>About</h3>
                  <p
                    style={{
                      fontSize: "20px",
                      padding: "5px 30px",
                      margin: "0",
                    }}
                  >
                    Gamers Adda provides Gamers and Sponsors with a platform to
                    connect and organise Gaming Events, Tournaments and more.
                    Gamers can find sponsors to organize their
                    events/tournaments or Sponsors can filter through Gamers’
                    profiles and find suitable candidates to represent their
                    company. At Gamers Adda, we want to eradicate the struggle
                    of Gamers having to run around and find sponsors for Gaming
                    events/tournaments they want to throw regardless of the
                    budget or size.{" "}
                  </p>
                </>
              ) : (
                <></>
              )}

              {count === 2 ? (
                <>
                  {" "}
                  <h3>Gamers</h3>
                  <p
                    style={{
                      fontSize: "20px",
                      padding: "5px 30px",
                      margin: "0",
                    }}
                  >
                    Gamers are one-half of Gamers Adda. We want Gamers to get
                    together and share their joy for Gaming through Events and
                    Tournaments that bring millions of gamers together. After
                    all, Sharing is Caring. Gaming is one of the largest
                    communities and bringing Gamers together is our goal. Gamers
                    Adda will make organising Gaming Events and Tournaments
                    seamless and effortless for all Gamers alike.{" "}
                  </p>
                </>
              ) : (
                <></>
              )}

              {count === 3 ? (
                <>
                  {" "}
                  <h3>Sponsors</h3>
                  <p
                    style={{
                      fontSize: "20px",
                      padding: "5px 30px",
                      margin: "0",
                    }}
                  >
                    Sponsors complete the other half at Gamers Adda. Sponsors
                    will breathe life into the Gaming Events/Tournaments through
                    funding. In return, Sponsors can demand certain marketing
                    benefits that will increase their brand exposure. We make it
                    easier for Sponsors to filter through Gamers and their
                    Events that will best fit their budget, scale and exposure.{" "}
                  </p>
                </>
              ) : (
                <></>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <div
                  onClick={() => {
                    navigateToCont(1);
                  }}
                  className={
                    count === 1 ? "about_line ab_sect_line" : "about_line"
                  }
                ></div>
                <div
                  onClick={() => {
                    navigateToCont(2);
                  }}
                  className={
                    count === 2 ? "about_line ab_sect_line" : "about_line"
                  }
                ></div>
                <div
                  onClick={() => {
                    navigateToCont(3);
                  }}
                  className={
                    count === 3 ? "about_line ab_sect_line" : "about_line"
                  }
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div>
            <br />
            <br />
            <br/>
          <section style={{ marginTop: "105px;", marginBottom: "130px;" }}>
            <div>
              <div class="contant-tag-line-container">
                <p style={{ color: "#34fffd", fontSize: "16px;" }}>
                  OUR TOP STREAMERS
                </p>
                <div class="contant-line-head">TOP RATED STREAMERS</div>
                <div class="design-line"></div>
              </div>

              <div class="stemer-img-container">
                <div class="char-holder">
                  <div class="char-holder-img">
                    <img src="https://play-ground-ebon.vercel.app/Img/streamers05.png" alt="" />
                  </div>
                  <div class="char-holder-name">Nova</div>
                </div>

                <div class="char-holder">
                  <div class="char-holder-img">
                    <img src="https://play-ground-ebon.vercel.app/Img/streamers02.png" alt="" />
                  </div>
                  <div class="char-holder-name">Fury</div>
                </div>
                <div class="char-holder">
                  <div class="char-holder-img">
                    <img src="https://play-ground-ebon.vercel.app/Img/streamers03.png" alt="" />
                  </div>
                  <div class="char-holder-name">Blaze</div>
                </div>
                <div class="char-holder">
                  <div class="char-holder-img">
                    <img src="https://play-ground-ebon.vercel.app/Img/streamers04.png" alt="" />
                  </div>
                  <div class="char-holder-name">Shadow</div>
                </div>
              </div>
            </div>
          </section>
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

        <Rank/>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "1400px",
            }}
          >
            <div>
              <img src={Char1} width={300} alt="" />
            </div>

            <div>
              <img src={Char2} width={300} alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
