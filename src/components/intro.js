import React, { Component } from 'react'
import Baby from '../assets/baby.png'
import Cross from '../assets/cross.png'

export default class intro extends Component {
  render() {
    return (
      <section id="parallax-2" className="hero is-large  ">
        <div class="hero-body">
          <div class="container glass">
            <div class="columns has-text-centered" >
              <div class="column is-half is-offset-one-quarter">
                <img src={Cross} className='cross animate__animated animate__fadeInUp '></img>
                <i><h2 class="subtitle urbanist                                                                white">“Queremos compartir contigo el bautizo de nuestro pequeño: ”</h2></i>
                <img src={Baby} className='imgbby animate__animated animate__fadeInDown'></img>
                <br></br>
                
                <hr class="content-divider"></hr>
              </div>
            </div>

            <div className='columns  is-desktop'>
              <div className='column is-half has-text-centered' >
                <h1 class="title pacific is-1 green">Mis papis</h1>
                <br></br>
                <h2 class="subtitle urbanist white" >Sarai Rosario Ramírez Villatoro</h2>
                <h2 class="subtitle urbanist white" >José Guillermo Campanur Galván</h2>
                <br></br>
                <hr class="content-divider mx-6"></hr>
              </div>
              
              <div className='column is-half has-text-centered' >
                <h1 class="title pacific is-1 green">Mis padrinos</h1>
                <br></br>
                <h2 class="subtitle urbanist white">Guadalupe Mejía Galván</h2>
                <h2 class="subtitle urbanist white">Gabriel Ramírez Araujo</h2>
                <br></br>
                <hr class="content-divider mx-6"></hr>
              </div>
                
            </div>
          </div>
        </div>
      </section>


    )
  }
}
