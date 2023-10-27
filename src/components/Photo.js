import React, { Component } from "react";
import Photo1 from '../assets/Wedding/Assets/img1.jpeg'
import Photo2 from '../assets/Wedding/Assets/img3.jpeg'
import Photo3 from '../assets/Wedding/Assets/img4.jpeg'



export default class Photo extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body  is-flex-direction-column	">
          <div className="columns">
            <div className="column is-half">
              <figure className="image my-4">
                <img src={Photo1}></img>
              </figure>
          
              <figure className="image my-4">
                <img src={Photo3}></img>
              </figure>
            </div>
            <div className="column is half">
              <figure className="image ">
                <img src={Photo2}></img>
              </figure>
            </div>

          </div>
            
             
        </div>
        <div className='deco1'></div>
      </section>
    );
  }
}
