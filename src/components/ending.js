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
                    <div className='column  giftb py-6 '>
                        <h1 className='subtitle is-2 pacific green my-2' >Confirmar asistencia</h1>
                        <h2 className='futura white'>Confirmanos tu asistencia</h2>
                        <a className='button  is-outlined is-success my-4 mx-2'  href='#' target='_blank'>Envia un whatsapp</a>
                    </div>
                    
                </div>

                </div>
            </div>
        </section>
      </>
    )
  }
}
