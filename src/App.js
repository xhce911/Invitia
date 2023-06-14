
import './App.css';
import  Intro from '../src/components/intro';
import Lugar from '../src/components/lugar';
import Txt from '../src/assets/text.png';
import Gift from '../src/components/gift';
import Ending from './components/ending';


function App() {
  return (
    <>
    <section className="hero ptrn is-fullheight">
      <div className="hero-head">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
             
              <span className="navbar-burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" className="navbar-menu">
              <div className="navbar-end">
                <a className="navbar-item is-active">
                  Portada
                </a>
                <a className="navbar-item">
                  Padres y Padrinos
                </a>
                <a className="navbar-item">
                  Lugar
                </a>
                <a className="navbar-item">
                  Regalos
                </a>
                
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={Txt} className='bbynm  animate__animated animate__fadeInUp animate__delay-2s'></img>
          <p className="urbanist sub animate__animated animate__fadeInDown animate__delay-2s">
            Sábado · Julio · 23 · 2023
          </p>
        </div>
      </div>

     
    </section>
    <Intro></Intro>
    <Lugar></Lugar>
    <Gift></Gift>
    <Ending></Ending>
    
    </>
  );
}

export default App;
