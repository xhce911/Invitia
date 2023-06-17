import React, { Component } from 'react'
import Sobres from '../assets/Sobre.png'
import Icono from '../assets/mesa_r.png'


export default class gift extends Component {

  render() {
    return (
      <>
        <div className='container is-fluid'>
        <div className='container'>
        <div class="columns is-vcentered has-text-centered gifta">
            <div class="column is-half " >
                <div className='hero is-large'>
                    <div className='hero-body'>
                        <img alt='Mesa de Regalos' src={Icono}></img>
                        <a className='button is-primary' href='https://www.sears.com.mx/Mesa-de-Regalos/77117/te-invito-a-mi-bautizo-chaak-balthazar' >Abrir mesa de regalo</a>
                    </div>
                </div>
            </div>
            <div class="column is-half">
            <div className='hero is-large'>
                    <div className='hero-body'>
                    
                        <h1 class="title pacific is-1 green">Lluvia de sobres</h1>
                        
                        <h2 className='futura'>Datos bancarios</h2>
                    </div>
                </div>
            </div>
        </div>

        </div>
        </div>
      </>
    )
  }
}
