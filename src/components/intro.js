import React, { Component } from 'react'

export default class intro extends Component {
  render() {
    return (
      <section id="parallax-2" class="hero is-large ">
        <div class="hero-body">
          <div class="container">
            <div class="columns has-text-centered" >
              <div class="column is-half is-offset-one-quarter">
                <i><h2 class="subtitle urbanist">“Queremos compartir contigo el bautizo de nuestro pequeño: ”</h2></i>
                <br></br>
                <h1 class="title pacific high white ">Chaak Balthazar</h1>
                <hr class="content-divider"></hr>
              </div>
            </div>

            <div className='columns is-mobile'>
              <div className='column is-6 has-text-centered' >
                <h1 class="title pacific is-1 white">Mis padres</h1>
                <br></br>
                <h2 class="subtitle urbanist">Sarai Rosario Ramírez Villatoro</h2>
                <h2 class="subtitle urbanist">José Guillermo Campanur Galván</h2>
                <br></br>
                <hr class="content-divider"></hr>
              </div>
              
              <div className='column is-6 has-text-centered' >
                <h1 class="title pacific is-1 white">Mis padrinos</h1>
                <br></br>
                <h2 class="subtitle urbanist">Guadalupe Mejía Galván</h2>
                <h2 class="subtitle urbanist">Gabriel Ramírez Araujo</h2>
                <br></br>
                <hr class="content-divider"></hr>
              </div>
                
            </div>
          </div>
        </div>
      </section>


    )
  }
}
