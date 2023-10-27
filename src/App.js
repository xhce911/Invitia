
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
      <nav className="navbar is-top barra">
          <div className="container">
            <div className="navbar-brand ">
              <a className="tempting blue navbar-item " href="../">
                Yvette & Francisco
              </a>
             </div>
             <div className='navbar-end px-6'>
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
