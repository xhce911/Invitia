import React, { Component } from 'react'
import Sobres from '../assets/Wedding/Assets/sobre.png'
import Icono from '../assets/Wedding/Assets/Icono mesa de regalos.png'
import Liverpool from '../assets/Wedding/Assets/Liverpool-e1647574271832.webp'
import Banorte from '../assets/Wedding/Assets/Logo_de_Banorte.svg.png'



export default class gift extends Component {

  render() {
    return (
      <>
        <div className='container  is-fluid ' id={this.props.id}>
          <div className='container  is-vcentered'>
            <div class="columns has-text-centered ">
              
              <div class="column is-half gifta " >
                <div className='hero is-large'>
                  <div className='hero-body'>
                    <img alt='Mesa de Regalos' src={Icono} className='gift'></img>
                    <br></br>
                    <img alt='Mesa de Regalos' src={Liverpool} className='liver'></img>
                    <br></br>
                    <a className='button is-outlined  is-medium mx-2 my-2 liverlined ' href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51187310' target='_blank' >Mesa de regalos LIVERPOOL</a>
                  </div>
                </div>
              </div>

              <div class="column is-half gifta">
                <div className='hero is-large'>
                    <div className='hero-body'>
                      <img src={Sobres} className='envelope' ></img>
                      <h1 class=" pacific is-1 green">Lluvia de sobres</h1>
                        
                      <div className='card'>
                          
                          <h2 className='futura mt-2'>Datos bancarios</h2>
                          <img alt='Mesa de Regalos' src={Banorte} className='liver mt-4'></img>
                          <div className='card-content'>
                            <div className='content'>

                              <b>Nombre:</b>
                              <p>Ivette Valladares Celis</p>

                              <b>Cuenta:</b>
                              <p>1157024992</p>
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
