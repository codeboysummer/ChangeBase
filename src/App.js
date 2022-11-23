import HomePage from "./Pages/HomePage";
import React from "react";
import "./styles/app.css";
import Navbar from "./comps/Navbar";
import AnimatedCursor from "react-animated-cursor";


function App() {

  return (
    <>
      <Navbar />
      <AnimatedCursor
      innerSize={20}
      outerSize={40}
      color='255, 119, 106'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
     

      <HomePage />
    </>
  );
}

export default App;
