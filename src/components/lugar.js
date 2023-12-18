import React, { Component } from 'react'
import Reception from '../assets/BT/Recepción.png'
import Iglesia from '../assets/BT/iglesia.png'


export default class lugar extends Component {
  render() {
    return (
      <>
      <section class="hero  is-fullheight " id={this.props.id}>
        <div class="hero-body">
            <div class="container  has-text-centered ">
                <div className='columns '>
                  <div className='column is-half gifta py-6'>
                  <img src={Iglesia} className='thumb2' ></img>
                      <p class=" pacific green py-4">
                        Ceremonia Religiosa
                      </p>
                      <p class="subtitle futura mt-4 white" >
                          Parroquia del Espíritu Santo<br></br> Felipe Sevilla del Río S/N, <br></br>Jardines Vista Hermosa III, 28017 Colima, Col.
                      </p>
                      <b><p className='futura  py-3 white'></p></b>
                      <a href='https://maps.app.goo.gl/tPC9ZWyfwiLSfXyH8' className='button is-outlined  is-medium blue' target='_blank'>Abrir en Google maps</a>
                  </div>
                  <div className='column is-half gifta py-6'>
                      <img src={Reception} alt='' className='thumb my-1'></img>
                      <p class=" pacific my-5 title-b green">
                          Recepción
                        </p>
                        
                      <p class="subtitle futura mb-4 white" >
                        Recinto de la fiesta
                      </p>
                      <b><p className='futura mb-4 white '></p></b>
                      <a className='button my-4 is-medium is-outlined  blue' href='https://maps.app.goo.gl/Xvpe3PMh4DWsrEmQ6' target='_blank'>Abrir en Google Maps </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
            
      </>
    )
  }
}
