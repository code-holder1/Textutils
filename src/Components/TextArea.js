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
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
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
            backgroundColor: props.mode === "dark" ? "rgb(39 78 104)" : "white",
            color: props.mode === "light" ? "black" : "white",
          }}
          id="myBox"
          rows="8"
          value={text}
          onChange={Change}
        />
        <button disabled={text.length === 0}  className="btn btn-primary my-1" onClick={UpCase}>
          comvert to Uppercase
        </button>
        <button disabled={text.length === 0}  className="btn btn-primary m-1" onClick={lowerCase}>
          convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary m-1" onClick={extraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0}  className="btn btn-primary m-1" onClick={copyText}>
          Copy Text
        </button>
        <button disabled={text.length === 0}  className="btn btn-primary m-1" onClick={speak}>
          Speak
        </button>
        <button disabled={text.length === 0}  className="btn btn-primary m-1" onClick={clearText}>
          Clear
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview here! Enter something in the textbox above to preview it."}
        </p>
      </div>
    </>
  );
}
