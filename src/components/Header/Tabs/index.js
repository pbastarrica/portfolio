import React from "react";
import styled from "styled-components";

const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  text-align: center;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;
  cursor: pointer;
  &:hover {
    background: black;
    border-color: white;
    color: white;
  }
`;
const scrollToSection = id => {
  return () => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  };
};
const Tabs = () => (
  <div>
    <Button onClick={scrollToSection("Projects")}>Projects</Button>
    <Button onClick={scrollToSection("Aboutme")}>About me </Button>
    <Button onClick={scrollToSection("Career")}>Career</Button>
    <Button onClick={scrollToSection("Skills")}>Skills</Button>
  </div>
);
export default Tabs;
