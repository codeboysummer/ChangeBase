import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import {Link} from '@chakra-ui/react'
const Navbar = () => {
  return (
    <>
      <Flex zIndex={9999}
        justifyContent={"space-between"}
        alignItems={"center"}
        position={'absolute'}
        top={0}
        left={0}
        h={"5rem"}
        w={"100%"}
        
      >
        <Text  fontSize={"2rem"} fontWeight={"bold"} fontFamily={"poppins"}>
          Abdul Wahid
        </Text>
        <Flex  justifyContent={"space-around"}  w={['60%',"40%"]}>
          <a  href={'#projects'}>Playground</a>
          <Text ><a target={'_blank'} href="https://docs.google.com/document/d/1rRQeAOnjQDiUeNkcK0ISl-cvJxEoTlo4/edit">Resume</a></Text>
          <a href="#contact">
            <Text>Contact</Text>
          </a>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
