import React, { Component } from 'react'

export default class ending extends Component {
  render() {
    return (
      <>
        <div className='container is-fluid ptrn gifta' id={this.props.id}>
            <div className='hero is-medium has-text-centered'>
                <div className='hero-body'>
                    <h1 className=' is-1 pacific green'>Agradecemos su asistencia</h1>
                </div>
            </div>
            <div className='columns has-text-centered'>
                <div className='column is-6'>
                    <h1 className='subtitle is-2 pacific green' >Confirmar asistencia</h1>
                    <h2 className='futura'>Confirmanos tu asistencia</h2>
                    <button className='button is-primary my-4' >Confirmar</button>
                </div>
                <div className='column is-6'>
                    <h1 className='pacific is-2 subtitle green is-2'  >¡No Faltes!</h1>
                    <h2 className='futura '>Agendalo en tu Google Calendar</h2>
                    <a className='button is-secondary  is-primary my-4'  href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NG1jb2FhMDh0OTcwcXQ1NzM0aHBiYXFmNzcgeGhjZTkxMUBt&tmsrc=xhce911%40gmail.com' target='_blank'>Agregar a Calendar</a>
                </div>
            </div>
        </div>
        <section className='is-large has-text-centered ptrn'>
            <div className='hero-body glass'>
                <h3 className='futura is-2 '>Usa el hashtag del evento</h3>
                <h1 className='pacific green hashtag '>#Baltachaak</h1>

            </div>
        </section>
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
