import React from "react";
import style from "../styles/projects.module.scss";
import changeBaseM from "../images/changebasemobile.png";
import Project from "../comps/Project";
import changeBaseL from "../images/changelaptop.png";
import changeExtra from "../images/extraChange.png";
import Hotcomments from '../images/Hotcomments.png'
import Hotiphone from '../images/Hotiphone.png'
import Hotlaptop from '../images/Hotlaptop.png'
import oneExtra from '../images/oneExtra.png'
import oneIphone from '../images/oneIphone.png'
import oneLaptop from '../images/oneLaptop.png'
import { Heading, Text, VStack } from "@chakra-ui/react";
const Projectpage = () => {
  const slowReveal = {
    initial: { height: 0 },
    animate: { height: "fit-content" },
    transition: { duration: 4, delay: 2 },
  };
  return (
    <>
      <div id='projects' className={style.container}>
        <Project 
        extra={Hotcomments}
        laptop={Hotlaptop}
        mobile={Hotiphone}
          title={"HotTakes"}

          desc={
            "HotTakes a full-Stack application, sign up with a unique username and vote"
          }
          builtWith={['Nextjs','Firebase','Lodash']}
        />
        <Project
          title={"Change-base"}
          extra={changeExtra}
          laptop={changeBaseL}
          mobile={changeBaseM}
          live={'https://changebase-9f826.web.app/'}
          desc={
            "Change-base A full stack application, Sign up or login with user authentication and save crypto to your watchlist"
          }
        builtWith={['React','Firebase','Chakra UI']}

        />

        <Project title={"One Digital"}
        desc={'One digital a mock website for a web solution / digital marketing agency'}
        extra={oneExtra}
        laptop={oneLaptop}
        mobile={oneIphone}
        builtWith={['Html','Css','Javascript']}

         />
         <VStack id="contact"  h={'50vh'} fontFamily={'poppins'}>
          <Heading
           variants={slowReveal}
           initial={"initial"}
           whileInView={"animate"}
           transition={"transition"}>
            Contact me
          </Heading>
          <Heading  variants={slowReveal}
        initial={"initial"}
        whileInView={"animate"}
        transition={"transition"} size={'sm'}>
            <b>email: </b>takincode8@gmail.com

          </Heading>
          <Heading  variants={slowReveal}
        initial={"initial"}
        whileInView={"animate"}
        transition={"transition"} size={'sm'}>
            <b>Phone: </b>647-614-5790

          </Heading>
         </VStack>
      </div>
    </>
  );
};

export default Projectpage;
