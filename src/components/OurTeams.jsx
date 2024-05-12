import React, { useRef, useState } from 'react'

const OurTeams = () => {
  const p1ref = useRef()
  const p2ref = useRef()
  const p3ref  = useRef()

  function p1details() {
     p1ref.current.style.visibility = 'visible'
    // setToggleData(!toggleData)
  }
  function hideData1() {
    p1ref.current.style.visibility = 'hidden'
  }
  function p2details() {
     p2ref.current.style.visibility = 'visible'
    // setToggleData(!toggleData)
  }
  function hideData2() {
    p2ref.current.style.visibility = 'hidden'
  }
  function p3details() {
     p3ref.current.style.visibility = 'visible'
    // setToggleData(!toggleData)
  }
  function hideData3() {
    p3ref.current.style.visibility = 'hidden'
  }

  return (
    <div id='ourTeams'>
      <div className="container container3">
        <div className="main_heading">
          <h1>Our Team</h1>
        </div>
        <div className="ourTeams">
          <div className="person p_1" onMouseEnter={p1details} onMouseLeave={hideData1}>

            <div className="details" ref={p1ref}>
              <p className='main'>Name</p>
              <h2>(Architect)</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium.</p>
            </div>
          </div>
          <div className="person p_2" onMouseEnter={p2details} onMouseLeave={hideData2}>

            <div className="details" ref={p2ref}>
              <p className='main'>Name</p>
              <h2>(Architect)</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium.</p>
            </div>
          </div>
          <div className="person p_3" onMouseEnter={p3details} onMouseLeave={hideData3}>

            <div className="details" ref={p3ref}>
              <p className='main'>Name</p>
              <h2>(Architect)</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium.</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default OurTeams
