import React, { Component } from 'react';

import './App.css';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

class App extends Component {
  render() {
    return (
      <div>
        <Carousel infinteLoop={true} >
              <div>
                  <img className="image" src="../CropImages/antiqueCamera.jpg" />
              </div>
              <div>
                  <img className="image" src="../CropImages/hinduHead.jpg" />
                </div>
              <div>
                  <img className="image" src="../CropImages/gargoyle.jpg" />
              </div>
              <div>
                 <img className="image" src="../CropImages/motherChildren.jpg" />
              </div>
              <div>
                <img className="image" src="../CropImages/thinking.jpg" />
              </div>
                <div>
                img className="image" src="../images2/wizardsChess2.jpg" />
               </div>
          </Carousel>

  // var React = require('react');
  // var ReactDOM = require('react-dom');
  // var Carousel = require('react-responsive-carousel').Carousel;

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default App;
