import { motion } from 'framer-motion'
import React from 'react'
import me from "../../assets/founder.jpg"
const founder = () => {
    const options={
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            
            x:"0",
            opacity:1
        }
    }
  return (
    <section className='founder'>
    <motion.div  {...options}>
    <img src={me} alt="Founder" height={200} width={200} />
    <h3>Aabshar Farid</h3>
    <p>Hey, I am Aabshar Farid founder of Rohtas Burgers. <br />
        The vision of Rohtas Burgers is to deliver blend and values to each corner of the world
    </p>
    </motion.div>
    </section>
  )
}

export default founder