
import './App.css';
import Lugar from '../src/components/lugar';
import Gift from '../src/components/gift';
import Ending from './components/ending';
import Thumb from '../src/assets/Wedding/Assets/Recurso 11.png'
import Song from '../src/assets/song.mp3'
import { useEffect } from 'react';
import Fecha from './assets/Wedding/Assets/Fecha.png'



function App() {

    var countDownDate = new Date("Dec 16, 2023 13:00:00").getTime();

    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      // Output the result in an element with id="demo"
      document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      // If the count down is over, write some text 
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  

  document.querySelectorAll('a[href^="#').forEach(anchor =>{
    anchor.addEventListener("click", function(e){
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({behavior: "smooth"})
    })
  })

  return (
    <>
      <section id="parallax-1" className="hero is-fullheight">
        <div class="hero-body">
          <div class="container glass is-fluid is-desktop">
            <div className="columns has-text-centered my-6">
              <div className='column is-full '>
                <h1 className='title white tempting'>Ivette & Francisco</h1>
                <i><h2 class="subtitle futura white">“Que tu corazón este confiado en mi, pues a donde quiera que tu vayas, yo voy … ”</h2></i>
                <br></br>
                 <b><p id='demo' className='futura white '></p></b>
                 <img src={Fecha} className='thumb2'></img>

              </div>
              
            </div>
           
          </div>
        </div>
      </section>

      

      <section class="container glass is-fluid  my-6"  id="Padres">
      <div className='hero is-small'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
             
              <div className='columns'>
                <div className='column is-half'>
                  
                  <h1 class="tempting blue ">Padres de la novia</h1>
                  <img src={Thumb} className='thumb'></img>
                  <br></br>
                  <h2 class="subtitle futura gray" >Elías Valladares Ochoa </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Patricia Celis Vargas </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 
                </div>
                <div className='column is-half'>
                  <h1 class="tempting blue ">Padres del novio</h1>
                  <img src={Thumb} className='thumb'></img>
                  <br></br>
                  <h2 class="subtitle futura gray" > J. Jesús  Rosiles Aguado </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Ma. Francisca Rincón  Venegas </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 

                </div>
              </div>
            </div>
        </div>
      </div>
      </section>

      <section class="container glass is-fluid  my-6"  id="Padres">
        <div className='hero is-small'>
          <div className='hero-body'>
              <div className='container has-text-centered'>
              
                <h1 class="tempting green ">Padrinos de velación</h1>
                <img src={Thumb} className='thumb'></img>
                <div className='columns'>
                  <div className='column is-half'>
                  <img src='' className='thumb'></img>
                  <br></br>
                  <h2 class="subtitle futura gray" >Jose Ascención Muñiz</h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Laura Eugenia Rosiles Aguado </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 
                  </div>
                  <div className='column is-half'>
                  <img src='' className='thumb'></img>
                  
                  <br></br>
                  <h2 class="subtitle futura gray" >Jose Moisés Contreras Laurel </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Zaira Cristal Morfin Luna </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 

                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>



     




      
     
    <Lugar id="Lugar"></Lugar>
   
    <Gift id="Regalos"></Gift>
    <Ending id="Confirmacion"></Ending>
    
    </>
  );
}

export default App;
