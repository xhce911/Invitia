import React, { Component } from 'react'
import Song from '../assets/BT/bgsong.mp3';
import '../App.css';

export default class navbar extends Component {
  render() {
    return (
        <>
        <nav className="navbar is-top barra glass is-align-items-center ">
          <div className="container is-align-content-center ">
            <div className="navbar-brand is-align-self-center">
              <a className="tempting blue navbar-item " href="../">
                Alejandra Lourdes
              </a>
            </div>
            <div className='navbar-end'>
              <span className='navbar-item '>
                  <audio src={Song} controls />   
                  </span>
            </div>
          </div>
        </nav>
      
      </>
    )
  }
}
