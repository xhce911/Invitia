import React, { Component } from 'react'
import Thumb from '../assets/Wedding/Assets/Recurso 11.png'




export default class special extends Component {
  render() {
    return (
      <>
        <section class="container glass is-fluid  my-6"  id="Padres">
      <div className='hero is-small'>
        <div className='hero-body'>
            <div className='container has-text-centered'>
             
              <div className='columns'>
                <div className='column is-half py-6'>
                  
                  <h1 class="tempting blue ">Padres de la novia</h1>
                  <img src={Thumb} className='thumb'></img>
                  <br></br>
                  <h2 class="subtitle futura gray" >Elías Valladares Ochoa </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Patricia Celis Vargas </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 
                </div>
                <div className='column is-half py-6'>
                  <h1 class="tempting blue ">Padres del novio</h1>
                  <img src={Thumb} className='thumb'></img>
                  <br></br>
                  <h2 class="subtitle futura gray" > J. Jesús  Rosiles Aguado </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Ma. Francisca Rincón  Venegas </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 

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
              
                <h1 class="tempting green pt-6">Padrinos de velación</h1>
                <img src={Thumb} className='thumb'></img>
                <div className='columns'>
                  <div className='column is-half'>
                  <img src='' className='thumb'></img>
                  <br></br>
                  <h2 class="subtitle futura gray" >Jose Ascención Muñiz</h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Laura Eugenia Rosiles Aguado </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 
                  </div>
                  <div className='column is-half'>
                  <img src='' className='thumb'></img>
                  
                  <br></br>
                  <h2 class="subtitle futura gray" >Jose Moisés Contreras Laurel </h2>
                  <h3 className='my-2 is-2 '><b>&</b></h3>
                  <h2 class="subtitle futura gray" >Zaira Cristal Morfin Luna </h2>
                  
                  <br></br>
                  <hr class="content-divider mx-6"></hr> 

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
