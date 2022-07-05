import React, { useState } from "react";
import { useSprings, animated, to as interpolate } from "@react-spring/web";
import { useDrag } from "react-use-gesture";
import MainVideo from "../assets/DalatLandScape.mp4";
// import MainVideo from "../../public/assets/DalatLandScape.mp4";

import styles from "../styles/styles.module.css";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const cards = [
  {
    name: "Life",
    link: "../assets/images/fam_0.jpg",
  },
  {
    name: "Travel",
    link: "https://sayhellovietnam.com/wp-content/uploads/2020/03/DaLat_Vietnam_.jpg",
  },
  {
    name: "History",
    link: "https://lamdong.gov.vn/sites/en/dalatcity/Shared%20Documents/dalatcity3/history6.jpg",
  },
];

// These two are just helpers, they curate spring data, values that are later being interpolated into css

const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Deck() {
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const [props, api] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      api.start((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)

  const renderCard = () => {
    return props.map(({ x, y, rot, scale }, i) => {
      console.log(cards[i].link);
      return (
        <animated.div
          className={styles.deck}
          key={i}
          style={{ x, y, transform: interpolate([rot, scale], trans) }}
        >
          {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
          <NavLink to={`${cards[i].name}`} {...bind(i)}>
            <h1
              className="text-center"
              style={{ fontFamily: "Kaushan Script" }}
            >
              {" "}
              {cards[i].name}
            </h1>
            <img
              style={{ width: "100%", height: "80%", padding: "10px 30px" }}
              src={`${cards[i].link}`}
              alt={`${cards[i].name}`}
            />
          </NavLink>
        </animated.div>
      );
    });
  };

  const CoverBackGround = styled.section`
    width: 100%;
    height: 100vh;
    position: relative;

    video {
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: -10;
    }
  `;

  const DarkOverLay = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    top: 0;

    background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  `;

  const Tittle = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    display: flex;
    align-items: start;

    flex-direction: column;
    color: ${(props) => props.theme.text};
    div {
      display: flex;
      flex-direction: row;
    }
    h1 {
      font-family: "Kaushan Script";
      font-size: ${(props) => props.theme.fontBig};
      text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    }

    h3 {
      font-family: "Kaushan Script";
      text-shadow: 1px 1px 1px ${(props) => props.theme.body};
      font-size: ${(props) => props.theme.fontlg};
      text-transform: capitalize;
      width: 85%;
      margin: 0 auto;
    }
  `;

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };

  return (
    <CoverBackGround>
      <DarkOverLay />
      <Tittle variants={container} initial="hidden" animate="show">
        <div>
          <motion.h1 variants={item}>D</motion.h1>
          <motion.h1 variants={item}>a</motion.h1>
          <motion.h1 variants={item}>l</motion.h1>
          <motion.h1 variants={item}>a</motion.h1>
          <motion.h1 variants={item}>t</motion.h1>
        </div>

        <motion.h3 variants={item}>family, dream, life</motion.h3>
      </Tittle>
      {renderCard()}
      <video
        src={MainVideo}
        type="video/mp4"
        autoPlay={true}
        muted={true}
        loop
      />
    </CoverBackGround>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Deck />
    </div>
  );
}
