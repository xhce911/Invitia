import React, { Component } from 'react'
import Sears from '../assets/sears.png'
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
                        <button className='button is-primary' >Mesa de Regalos</button>
                    </div>
                </div>
            </div>
            <div class="column is-half">
            <div className='hero is-large'>
                    <div className='hero-body'>
                    
                        <h1 class=" pacific is-3 green">Lluvia de sobres</h1>
                        
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
