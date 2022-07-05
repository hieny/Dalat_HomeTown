import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { useRef } from "react";
import styles from "../styles/styles.module.css";

import { motion } from "framer-motion";
import Picture from "../components/Picture";

const Secion = styled.div`
  witdh: 100%;
  height: 100vh;
`;

const PictureContent = styled.div`
  position: absolute;
  top: 8%;
  left: 100%;
  padding-left: 30%;
  min-height: 0vh;

  /* background-color: ${(props) => props.theme.grey}; */
  /* width: 65%; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-family: "Kaushan Script";
    text-align: center;
  }
`;

const Life = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,
          pin: true,
          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });

      // Horizontal Scrolling
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scroller: ".App", // locomotive element
          scrub: true,

          // markers:true,
        },
        // we have to increase scrolling height of this section same as the scrolling element width
        x: -pinWrapWidth,
        ease: "none",
      });

      return () => {
        // Let's clear instances

        t1.kill();
      };
    }, 1000);
  }, []);
  return (
    <Secion className={styles.bgRoom} ref={ref}>
      <div className="container">
        <PictureContent ref={horizontalRef}>
          <h1>Some pictures of my Life</h1>
          <Picture />
        </PictureContent>
      </div>
    </Secion>
  );
};

export default Life;
