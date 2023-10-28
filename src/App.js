
import './App.css';
import Lugar from '../src/components/lugar';
import Gift from '../src/components/gift';
import Ending from './components/ending';

import Song from '../src/assets/song.mp3'
import { useEffect } from 'react';

import Photo from './components/Photo';
import Cover from './components/cover.js';
import Special from './components/special';
import Banner from './components/banner.js';
import Footer from './components/footer';





function App() {
  
  return (
    <>
      <nav className="navbar is-top barra glass">
          <div className="container ">
            <div className="navbar-brand ">
              <a className="tempting blue navbar-item " href="../">
                Ivette & Javier
              </a>
             </div>
             <div className='navbar-end px-4'>
              <span className='navbar-item '>
                      <audio controls  className='player' autoplay>
                        <source src={Song} type='audio/mp3'></source>
                      </audio>
                  </span>
             </div>
          </div>
        </nav>
        <div className='deco1'></div>
     <Cover></Cover>
     <Special></Special>
     <Photo></Photo>
     <Lugar id="Lugar"></Lugar>
     <Gift id="Regalos"></Gift>
     <Ending id="Confirmacion"></Ending>
     <Footer></Footer>
    
    </>
  );
}

export default App;
