import React, { Component } from 'react'
import Thumb from '../assets/BT/division.png'
import Paps from '../assets/BT/paps.png'
import Padrinos from '../assets/BT/padrinos.png'
import PadrinoP from '../assets/BT/paadrinoP.png'



export default class special extends Component {
  render() {
    return (
      <>
        <section class="container  is-fluid  my-6"  id="Padres">
      <div className='hero is-small'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
             
              <div className='columns is-centered is-mobile'>
                <div className='column  card gifta  is-full py-6  animate__animated  animate__fadeInDown'>
                <img src={Paps} className='thumb2'></img>
                  <h1 class="tempting blue">Mis Papis</h1> 
                  
                
                  <br></br>
      
                  <h2 class="subtitle futura white" >Jesús Avalos González </h2>
                  <img src={Thumb} className='thumb'></img>
                  <h2 class="subtitle futura white" >Alejandra Ceballos Villatoro </h2>
                  
                  <br></br>
                 
                  
                </div>
                
              </div>
            </div>
        </div>
      </div>
      </section>

      <section class="container  is-fluid  my-6 "  id="Padres">
        <div className='hero is-small'>
          <div className='hero-body'>
              <div className='container has-text-centered'>
                <div className='columns is-centered'>
                  <div className='column  card gifta py-6  is-full '>
                  <img src={PadrinoP} className='thumb2'></img>
                    <h1 class="tempting green pt-4">Padrino de <br></br>Presentación</h1>
        
                    <img src={Thumb} className='thumb py-2'></img>
                    <h2 class="subtitle futura white" >Luis Alberto Avalos González</h2>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
     

      <section class="container  is-fluid  my-6 "  id="Padres">
        <div className='hero is-small'>
          <div className='hero-body'>
              <div className='container has-text-centered'>
                <div className='columns is-centered'>
                  <div className='column  card gifta py-6  is-full '>
                    <img src={Padrinos} className='thumb2'></img>
                    <h1 class="tempting green pt-4">Mis Padrinos </h1>
                    
                   
                    <br></br>
                    <h2 class="subtitle futura white" >David Sánchez Hernández</h2>
                    <img src={Thumb} className='thumb'></img>
                    <h2 class="subtitle futura white" >Virginia Alejandra Avalos Llamas</h2>
                     

                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
     
     
      </>
    )
  }
}
