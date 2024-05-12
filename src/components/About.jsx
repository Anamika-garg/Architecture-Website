import React from 'react'

import houseLogo from './house.png'
const About = () => {
  return (
    <div id='about'>
      <div className="container container2">
        <div className="main_heading">
          <h1>About Us</h1>
        </div>
        <div className="main_content_about">
          <div className="upper first bg">
            {/* Interior */}
            <div className="interior forUpper">
              <h3><i class="fas fa-pen-nib"></i> Interior</h3>
              <p class="service-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Doloremque, officia!
              </p>
            </div>
            
          {/* Decoration */}
          <div className="interior forUpper">
            <h3><i class="fas fa-paint-brush"></i> Decoration</h3>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia!
            </p>
          </div>
          </div>
          <div className="lower second bg">            
          {/* Exterior */}
          <div className="interior">
            <h3><i class="fas fa-paint-roller"></i> Exterior</h3>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia!
            </p>
          </div>
          <img src={houseLogo} alt="" />
          {/* Planning */}
          <div className="interior">
            <h3><i class="fas fa-ruler-combined"></i> Planning</h3>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia!
            </p>
          </div>
          </div>
          <div className="upper third bg">            
          {/* Design */}
          <div className="interior">
            <h3> <i class="fas fa-pencil-alt"></i> Design</h3>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia!
            </p>
          </div>
          {/* Execution */}
          <div className="interior">
            <h3> <i class="far fa-building"></i> Execution</h3>
            <p class="service-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloremque, officia!
            </p>
          </div>
          </div>

            
        </div>
        <hr />
      </div>
    </div>

  )
}

export default About
