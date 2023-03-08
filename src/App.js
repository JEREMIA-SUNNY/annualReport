// import logo from './logo.svg';
import "./App.css";
import "animate.css";
import React, { useState, useRef, useEffect } from "react";
// import './app.scss'
import Vertical_slider from "./components/Vertical_slider";
import { Slider2 } from "./components/Slider2";
import { FirstComponent } from "./components/FirstComponent";
import { Second } from "./components/Second";
import { Thirslide } from "./components/Thirdslide";
import { Verticla2 } from "./components/Verticla2";
import { Innovatiing } from "./components/Innovatiing";
import "./app.scss";
import { Strengthen } from "./components/Strengthen";

function App() {
  const [activeComponent, setActiveComponent] = useState("Component1");
  const componentRefs = {
    FirstComponent: useRef(null),
    Second: useRef(null),
    Thirslide: useRef(null),
    Vertical_slider: useRef(null),
    Verticla2: useRef(null),
    Innovatiing: useRef(null),
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveComponent(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    Object.values(componentRefs).forEach((ref) => {
      observer.observe(ref.current);
    });
    return () => {
      Object.values(componentRefs).forEach((ref) => {
        observer.unobserve(ref.current);
      });
    };
  }, []);
  return (
    <div className="App">
      <div ref={componentRefs.FirstComponent} id="FirstComponent">
        <FirstComponent />
      </div>
      <div ref={componentRefs.Second} id="Component2">
        <Second />
      </div>
      <div ref={componentRefs.Thirslide} id="Component3">
        <Thirslide />
      </div>
      <div ref={componentRefs.Vertical_slider} id="Component4">
        <Vertical_slider />
      </div>
      <div ref={componentRefs.Verticla2} id="Component5">
        <Verticla2 />
      </div>

      <div ref={componentRefs.Innovatiing} id="Component6">
        {/* < Innovatiing /> */}
      </div>
      <Strengthen />
    </div>
  );
}

export default App;
