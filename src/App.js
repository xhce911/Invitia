
import './App.css';
import  Intro from '../src/components/intro';
import Lugar from '../src/components/lugar';
import Txt from '../src/assets/text.png';
import Gift from '../src/components/gift';

function App() {
  return (
    <>
    <section class="hero ptrn is-large">
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
             
              <span class="navbar-burger" data-target="navbarMenuHeroB">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroB" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active">
                  Portada
                </a>
                <a class="navbar-item">
                  Padres y Padrinos
                </a>
                <a class="navbar-item">
                  Lugar
                </a>
                <a class="navbar-item">
                  Regalos
                </a>
                
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <img src={Txt} className='bbynm'></img>
          <p className="urbanist sub">
            Sábado · Julio · 23 · 2023
          </p>
        </div>
      </div>

     
    </section>
    <Intro></Intro>
    <Lugar></Lugar>
    <Gift></Gift>
    
    </>
  );
}

export default App;
