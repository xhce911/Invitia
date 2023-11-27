import React, { Component } from 'react'
import Thumb from '../assets/XV/padres.png'




export default class special extends Component {
  render() {
    return (
      <>
        <section class="container  is-fluid  my-6"  id="Padres">
      <div className='hero is-small'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
             
              <div className='columns is-centered is-mobile'>
                <div className='column gifta is-full py-6  animate__animated  animate__fadeInDown'>
                  
                  <h1 class="tempting blue">Mis Papás</h1> 
                  
                  <img src={Thumb} className='thumb'></img>
                  <br></br>
                  <br></br>
                  <h2 class="subtitle futura white" >Héctor Hugo Hernández Galván </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura white" >Karla Delilah Ruiz Velázquez </h2>
                  
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
                  <div className='column py-6  is-full gifta'>
                    
                    <h1 class="tempting green pt-4">Mis Padrinos</h1>
                    <img src={Thumb} className='thumb'></img>
                    <img src='' className='thumb'></img>
                    <br></br>
                    <h2 class="subtitle futura white" >Jesús Rafael Barajas Pineda</h2>
                    <h3 className='my-2 is-2 white '><b>&</b></h3>
                    <h2 class="subtitle futura white" >Elba Monserrate Ocón Bonales </h2>
                     

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
