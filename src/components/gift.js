import React, { Component } from 'react'
import Sobres from '../assets/XV/SOBRE.png'
import Icono from '../assets/XV/MESA.png'
import Liverpool from '../assets/BT/regalos.png'
import Banorte from '../assets/XV/Santander.png'



export default class gift extends Component {

  render() {
    return (
      <>
        <div className='container  is-fluid ' id={this.props.id}>
          <div className='container  '>
            <div class="columns has-text-centered is-centered">
              
              <div class="column is-half gifta py-6 " >
                <div className='hero is-large'>
                  <div className='hero-body'>
                    <br></br>
                    <img alt='Mesa de Regalos' src={Liverpool} className='liver'></img>
                    <br></br>
                    <a className='button is-outlined  is-medium mx-2 my-2 blue ' href='https://mesaderegalos.liverpool.com.mx/milistaderegalos/51348036' target='_blank' >Acceder a Liverpool</a>
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
