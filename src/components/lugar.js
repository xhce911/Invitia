import React, { Component } from 'react'
import Reception from '../assets/XV/Recepción.png'
import Iglesia from '../assets/XV/IGLESIA.png'


export default class lugar extends Component {
  render() {
    return (
      <>
      <section class="hero  is-fullheight " id={this.props.id}>
        <div class="hero-body">
            <div class="container  has-text-centered ">
                <div className='columns '>
                  <div className='column is-half gifta py-6'>
                  <img src={Iglesia} className='thumb' ></img>
                      <p class=" pacific green">
                        Ceremonia Religiosa
                      </p>
                      <p class="subtitle futura mt-4 white" >
                          Parroquia San Francisco de Asís<br></br> Independencia s/n, Centro, 28970,<br></br> Villa de Álvarez, Colima.
                      </p>
                      <b><p className='futura  py-3 white'>19:00 Hrs</p></b>
                      <a href='https://maps.app.goo.gl/DoEEj8nhDd9CQVN87' className='button is-outlined is-link is-medium blue' target='_blank'>Abrir en Google maps</a>
                  </div>
                  <div className='column is-half gifta py-6'>
                      <img src={Reception} alt='' className='thumb my-1'></img>
                      <p class=" pacific my-5 title-b green">
                          Recepción
                        </p>
                        
                      <p class="subtitle futura mb-4 white" >
                        Terraza de eventos La Parota
                      </p>
                      <b><p className='futura mb-4 white '>9:00 PM - 2:00 AM</p></b>
                      <a className='button my-4 is-medium is-outlined is-link blue' href='https://maps.app.goo.gl/mCDr3ihiZ49QYNdT7' target='_blank'>Abrir en Google Maps </a>
                    </div>
                </div>
            </div>
        </div>
        </section>
            
      </>
    )
  }
}
