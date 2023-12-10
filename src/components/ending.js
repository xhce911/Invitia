import React, { Component } from 'react'

export default class ending extends Component {
  render() {
    return (
      <>
        <section className='hero is-fullheight '  id={this.props.id}>
            <div className='hero-body '>
                <div className='container has-text-centered'>
                
                <div className='columns'>
                    
                    <div className='column  gifta py-6 is-full '>
                        <h1 className=' is-1 pacific green my-6'>Agradecemos su asistencia</h1>
                        <h1 className='subtitle is-2 pacific green mt-6' >Confirmar asistencia</h1>

                        <h2 className='futura white'>Confirmanos tu asistencia</h2>
                        <a className='button  is-outlined is-white my-4 mx-2'  href='https://wa.me/+5213121804280?text=Por%20favor%2C%20confirma%20si%20asistir%C3%A1s%20al%20evento%20para%20que%20podamos%20mantenerte%20informado%20sobre%20cualquier%20actualizaci%C3%B3n.' target='_blank'>Envia un whatsapp</a>
                        <h2 className='futura white'>Recuerda: <br></br> el código de vestimenta <b>TENIS</b> </h2>
                    </div>
                </div>
                </div>
            </div>
        </section>
      </>
    )
  }
}
