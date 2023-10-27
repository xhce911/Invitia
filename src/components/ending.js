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
                    <div className='column is-half giftb py-6 '>
                        <h1 className='subtitle is-2 pacific green my-2' >Confirmar asistencia</h1>
                        <h2 className='futura'>Confirmanos tu asistencia</h2>
                        <a className='button  is-outlined is-success my-4 mx-2'  href='https://wa.me/+5213121687512?text=%22%C2%A1Qu%C3%A9%20emoci%C3%B3n%21%20Claro%20que%20s%C3%AD%2C%20estar%C3%A9%20ah%C3%AD%20para%20celebrar%20este%20d%C3%ADa%20tan%20especial%20contigo.%20%C2%A1Gracias%20por%20pensar%20en%20m%C3%AD%21%20' target='_blank'>Envia un whatsapp</a>
                    </div>
                    <div className='column is-half giftb py-6 '>
                        <h1 className='pacific is-2 subtitle green is-2 my-2'  >¡Te esperamos!</h1>
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
