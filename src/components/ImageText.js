import React from "react";
import styled from 'styled-components';
import { Scrollbar } from "react-scrollbars-custom";
import "./imageText.css";
import HDButton from "./HDButton";

const Title = styled.h3`

    transition-duration: 0.5s;

    :hover {
      color: orange; 
      text-shadow: 2px 2px 5px #000;
    }  
`;

const Explination = styled.p`

    transition-duration: 0.5s;

    :hover {
      background: -webkit-linear-gradient(#e49100, #320d76);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
    }  
`;


const ImageText = ({ title, exp, hdVisState }) => {
    return (
        <div className="main-text-div">
            <Title>{title}</Title>
            <div className="inner-text-div">
              <Scrollbar
                style={{ width: "100%", height: "100%" }}
                maximalThumbYSize={100}
              >
                <Explination>{exp}</Explination>
              </Scrollbar>  
            </div>
            <HDButton hdVisState={hdVisState} />
        </div>
    );
};

export default ImageText;