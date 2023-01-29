import React from 'react'
import {motion} from 'framer-motion'
import burger from "../../assets/burger3.png"
import burger1 from "../../assets/burger2.png"
const Contact = () => {
  return (
    <section className='contact'>
        <motion.form
        initial={{
          x:'-100VW',
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}
        >

            <h2>Contact Us</h2>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email'/>
            <textarea placeholder='Message' cols="30" rows="10"></textarea>
            <button type="submit">Submit</button>
        </motion.form>
        <motion.div className='formBorder'
         initial={{
          x:'100VW',
          opacity:0
        }}
        animate={{
          x:0,
          opacity:1
        }}>
            <motion.div
            initial={{
              y:"-100vw",
              x:"50%",
              opacity:0
            }}
            animate={{
              x:"50%",
              y:"-50%",
              opacity:1
            }}
            transition={{delay:0.3}}
            >
                <img src={burger} alt="burger" />
                <img src={burger1} alt="burger" />
            </motion.div>
        </motion.div>

    </section>
  )
}

export default Contact