import './App.css';
import Esport from './pages/Esport';
import Explore from './pages/Explore';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import More from './pages/More';
import About from './pages/About';
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Gamers from './pages/Gamers';
import Sponsors from './pages/Sponsors';
import Articles from './pages/Articles';
import Buy from './pages/Buy';
import GamerProfile from './pages/GamerProfile';
import SponsorProfile from './pages/SponsorProfile';
import EsportPlayer from './pages/EsportPlayer';
import logo from './assets/web logo Resize.png'
import CreateGamers from './pages/CreateGamers';
import Otp from './pages/Otp';
import Welcome from './pages/Welcome';
import CreateSponsor from './pages/CreateSponsor';
import Sotp from './pages/Sotp';
import EditSponsor from './pages/EditSponsor';
import EditGamer from './pages/EditGamer';

function App() {

  const [progress, setProgress] = useState(0);

  const increasePro = (progress) => {
    setProgress(progress);
  }
 

  // window.addEventListener("scroll", () => {
  //   var backbtn = document.getElementById('backbtn');
  //   if (window.pageYOffset > 100) {
  //     backbtn.classList.add('active');
  //   } else {
  //     backbtn.classList.remove('active');
  //   }
  // })

  return (
    <>

      <LoadingBar
        color='white'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      {/* <div className="backbtn" id="backbtn">
        <a href="#"><span className="material-symbols-outlined">expand_less	</span></a>
      </div> */}

     



      <Routes>

        <Route path='/' element={<>
          <Home setProgress={increasePro} />
        </>} />

        <Route path='/explore' element={<>
          <Explore setProgress={increasePro} />
        </>} />
        <Route path='/esport' element={<>
          <Esport setProgress={increasePro} />
        </>} />
        <Route path='/about' element={<>
          <About setProgress={increasePro} />
        </>} />
        <Route path='/more' element={<>
          <More setProgress={increasePro} />
        </>} />

        <Route path='/esportplayer' element={<>
          <EsportPlayer setProgress={increasePro} />
        </>} />


        <Route path='/login' element={<>
          <Login />
        </>} />

        <Route path='/login' element={<>
          <Login />
        </>} />

        <Route path='/creategamer' element={<>
          <CreateGamers />
        </>} />

        <Route path='/createsponsor' element={<>
          <CreateSponsor />
        </>} />
        <Route path='/otp' element={<>
          <Otp />
        </>} />
        <Route path='/sotp' element={<>
          <Sotp />
        </>} />
        <Route path='/welcome' element={<>
          <Welcome />
        </>} />




        <Route path='/gamers' element={<>
          <Gamers setProgress={increasePro} />
        </>} />
        <Route path='/sponsors' element={<>
          <Sponsors setProgress={increasePro} />
        </>} />
        <Route path='/articles' element={<>
          <Articles setProgress={increasePro} />
        </>} />
        <Route path='/buy' element={<>
          <Buy setProgress={increasePro} />
        </>} />

        <Route path='/gamerprofile/:gamerid' element={<>
          <GamerProfile setProgress={increasePro} />
        </>} />

        <Route path='/sponsorprofile/:sponsorid' element={<>
          <SponsorProfile setProgress={increasePro} />
        </>} />
        <Route path='/editsponsor' element={<>
          <EditSponsor setProgress={increasePro} />
        </>} />
        <Route path='/editgamer' element={<>
          <EditGamer setProgress={increasePro} />
        </>} />





      </Routes>

    </>
  );
}

export default App;
