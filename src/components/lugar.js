import React, { Component } from 'react'
import Reception from '../assets/Recepción.png'
import Iglesia from '../assets/Iglesia.png'


export default class lugar extends Component {
  render() {
    return (
      <>
      <section class="hero  is-fullheight ptrn" id={this.props.id}>
        <div class="hero-body ">
            <div class="container has-text-centered ">
                <img src={Iglesia} className='thumb' ></img>
                <p class=" pacific green">
                   Ceremonia Religiosa
                </p>
                <p class="subtitle futura" >
                  Parroquia Sangre de Cristo
                </p>
                <a href='https://maps.app.goo.gl/s7cXY3gvBcya7poV7' className='button is-primary is-medium' target='_blank'>Abrir en Google maps</a>
                <b><p className='futura  py-3'>12:00 Hrs</p></b>
                <p class=" pacific my-6 title-b green">
                   Recepción
                </p>
                <img src={Reception} alt='' className='locationimg my-2'></img>  
                <p class="subtitle futura" >
                  Campestre Bugambilias 
                </p>
                <b><p className='futura '>2:30 Hrs</p></b>
                <a className='button is-primary my-4 is-medium' href='https://maps.app.goo.gl/v2tmd54peJQnsJteA?g_st=iw' target='_blank'>Abrir en Google Maps </a>
            </div>
        </div>
        </section>
            
      </>
    )
  }
}
