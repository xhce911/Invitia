import React, { Component } from "react";


export default class Photo extends Component {
  render() {
    return (
      <section
        id={"parallax-" + this.props.number}
        className="hero is-fullheight"
      >
        <div class="tile is-ancestor mx-6">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical photo1">
              </div>
            </div> 
            <div class="tile my-2 is-parent photo2">
             
            </div>
          </div>
          <div class="tile mx-2 is-parent photo3">
           
          </div>
        </div>
      </section>
    );
  }
}
