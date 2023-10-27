import React, { Component } from 'react'
import Reception from '../assets/Wedding/Assets/Recepción.png'
import Iglesia from '../assets/Wedding/Assets/iglesia.png'


export default class lugar extends Component {
  render() {
    return (
      <>
      <section class="hero  is-fullheight " id={this.props.id}>
        <div class="hero-body">
            <div class="container has-text-centered ">
                <div className='columns'>
                  <div className='column is-half gifta'>
                  <img src={Iglesia} className='thumb' ></img>
                      <p class=" pacific green">
                        Ceremonia Religiosa
                      </p>
                      <p class="subtitle futura mt-4" >
                          Parroquia San Felipe de Jesús "El beaterio" <br></br> Av. Constitución 70, Centro, 28000 Colima
                      </p>
                      <b><p className='futura  py-3'>13:00 Hrs</p></b>
                      <a href='https://maps.app.goo.gl/NpEcUBi6gdRaey9h9' className='button is-outlined is-link is-medium blue' target='_blank'>Abrir en Google maps</a>
                  </div>
                  <div className='column is-half gifta'>
                      <img src={Reception} alt='' className='thumb my-1'></img>
                      <p class=" pacific my-5 title-b green">
                          Recepción
                        </p>
                        
                      <p class="subtitle futura mb-4" >
                        Jardín de Eventos La Felicidad
                      </p>
                      <b><p className='futura mb-4 '>14:30 Hrs</p></b>
                      <a className='button my-4 is-medium is-outlined is-link blue' href='https://maps.app.goo.gl/fDZXDqxuqYuZjHFQ8' target='_blank'>Abrir en Google Maps </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
            
      </>
    )
  }
}
