import React ,{useRef , useEffect} from 'react'

const Contact = () => {
  return (
    <div id='contact'>
      <div className="container container4">
        <div className="forImg">
          <div className="forContactForm">
            <div className="main_heading">
              <h1>Contact</h1>
            </div>
            <div className="inputContact">
              <div className="formss">

                <div className="fN yo">
                  <label htmlFor=""> Full Name</label><br></br>
                  <input className="fullName" type="text" ></input>
                </div>

                <div className="E yo">
                <label htmlFor=""> Email</label> <br></br>
                <input className="Email" type="email" ></input>
                </div>

                <div className="M yo">
                <label htmlFor="">Message</label><br></br>
                <input className="Msg" type="text" ></input>
                </div>

                <button class='discoverBtn SubmitBtn'>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
