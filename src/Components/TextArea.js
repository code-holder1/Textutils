import React, { useState } from "react";


export default function TextArea(props) {
  const [text, setText] = useState("");

  const clearText = () => {
    setText("");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.getAlert("Text is being spoken", "success");
  };

  const copyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 99999);
    props.getAlert("Text copied to clipboard", "success");
  };

  const extraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.getAlert("Extra spaces removed", "success");
  };

  const UpCase = () => {
    let upText = text.toUpperCase();
    setText(upText);
    props.getAlert("Converted to uppercase", "success");
  };

  const lowerCase = () => {
    let lowerText = text.toLowerCase();
    setText(lowerText);
    props.getAlert("Converted to lowercase", "success");
  };

  const Change = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3 container my-3">
        <h1>Enter the text to analyse below:</h1>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "dark" ? "#575757" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          id="myBox"
          rows="8"
          value={text}
          onChange={Change}
        />
        <button className="btn btn-primary my-2" onClick={UpCase}>
          comvert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={lowerCase}>
          convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={extraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary m-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary m-2" onClick={speak}>
          Speak
        </button>
        <button className="btn btn-primary m-2" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox to preview here"}
        </p>
      </div>
    </>
  );
}
