
import './App.css';
import Lugar from '../src/components/lugar';
import Txt from '../src/assets/text.png';
import Gift from '../src/components/gift';
import Ending from './components/ending';
import Baby from '../src/assets/baby.png'
import Cross from '../src/assets/cross.png'
import date from '../src/assets/fecha.png'
import Papas from '../src/assets/Papas.png'
import Padrinos from '../src/assets/Padrinos.png'
import Padrino from '../src/assets/Padrino.png'
import Gallery from '../src/components/gallery'
import Song from '../src/assets/song.mp3'
function App() {

  document.querySelectorAll('a[href^="#').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"})
    })
  })

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
              </span>
            </div>
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end ">
                  <span className='navbar-item'>
                    <audio src={Song} controls />
                  </span>
                </div>
              </div>
          </div>
        </nav>
      </div>

      <section id="Home" className="hero is-fullheight ptrn my-6">
        <div class="hero-body">
          <div class="container glass is-fluid is-desktop">
            <div className="columns has-text-centered my-6">
              <div className='column is-full '>
              <img src={Cross} alt="" className='cross animate__animated animate__fadeInUp '></img>
                <i><h2 class="subtitle futura gray">“Queremos compartir contigo el bautizo de nuestro pequeño: ”</h2></i>
                
                 <img src={Baby} alt=""className='imgbby animate__animated animate__fadeInDown'></img>
                 <br></br>
                <img src={Txt} alt='' className='bbynm  animate__animated animate__fadeInUp' ></img>
                <br></br>
                <img src={date} alt='' className='date animate__animated animate__fadeInDown'></img>
                <br></br>
               
                <br></br>
              </div>
              
            </div>
           
          </div>
        </div>
      </section>

      <section class="container glass is-fluid  my-6"  id="Padres">
      <div className='hero is-small'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
            <img src={Papas}  className='thumb'></img>
                <h1 class="pacific green ">Mis Papis</h1>
                <br></br>
                <h2 class="subtitle futura gray" >Sarai Rosario Ramírez Villatoro</h2>
                <h3 className='my-2 is-2 '><b>&</b></h3>
                <h2 class="subtitle futura gray" >José Guillermo Campanur Galván</h2>
                <br></br>
                <hr class="content-divider mx-6"></hr> 
            </div>
        </div>
      </div>
      </section>

      <section class="container glass is-fluid  my-6"  id="Padres">

        <div className='hero is-small'>
          <div className='hero-body'>
              <div className='container has-text-centered'>
                    <img src={Padrino} className='thumb mt-6'></img>
                    <h2 class=" pacific mb-4 green">Padrino de presentación</h2>
                    <h3 class="futura gray">Edgar Ulises Tapia Amezcua</h3>
              </div>
          </div>
        </div>
      </section>



      <section class="container glass is-fluid  my-6"  id="Padres">
      <div className='hero is-small'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
            <img src={Padrinos} className='thumb' ></img>
                <h1 class=" pacific is-3 green">Mis Padrinos</h1>
                <br></br>
                <h2 class="subtitle futura gray">Guadalupe Mejía Galván</h2>
                <h3 className='my-2 is-2 '><b>&</b></h3>
                <h2 class="subtitle futura gray">Gabriel Ramírez Araujo</h2>
                <br></br>
                <hr class="content-divider mx-6"></hr>
            </div>
        </div>
      </div>
      </section>




      

     
    </section>
    
    <Lugar id="Lugar"></Lugar>
    <Gallery id="Gallery"></Gallery>
    <Gift id="Regalos"></Gift>
    <Ending id="Confirmacion"></Ending>
    
    </>
  );
}

export default App;
