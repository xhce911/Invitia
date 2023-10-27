import React, { Component } from 'react'

export default class ending extends Component {
  render() {
    return (
      <>
        <section className='hero is-fullheight '  id={this.props.id}>
            <div className='hero-body '>
                <div className='container has-text-centered'>
                <h1 className=' is-1 pacific green my-6'>Agradecemos su asistencia</h1>
                <div className='columns'>
                    <div className='column is-half gifta py-6 '>
                        <h1 className='subtitle is-2 pacific green' >Confirmar asistencia</h1>
                        <h2 className='futura'>Confirmanos tu asistencia</h2>
                        <a className='button  is-outlined is-success my-4 mx-2'  href='https://wa.me/+5213121687512?text=Muchas%20gracias%20por%20la%20invitaci%C3%B3n%2C%20quiero%20confirmar%20la%20asistencia%20al%20bautizo.%20Mi%20nombre%20es%20_' target='_blank'>Envia un whatsapp</a>
                    </div>
                    <div className='column is-half gifta py-6'>
                        <h1 className='pacific is-2 subtitle green is-2'  >¡Te esperamos!</h1>
                        <h2 className='futura '>Agendalo en tu Google Calendar</h2>
                        <a className='button is-outlined is-link   my-4'  href='' target='_blank'>Agregar a Calendar</a>
                    </div>
                </div>

                </div>
            </div>
        </section>
      </>
    )
  }
}
