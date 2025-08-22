import React from "react";
import Team from "./Team";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-text">
        Welcome to AKA Cosmetics! We are passionate about beauty and wellness.
      </p>
      <Team />
    </div>
  );
}
