import React, { Component } from 'react'
import Song from '../assets/song.mp3';
import '../App.css';

export default class navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar is-top barra glass">
        <div className="container ">
          <div className="navbar-brand ">
            <a className="tempting blue navbar-item " href="../">
              Alecita
            </a>
           </div>
           <div className='navbar-end px-4'>
            <span className='navbar-item '>
                    
                </span>
           </div>
        </div>
      </nav>
      
      </>
    )
  }
}
