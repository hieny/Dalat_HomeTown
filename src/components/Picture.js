import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

import styled from "styled-components";
import styles from "../styles/styles.module.css";

const Item = styled(motion.div)`
  width: 250px;
  margin-right: 6rem;
  height: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #ffece0;
  background-color: #fff;
  box-shadow: 0 12.5px 100px -10px rgba(0, 0, 0, 0.3),
    0 5px 5px 5px rgba(0, 0, 0, 0.4);
  border-radius: 20px;

  img {
    width: 200px;
    height: 200px;
    cursor: pointer;
    border: 1px solid #000;
  }

  @media (max-width: 48em) {
    width: 15rem;
  }
`;
const ButtonNavBack = styled(motion.button)`
  position: absolute;
  padding: 10px 10px;
  border-radius: 10px;
  right: -60px;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.06);
  a {
    text-decoration: none;
  }
`;
const Animation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      yoyo: Infinity, // repeats infinite times
      ease: "easeInOut",
    },
  },
};
const Product = ({ img }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0%)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt="" className={styles.hover} />
    </Item>
  );
};

const Picture = () => {
  const picture = useSelector((state) => state.PictureReducer.picture);

  const renderPicture = () => {
    return picture.map((item, index) => {
      return <Product img={item.img} key={index} />;
    });
  };
  return (
    <>
      {renderPicture()}
      <ButtonNavBack
        variants={Animation}
        initial="hidden"
        animate="visible"
        type="link"
      >
        <a href="/">
          <i className="fa fa-angle-double-left"></i> Go Back
        </a>
      </ButtonNavBack>
    </>
  );
};

export default Picture;
