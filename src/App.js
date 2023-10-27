
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

import 'https://kit.fontawesome.com/67ea4f2b34.js';



function App() {
  
  return (
    <>
      <nav className="navbar is-fixed-top is-flex-touch is-align-self-center	">
          <div className="container">
            <div className="navbar-brand ">
              <a className="tempting green navbar-item hashtag" href="../">
                Yvette & Francisco
              </a>
             </div>
             <div className='navbar-end'>
              <span className='navbar-item '>
                      <audio controls autoplay >
                        <source src={Song} type='audio/mp3'></source>
                      </audio>
                  </span>
             </div>
          </div>
        </nav>
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
