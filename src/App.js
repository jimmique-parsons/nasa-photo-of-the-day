import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Image from "./components/Image";
import ImageText from "./components/ImageText";

function App() {
  const [imageState, setImageState] = useState();
  const [copyrightState, setCopyRightState] = useState();
  const [imageDateState, setImageDateState] = useState();
  const [titleState, setTitleState] = useState();
  const [explinationState, setExplinationState] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ndSqWHxm1joz14pwLd9KM7dki3Qd5GoFPBCV0KuP"
      )
      .then (res => {
        console.log(res);

        setImageState(res.data.url);
        setCopyRightState(res.data.copyright);
        setImageDateState(res.data.date);
        setTitleState(res.data.title);
        setExplinationState(res.data.explanation);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>NASA Photo of the Day</h1>
      <div className="main-container">
      <Image
        url={imageState}
        copyright={copyrightState}
        date={imageDateState}
      />
      <ImageText title={titleState} exp={explinationState} />
      </div>
    </div>
  );
}

export default App;
