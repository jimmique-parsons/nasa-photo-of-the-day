import React from "react";
import { Scrollbar } from "react-scrollbars-custom";
import "./imageText.css";

const ImageText = ({ title, exp }) => {
    return (
        <div className="main-text-div">
            <h3>{title}</h3>
            <div className="inner-text-div">
              <Scrollbar style={{ width: "100%", height: "100%" }}>
                <p>{exp}</p>
              </Scrollbar>  
            </div>
        </div>
    );
};

export default ImageText;