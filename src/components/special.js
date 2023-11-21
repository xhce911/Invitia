import React, { Component } from 'react'
import Thumb from '../assets/XV/padres.png'




export default class special extends Component {
  render() {
    return (
      <>
        <section class="container glass is-fluid  my-6"  id="Padres">
      <div className='hero is-small'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
             
              <div className='columns'>
                <div className='column is-full py-6  animate__animated  animate__fadeInDown'>
                <div className='deco1'></div>
                  <h1 class="tempting blue">Mis Papás</h1> 
                  
                  <img src={Thumb} className='thumb'></img>
                  <br></br>
                  <br></br>
                  <h2 class="subtitle futura white" >Héctor Hugo Hernández Galván </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura white" >Karla Delilah Ruiz Velázquez </h2>
                  
                  <br></br>
                 
                  <div className='deco1'></div>
                </div>
                
              </div>
            </div>
        </div>
      </div>
      </section>
     

      <section class="container glass is-fluid  my-6"  id="Padres">
        <div className='hero is-small'>
          <div className='hero-body'>
              <div className='container has-text-centered'>
              <div className='deco1'></div>
                <h1 class="tempting green pt-6">Mis Padrinos</h1>
                <img src={Thumb} className='thumb'></img>
                <div className='columns'>
                  <div className='column is-full has-text-centered'>
                    <img src='' className='thumb'></img>
                    <br></br>
                    <h2 class="subtitle futura white" >José Asención García Muñiz</h2>
                    <h3 className='my-2 is-2 '><b>&</b></h3>
                    <h2 class="subtitle futura white" >Laura Eugenia Rosiles Aguado </h2>
                     <div className='deco1'></div>

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
