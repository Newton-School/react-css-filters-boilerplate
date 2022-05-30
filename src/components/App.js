import React from "react";
import { useRef, useEffect, useState } from "react";
import "../styles/App.css";

const FilterControls = () => {
  return (
    <form className="controls" id="filter-controls">
      <label htmlFor="img-url">Image link:</label>
      <input
        onChange={() => false}
        type="text"
        className="text-input"
        id="img-url"
        name="img-url"
      />
      <label htmlFor="filter-contrast">
        Contrast: <span className="filter-values">10%</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="200"
        className="slider"
        id="filter-contrast"
        name="filter-contrast"
      />
      <label htmlFor="filter-brightness">
        Brightness: <span className="filter-values">10%</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="200"
        className="slider"
        id="filter-brightness"
        name="filter-brightness"
      />
      <label htmlFor="filter-saturate">
        Saturate: <span className="filter-values">10%</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="200"
        className="slider"
        id="filter-saturate"
        name="filter-saturate"
      />
      <label htmlFor="filter-sepia">
        Sepia: <span className="filter-values">10%</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="100"
        className="slider"
        id="filter-sepia"
        name="filter-sepia"
      />
      <label htmlFor="filter-grayscale">
        Grayscale: <span className="filter-values">10%</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="100"
        className="slider"
        id="filter-grayscale"
        name="filter-grayscale"
      />
      <label htmlFor="filter-invert">
        Invert: <span className="filter-values">10%</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="100"
        className="slider"
        id="filter-invert"
        name="filter-invert"
      />
      <label htmlFor="filter-blur">
        Blur: <span className="filter-values">10px</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="15"
        className="slider"
        id="filter-blur"
        name="filter-blur"
      />
      <label htmlFor="filter-hueRotate">
        Hue Rotate: <span className="filter-values">10deg</span>
      </label>
      <input
        onChange={() => false}
        type="range"
        min="0"
        max="360"
        className="slider"
        id="filter-hueRotate"
      />
    </form>
  );
};

const FilterHandler = () => {
  return (
    <div className="filter-container">
      <div className="filter-div" id="filter-div">
        <img src={"https://wallpaperaccess.com/full/1369012.jpg"} />
      </div>
    </div>
  );
};

const App = () => {
  //Initial CSS Filter Values:
  // imgUrl: "https://wallpaperaccess.com/full/1369012.jpg",
  // contrast: 100,
  // brightness: 100,
  // saturate: 100,
  // sepia: 0,
  // grayscale: 0,
  // invert: 0,
  // blur: 0,
  // hueRotate: 0,
  return (
    <div id="main">
      <h1 className="title">CSS Image Filters</h1>
      <div className="filter-card">
        <FilterControls />
        <FilterHandler />
      </div>
    </div>
  );
};

export default App;
