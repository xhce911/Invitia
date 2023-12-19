import React, { Component } from 'react';
import Fecha from '../assets/BT/Fecha.png';
import Start from '../assets/BT/bby.png';

export default class cover extends Component {
  render() {
    
    var countDownDate = new Date("Jan 13, 2024 13:00:00").getTime();

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
      document.getElementById("demo").innerHTML = days + " días " + hours + " hrs. "
      + minutes + " min. " + seconds + " seg. ";
        
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
       <section id="parallax-1" className="hero is-fullheight align-center" >
        <div class="hero-body cover animate__animated animate__fadeInUp">
          <div class="container glass is-fluid is-desktop">
            <div className="columns has-text-centered">
              <div className='column is-full '>
                <img src={Start} className='thumb2'></img>
                <h1 className=' blue tempting couple my-3'> Alejandra Lourdes</h1>
                <i><h2 class="subtitle tempting white">Mi Bautizo</h2></i>
                <br></br>
                 <b><p id='demo' className=' blue tempting'></p></b>
                 <img src={Fecha} className='thumb2'></img>

              </div>
              
            </div>
           
          </div>
        </div>
      </section>
      </>
    )
  }
}
