import { Flex, Heading, Box } from "@chakra-ui/react";
import React from "react";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { animate, motion } from "framer-motion";
import style from "../styles/home.module.scss";
import { AnimatedTextOnview } from "../comps/textanimation";
import Projectpage from "./Projectpage";
const HomePage = () => {
  const transitionValues = {
    duration: 2,
    delay:4,
    yoyo: Infinity,
    ease: "easeInOut"
  };
  return (
    <div className={style.all}>

      <motion.div className={style.container}>
        <div className={style.gmaildiv}>
          <a target="_blank" href="contact">
            <SiGmail className={style.icon} color="#8abfc8"/>
          </a>
          </div>
        <a target="_blank" href="https://github.com/codeboysummer">
          <div className={style.gitdiv}><SiGithub/></div>
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/abdul-wahid-a520b1194/">
          <div className={style.linkdiv}><SiLinkedin/></div>
        </a>
       
        <div className={style.w}>
          <motion.h4
            initial={{ y: 200, height: 0 }}
            transition={{
              duration: 1,
              delay: 2,
            }}
            animate={{
              height: "auto",
              y: 0,
            }}
          >
            Abdul Wahid
          </motion.h4>
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
        
      </motion.div>
      
      <Projectpage/>

    </div>


  );
};

export default HomePage;
