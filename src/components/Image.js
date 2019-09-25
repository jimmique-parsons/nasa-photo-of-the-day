import React, { useState, useEffect } from "react";
import "./image.css";

const Image = ({ url, copyright, date }) => {
    return (
        <div className="img-container">
            <div className="img-footer">
                <p className="copyright">Copyright © {copyright}</p>
                <p className="photo-date">{date}</p>
            </div>
            <img src={url} alt="From NASA" />;
        </div>
    );
};

export default Image;