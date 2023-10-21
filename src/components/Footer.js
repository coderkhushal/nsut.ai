import React from 'react'
const logo = require("../assets/logo.png")
const Footer = () => {
  return (
    <div>
      <section id='footer'>
        <div id='footercontainer'>
          <div className='fcontainer'>
            <h1>QUICK LINKS</h1>
            <h2><a href="/" className='a-footer'>Home</a></h2>
            <h2><a href="/team" className='a-footer'>Team</a></h2>

          </div>
          <div className='fcontainer' style={{ color: "bisque" }}>
            <h1>FOLLOW US</h1>
            <a className="fa-brands fa-instagram followlinks" href='https://www.instagram.com/airgnsut/' />
            <a className="fa-brands fa-linkedin followlinks" href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQFLobZ0zyanbAAAAYsVYgvIcMYz4Ejs0pGz4Fp_ZH2XUPlBi5jfVbPnZx6RHQJLIJuncxswxfKzLU57PrE_8iHE1tcXrJGpL3xQ4hx2NltTOMvvsz8f3AnMEZG00NnmCezxPzA=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fartificial-intelligence-research-group-nsut%2Fmycompany%2F' />
          </div>
          <div className='fcontainer'>
            <img id="footerlogo" src={logo} alt="" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
