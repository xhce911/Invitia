import React, { Component } from 'react'
import location from '../assets/location.png'

export default class lugar extends Component {
  render() {
    return (
      <>
      <section class="hero  is-fullheight">
        <div class="hero-body ">
            <div class="container has-text-centered ">
            
                <p class="title-p pacific">
                   Ceremonia Religiosa
                </p>
                <hr></hr>
                <p class="subtitle urbanist" >
                  Templo del espíritu santo 
                </p>
                <b><p className='urbanist date'>12:00 Hrs</p></b>
                <img src={location} className='locationimg my-2'></img>  
                <p class="title pacific my-6 title-b">
                   Recepción
                </p>
                <p class="subtitle urbanist" >
                  Campestre Bugambilias 
                </p>
                <b><p className='urbanist '>2:30 Hrs</p></b>
                <button className='button is-primary my-4 is-medium'>Abrir en Google Maps </button>
            </div>
        </div>
        </section>
            
      </>
    )
  }
}
