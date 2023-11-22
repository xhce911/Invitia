import React, { Component } from 'react'
import Sobres from '../assets/XV/SOBRE.png'
import Icono from '../assets/XV/MESA.png'
import Liverpool from '../assets/XV/LaMarina.png'
import Banorte from '../assets/XV/Santander.png'



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
                    <a className='button is-outlined  is-medium mx-2 my-2 liverlined ' href='https://www.mesaderegalos.lamarina.com.mx/mesa-de-regalos/evento#SALOME-MIS-XV/eyJpZEV2ZW50byI6Ik1SLTAwMDAxNzk1IiwiZ3Vlc3QiOnRydWUsImlkQ2x1c3RlciI6MjcxN30=' target='_blank' >Mesa de regalos La Marina</a>
                  </div>
                </div>
              </div>

              <div class="column is-half gifta">
                <div className='hero is-large'>
                    <div className='hero-body'>
                      <img src={Sobres} className='envelope' ></img>
                      <h1 class=" pacific is-1 green py-2">Lluvia de sobres</h1>
                      <div className='card'>
                          <img alt='Mesa de Regalos' src={Banorte} className='bank'></img>
                          <div className='card-content'>
                            <div className='content'>

                              <b>Nombre:</b>
                              <p> Hector Hugo Hernandez Galvan</p>

                              <b>Cuenta:</b>
                              <p>5579 1003 1817 8280</p>
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
