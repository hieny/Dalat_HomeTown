import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const Loader = () => {
  const Container = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.body};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 5;

    img {
      width: 60vw;
      height: auto;
      overflow: visible;
    }
  `;
  const Image = styled(motion.img)``;
  return (
    <Container
      initial={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <Image
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        src={logo}
        alt="logo"
      />
    </Container>
  );
};

export default Loader;
