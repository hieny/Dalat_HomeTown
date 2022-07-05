import React from "react";
import { useSelector } from "react-redux";
import HoverVideoPlayer from "react-hover-video-player";
import { ParallaxLayer } from "@react-spring/parallax";
import styled from "styled-components";

const ItemTravel = () => {
  const place = useSelector((state) => state.TravelReducer.place);
  const Name = styled.h2`
    font-size: ${(props) => props.theme.fontxxl};
    font-weight: bold;
    text-align: center;
    font-family: Kaushan Script;
  `;

  const Description = styled.p`
    font-size: ${(props) => props.theme.fontlg};
    text-align: center;
    padding: 10px 20px;
  `;

  const renderTravelItem = () => {
    return place.map((item, index) => {
      return (
        <ParallaxLayer offset={item.offset} speed={1.5} key={index}>
          <div className="row">
            <div className="col-md-7">
              <HoverVideoPlayer
                key={index}
                videoSrc={item.video}
                pausedOverlay={
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      // Make the image expand to cover the video's dimensions
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                }
              />
            </div>
            <div className="col-md-5">
              <Name>{item.name}</Name>

              <br />
              <Description>{item.description}</Description>
            </div>
          </div>
        </ParallaxLayer>
      );
    });
  };
  return renderTravelItem();
};

export default ItemTravel;
