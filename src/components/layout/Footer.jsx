import React from 'react'
import {AiFillInstagram ,AiFillLinkedin} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className='footer'>
        <div>
            <h2>Rohtas Burgers</h2>
            <p>Burgers from our kitchen to your home.</p>
            <br />
            <em>we give attention to genuine feedback.</em>
            <br />
            <strong>All right received @rohtasburgers </strong>
        </div>
        <aside>
            <h4>Follow Us</h4>
            <a href="https://www.instagram.com/aabsharfarid/"><AiFillInstagram/></a>
            <a href="https://in.linkedin.com/in/aabshar-farid-a7a1a2182"><AiFillLinkedin/></a>
            
        </aside>

    </footer>
  )
}

export default Footer