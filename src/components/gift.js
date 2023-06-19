import React, { Component } from 'react'
import Sobres from '../assets/Sobre.png'
import Icono from '../assets/mesa_r.png'
import Sears from '../assets/sears.png'


export default class gift extends Component {

  render() {
    return (
      <>
        <div className='container is-fluid ptrn' id={this.props.id}>
          <div className='container glass gifta  is-vcentered'>
            <div class="columns has-text-centered ">
              
              <div class="column is-half " >
                <div className='hero is-large'>
                  <div className='hero-body'>
                    <img alt='Mesa de Regalos' src={Icono} className='gift'></img>
                    <br></br>
                    <a className='button is-info mx-2' href='https://www.sears.com.mx/Mesa-de-Regalos/77117/te-invito-a-mi-bautizo-chaak-balthazar' target='_blank' >Mesa de regalos SEARS</a>
                    <a className='button liverpool mx-2' href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51232189' target='_blank' >Mesa de regalos LIVERPOOL</a>
                  </div>
                </div>
              </div>

              <div class="column is-half">
                <div className='hero is-large'>
                    <div className='hero-body'>
                      <img src={Sobres} className='envelope' ></img>
                      <h1 class=" pacific is-1 green">Lluvia de sobres</h1>
                        
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
