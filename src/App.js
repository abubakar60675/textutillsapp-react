import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [toggleText, setToggleText] = useState("Enable Dark Mode");
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setToggleText("Enable Light Mode");
      showAlert("Dark mode has been enabled", "success ");
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      setToggleText("Enable Dark Mode");
      showAlert("Light mode has been enabled", "success ");
    }
  };

  return (
    <>
      {/* <Navbar title="TextUtills" aboutText="About TextUtils" /> */}

      <Router>
        <Navbar
          title="TextUtills"
          mode={mode}
          toggleMode={toggleMode}
          toggleText={toggleText}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text below to analyze"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
