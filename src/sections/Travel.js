import React from "react";
import styled from "styled-components";
import ItemTravel from "../components/ItemTravel";
import { Parallax } from "@react-spring/parallax";
import Button from "../components/Button";

const TravelContent = styled.section`
  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    display: flex;
    justify-content: center;
  }
`;

const Travel = () => {
  return (
    <TravelContent>
      <h1>Travel</h1>
      <div className="container-fluid">
        <Parallax pages={9}>
          <div className="container-fluid">
            <ItemTravel />
          </div>
          <Button />
        </Parallax>
      </div>
    </TravelContent>
  );
};

export default Travel;
