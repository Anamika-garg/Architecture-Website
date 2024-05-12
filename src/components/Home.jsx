import React, { useState } from 'react'
import { useRef } from 'react'

const Home = () => {

  const iconref = useRef()
  const showMenuref = useRef()
  const [toggleMenu, setToggleMenu] = useState(false);
  function showMenu() {
    showMenuref.current.style.right = '0px';

    if (toggleMenu) {
      showMenuref.current.style.right = '0px';
      showMenuref.current.style.display = 'flex';
      iconref.current.style.cursor = 'pointer';
      showMenuref.current.style.transition =  'right 0.5s ease';
    }
    else {
      showMenuref.current.style.display = 'none';
      showMenuref.current.style.right = '-100%'
    }
    setToggleMenu(!toggleMenu);
  }

  return (
    <div id='home'>
      
      <div className="container1">

      <nav>
        <div className="icon" ref={iconref} onClick={showMenu}></div>
      </nav>
      <div className="iconClickAfter hideIt" ref={showMenuref}>
        <nav>
          <div className='div'>
            <li><a href="#home">Home </a></li>
            <li><a href="#about"> About </a></li>
            <li><a href="#ourTeams">Our Team</a></li>
            <li><a href="#contact">Contact </a></li>
          </div>
        </nav>
      </div>
        <div className="main_content">
          <h1>Architecture & <br></br>Interior designs</h1>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, doloremque.</h3>
          <button class='discoverBtn'>Discover Now</button>
        </div>
      </div>
    </div>
  )
}

export default Home
