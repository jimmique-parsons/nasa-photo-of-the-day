import React, { useState, useEffect } from "react";
import axios from "axios";
/*import "./image.css";*/

const Image = () => {
    const [imageState, setImageState] = useState();
    const [copyrightState, setCopyRightState] = useState();
    const [imageDateState, setImageDateState] = useState();


    useEffect(() => {
        axios
          .get(
            "https://api.nasa.gov/planetary/apod?api_key=ndSqWHxm1joz14pwLd9KM7dki3Qd5GoFPBCV0KuP"
          )
          .then(res => {
              console.log(res);

              setImageState(res.data.url);
              setCopyRightState(res.data.copyright);
              setImageDateState(res.data.date);
          })
          .catch(err => console.log(err));
    }, []);

    return (
        <div className="img-container">
            <div className="img-footer">
                <p className="copyright">Copyright © {copyrightState}</p>
                <p className="photo-date">{imageDateState}</p>
            </div>
            <img src={imageState} alt="From NASA" />;
        </div>
    );
};

export default Image;