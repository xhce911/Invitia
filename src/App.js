
import './App.css';
import  Photo from '../src/components/Photo';
import Lugar from '../src/components/lugar';
import Txt from '../src/assets/text.png';
import Gift from '../src/components/gift';
import Ending from './components/ending';
import Baby from '../src/assets/baby.png'
import Cross from '../src/assets/cross.png'
import date from '../src/assets/fecha.png'



function App() {
  return (
    <>
    <section className="hero ptrn is-fullheight">
      <div className="hero-head">
        <nav className="navbar is-fixed-top my-4">
          <div className="container">
            <div className="navbar-brand">
              <a className="pacific green navbar-item hashtag" href="../">
                #Baltachaak
              </a>
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

      <section id="" className="hero is-fullheight ptrn my-6">
        <div class="hero-body">
          <div class="container glass is-fluid is-desktop">
            <div className="columns has-text-centered my-6">
              <div className='column is-full '>
                <img src={Txt} alt='' className='bbynm  animate__animated animate__fadeInUp' ></img>
                <br></br>
                <img src={date} alt='' className='date animate__animated animate__fadeInDown'></img>
              </div>
              
            </div>
            <div class="columns has-text-centered" >
              <div class="column is-half is-offset-one-quarter">
                <img src={Cross} alt="" className='cross animate__animated animate__fadeInUp '></img>
                <i><h2 class="subtitle futura gray">“Queremos compartir contigo el bautizo de nuestro pequeño: ”</h2></i>
                <img src={Baby} alt=""className='imgbby animate__animated animate__fadeInDown'></img>
                <br></br>
                <div className='is-full'>
                  <h2 class="title pacific mb-4 green">Padrino de presentación</h2>
                  <h3 class="futura gray">Edgar Ulises Tapia Amezcua</h3>
                </div>
              </div>
            </div>
           
            <div className='columns has-text-centered'>
              
              <div className='column is-half ' >
                <h1 class="title pacific is-1 green">Mis papis</h1>
                <br></br>
                <h2 class="subtitle futura gray" >Sarai Rosario Ramírez Villatoro</h2>
                <h2 class="subtitle futura gray" >José Guillermo Campanur Galván</h2>
                <br></br>
                <hr class="content-divider mx-6"></hr>
              </div>
              
              <div className='column is-half ' >
                <h1 class="title pacific is-1 green">Mis padrinos</h1>
                <br></br>
                <h2 class="subtitle futura gray">Guadalupe Mejía Galván</h2>
                <h2 class="subtitle futura gray">Gabriel Ramírez Araujo</h2>
                <br></br>
                <hr class="content-divider mx-6"></hr>
              </div>
                
            </div>
          </div>
        </div>
      </section>

     
    </section>
    <Photo number="1"></Photo>
    <Lugar></Lugar>
    <Photo number="2"></Photo>
    <Photo number="3"></Photo>
    <Gift></Gift>
    <Photo number="4"></Photo>
    <Ending></Ending>
    
    </>
  );
}

export default App;
