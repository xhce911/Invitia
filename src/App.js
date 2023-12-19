
import './App.css';
import Lugar from '../src/components/lugar';
import Gift from '../src/components/gift';
import Ending from './components/ending';

import { useEffect } from 'react';

import Photo from './components/Photo';
import Cover from './components/cover.js';
import Special from './components/special';
import Banner from './components/banner.js';
import Footer from './components/footer';
import Navbar from './components/navbar';





function App() {
  
  return (
    <>
      <Navbar />
      <div className='container-full principal'>
        <Cover></Cover>
        <Special></Special>
        <Lugar id="Lugar"></Lugar>
        <Gift id="Regalos"></Gift>
        <Ending id="Confirmacion"></Ending>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
