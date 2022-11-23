import React from 'react'
import {motion} from 'framer-motion'
import style from "../styles/animate.module.scss";



const AnimatedText = ({text}) => {
  return (
    <>
   
          <motion.div
            initial={{ height: 0, y: 200 }}
            transition={{
              duration: 2,
            }}
            animate={{
              height: "auto",
              y: 0,
            }}
            className={style.cn}
          >
            <h1> Front End Developer</h1>
            <h1>UI Maker</h1>
          </motion.div>
    </>
  )
}
const AnimatedTextOnview = ({text}) => {
    return (
      <div className={style.w}>
     
            <motion.div
              initial={{ height: 0, y: 200 }}
              transition={{
                duration: 2,
              }}
              animate={{
                height: "auto",
                y: 0,
              }}
              className={style.cn}
            >
              <h1> Front End Developer</h1>
              <h1>UI Maker</h1>
            </motion.div>
      </div>
    )
  }

export  {AnimatedText,AnimatedTextOnview}
   