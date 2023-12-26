import { useRef } from "react";
import "./App.css";

const App = () => {
  const inputBoxRef = useRef(null);
  const submitButtonRef = useRef(null);
  const backgroundVideoRef = useRef(null);

  const handleSubmit = () => {
    const inputLength = inputBoxRef.current.value.length;
    backgroundVideoRef.current.style.display = "block";

    if (inputLength === 7) {
            backgroundVideoRef.current.src = "thala.mp4";
    } else if (inputBoxRef.current.value === "7") {
          backgroundVideoRef.current.src = "nothing.mp4";
    }else if (inputBoxRef.current.value === "ms") {
          backgroundVideoRef.current.src = "thala.mp4";
    }else if (inputBoxRef.current.value === "dhoni") {
          backgroundVideoRef.current.src = "thala.mp4";
    }else if (inputBoxRef.current.value === "sakshi") {
          backgroundVideoRef.current.src = "thala.mp4";
    } else {
      backgroundVideoRef.current.src = "moyemoye.mp4";
    }

    backgroundVideoRef.current.load();
    backgroundVideoRef.current.play();
  };
  return (
    <>
      <div id="main">
        <div id="form">
          <div id="title">
            <h2>Thala Review System 😎</h2>
          </div>
          <div className="">
            <video
              id="backgroundVideo"
              ref={backgroundVideoRef}
              style={{ display: "none" }}
            />
          </div>
          <input type="text" id="inputBox" ref={inputBoxRef} placeholder="enter a 7-letter word"/>
          <br />
          <button
            id="submitButton"
            ref={submitButtonRef}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
