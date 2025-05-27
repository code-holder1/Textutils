import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextArea from "./Components/TextArea";
import Alert from "./Components/Alert";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
// import About from './Components/About';

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const getAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#13344a";
      document.body.style.color = "white";
      getAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      getAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      {/* <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />
        <Alert alert={alert} />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextArea mode={mode} getAlert={getAlert} />}
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router> */}
      <Navbar title="TextUtils" toggleMode={toggleMode} mode={mode} />   
      <Alert alert={alert} />
      <TextArea mode={mode} getAlert={getAlert} />
      {/* <About mode={mode} /> */}
    </>
  );
}

export default App;
