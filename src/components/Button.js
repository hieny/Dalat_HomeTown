import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ButtonNav = styled(motion.button)`
  position: relative;
  padding: 10px 10px;
  border-radius: 10px;
  top: 50px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.06);
`;

const ButtonNavBack = styled(motion.button)`
  position: fixed;
  padding: 10px 10px;
  border-radius: 10px;
  bottom: 1000px;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.06);
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
const Button = () => {
  const navigate = useNavigate();

  return (
    <div>
      <ButtonNav variants={Animation} initial="hidden" animate="visible">
        Scroll down <br />
        <i className="fa fa-angle-double-down" />
      </ButtonNav>

      <ButtonNavBack
        variants={Animation}
        initial="hidden"
        animate="visible"
        onClick={() => {
          navigate(-1);
        }}
      >
        <i className="fa fa-angle-double-left"></i> Go Back
      </ButtonNavBack>
    </div>
  );
};

export default Button;
