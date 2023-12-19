import React, { Component } from 'react'
import Bby from '../assets/BT/bby2.png';


export default class ending extends Component {
  render() {
    return (
      <>
        <section className='hero is-fullheight '  id={this.props.id}>
            <div className='hero-body '>
                <div className='container has-text-centered'>
                
                <div className='columns'>
                    
                    <div className='column card  py-6 is-full '>
                        <img src={Bby} className='thumb2'></img>

                        <h1 className=' is-1 pacific green my-6'>Agradecemos su asistencia</h1>
                        <h1 className='subtitle is-2 pacific green mt-6' >Confirmar asistencia</h1>

                        <h2 className='futura white'>Confirmanos tu asistencia</h2>
                        <a className='button  is-outlined white my-4 mx-2'  href='https://wa.me/+523121168789?text=Por%20favor%2C%20confirma%20si%20asistir%C3%A1s%20al%20evento%20para%20que%20podamos%20mantenerte%20informado%20sobre%20cualquier%20actualizaci%C3%B3n.' target='_blank'>Envia un whatsapp</a>

                        
                    </div>
                </div>
                </div>
            </div>
        </section>
      </>
    )
  }
}
