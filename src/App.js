import logo from './logo.svg';
import './App.css';
import  Intro from '../src/components/intro';
import Lugar from '../src/components/lugar';

function App() {
  return (
    <>
    <section class="hero is-info is-large">
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
                  Padres
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

      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="pacific title">
            Mi bautizo
          </p>
          <p class="urbanist subtitle">
            23 Julio  2023
          </p>
        </div>
      </div>

     
    </section>
    <Intro></Intro>
    <Lugar></Lugar>
    
    </>
  );
}

export default App;
