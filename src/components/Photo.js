import React, { Component } from "react";




export default class Photo extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body  is-flex-direction-column	">
          <div className="columns">
            <div className="column is-half">
              <figure className="image my-4">
                <img src='#'></img>
              </figure>
          
              <figure className="image my-4">
                <img src='#'></img>
              </figure>
            </div>
            <div className="column is half">
              <figure className="image ">
                <img src='#'></img>
              </figure>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
