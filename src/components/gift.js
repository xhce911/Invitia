import React, { Component } from 'react'
import Sobres from '../assets/Sobre.png'
import Icono from '../assets/mesa_r.png'
import Sears from '../assets/sears.png'


export default class gift extends Component {

  render() {
    return (
      <>
        <div className='container is-fluid' id={this.props.id}>
        <div className='container'>
        <div class="columns is-vcentered has-text-centered ">
            <div class="column is-half " >
                <div className='hero is-large'>
                    <div className='hero-body'>
                        <img alt='Mesa de Regalos' src={Icono} className='gift'></img>
                        <br></br>
                      
          
                        <a className='button is-primary' href='https://www.sears.com.mx/Mesa-de-Regalos/77117/te-invito-a-mi-bautizo-chaak-balthazar' >Abrir mesa de regalo</a>
                    </div>
                </div>
            </div>
            <div class="column is-half">
            <div className='hero is-large'>
                    <div className='hero-body'>
                        <img src={Sobres} className='envelope' ></img>
                        <h1 class="title pacific is-1 green">Lluvia de sobres</h1>
                        
                        <div className='card'>
                          
                          <h2 className='futura mt-2'>Datos bancarios</h2>
                          
                          <div className='card-content'>
                            <div className='content'>
                                 <b>No. de Tarjeta (BBVA Bancomer)</b>
                                <p >4152 3137 6600 1148</p>

                                <b>Nombre:</b>
                                <p>Jose Guillermo Campanur Galván</p>

                                <b>Clabe:</b>
                                <p>012 090 004 766 3070 70</p>
                           
                            </div>

                          </div>

                        </div>
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
