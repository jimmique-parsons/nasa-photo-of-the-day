import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Img from "./components/Image";
import ImageText from "./components/ImageText";
import { Container } from "semantic-ui-react";

const head = document.head;
const link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css";

head.appendChild(link);

function App() {
  const [imageState, setImageState] = useState();
  const [copyrightState, setCopyRightState] = useState();
  const [imageDateState, setImageDateState] = useState();
  const [titleState, setTitleState] = useState();
  const [explinationState, setExplinationState] = useState();
  const [hdState, setHDState] = useState();
  const hdVisState = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=ndSqWHxm1joz14pwLd9KM7dki3Qd5GoFPBCV0KuP"
      )
      .then (res => {

        setImageState(res.data.url);
        setCopyRightState(res.data.copyright ? res.data.copyright : "NASA/CXC/SAO");
        setImageDateState(res.data.date);
        setTitleState(res.data.title);
        setExplinationState(res.data.explanation);
        setHDState(res.data.hdurl);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <div
        className="hd-modal"
        style={{ visibility: hdVisState[0] ? "visible" : "hidden" }}
      >
        <img src={hdState} alt="HD From NASA" />
        <button
          className="close-button"
          onClick={() => hdVisState[1](!hdVisState[0])}
        >
          X
        </button>
      </div>
      <h1>NASA Photo of the Day</h1>
      <Container className="main-container">
      <Img
        url={imageState}
        copyright={copyrightState}
        date={imageDateState}
      />
      <ImageText title={titleState} exp={explinationState} hdVisState={hdVisState}/>
      </Container>
    </div>
  );
}

export default App;
