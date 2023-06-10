import React, { Component } from 'react'
import Marina from '../assets/marina.png'

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
                        <h1 class="title pacific is-1 green">Mesa de Regalos</h1>
                        <img src={Marina}></img>
                        <h2 className='urbanist'>Código de mesa</h2>
                    </div>
                </div>
            </div>
            <div class="column is-half">
            <div className='hero is-large'>
                    <div className='hero-body'>
                    <h1 class="title pacific is-1 green">Opciones de regalo</h1>
                        <h3 class="title pacific is-3 green">Lluvia de sobres</h3>
                        
                        <h2 className='urbanist'>Datos bancarios</h2>
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
