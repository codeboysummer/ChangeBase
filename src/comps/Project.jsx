import style from "../styles/project.module.scss";
import {ArrowForwardIcon} from '@chakra-ui/icons'
import { animate, motion } from "framer-motion";
import { Box, Flex, HStack, IconButton, Stack, VStack } from "@chakra-ui/react";
import React from 'react'
const Project = ({ title, mobile, laptop, extra, desc, builtWith ,git,live}) => {
  const variant = {
    initial: { y: -200, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { delay: 2, duration: 2 },
  };
  const slowReveal = {
    initial: { height: 0 },
    animate: { height: "fit-content" },
    transition: { duration: 4, delay: 2 },
  };
  const [rotate, setrotate] = React.useState(false)

  return (
    <div className={style.container}>
      <motion.div
        className={style.projecth1}
        initial={{ height: 0, overflow: "hidden" }}
        transition={{ duration: 1, delay: 0.5 }}
        whileInView={{ height: "fit-content" }}
        viewport={{ once: true, amount: 0.6 }}
      >
        <h1 className={style.h1}>{title}</h1>
      </motion.div>
      <motion.p
        className={style.desc}
        variants={variant}
        initial="initial"
        whileInView="animate"
        transition={"transition"}
        viewport={{ once: true, amount: 0.1 }}
      >
        {desc}
      </motion.p>

      <motion.ul
        variants={slowReveal}
        initial={"initial"}
        whileInView={"animate"}
        transition={"transition"}
        id="built"
      >
        {builtWith.map((item) => (
          <li>{item}</li>
        ))}
      </motion.ul>
      {title=='HotTakes'&& <motion.ul
        variants={slowReveal}
        initial={"initial"}
        whileInView={"animate"}
        transition={"transition"}
        id="built"
      >
        <li>Framer-motion</li>
        <li>Chakra UI</li>
        <li>SSR</li>
        
      </motion.ul>}


      <div className={style.projectImgDiv}>
        <img
          className={'image'}
          src={mobile}
          alt=""
        />
        <img
          className={'image'}
          src={laptop}
          alt=""
        />
        <img
          className={'image'}
          src={extra}
          alt=""
        />
      </div>
      <HStack gap={'5%'} alignItems={'center'} justifyContent={'center'} bg={'red.100'}>

<Flex w={'10%'} justifyContent={'space-around'} alignItems={'center'}>
  Live
  <a href={live}>
    <IconButton  _hover={{bg:'gold',transform:'rotate(-45deg)'}}  isRound   icon={<ArrowForwardIcon/>}/>
  </a>

</Flex>
<Flex w={['40%','10%']} justifyContent={'space-around'}  alignItems={'center'}>
  Github
  <a href={git}>
    <IconButton  _hover={{bg:'gold',transform:'rotate(-45deg)'}}  isRound   icon={<ArrowForwardIcon/>}/>
  </a>

</Flex>
      </HStack>
      

    </div>
  );
};

export default Project;
