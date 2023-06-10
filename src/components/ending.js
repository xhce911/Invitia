import React, { Component } from 'react'

export default class ending extends Component {
  render() {
    return (
      <>
        <div className='container is fluid gifta'>
            <div className='hero is-medium has-text-centered'>
                   <div className='hero-body'>
                    <h1 className='pacific green'>Agradecemos su asistencia</h1>

                   </div>
                </div>
            <div className='columns has-text-centered'>
                <div className='column is-6'>
                    <h1 className='pacific green' >Confirmar asistencia</h1>
                    <h2 className='urbanist'>Confirmanos tu asistencia</h2>
                    <button className='button is-primary my-4' >Confirmar</button>
                </div>
                <div className='column is-6'>
                    <h1 className='pacific green'>¡No Faltes!</h1>
                    <h2 className='urbanist'>Agendalo en tu Google Calendar</h2>
                    <button className='button is-secondary my-4' >Agendar en Google Calendar</button>
                </div>
            </div>
            <div className='hero is-medium has-text-centered'>
                <div className='hero-body'>
                    <h3 className='urbanist '>Usa el hashtag del evento</h3>
                    <h1 className='pacific green '>#Baltachaak</h1>

                </div>
            </div>
        </div>
        <footer class="footer">
                <div class="content has-text-centered">
                    <p>
                    <strong>Invitia</strong> <a href="https://jgthms.com"></a>Todos los derechos reservados.
                    
                    </p>
                </div>
                </footer>
      </>
    )
  }
}
