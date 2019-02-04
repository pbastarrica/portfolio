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
  curson: pointer;
  &:hover {
    background: black;
    border-color: white;
    color: white;
  }
`;
const rollToSection = id => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: "smooth" });
};
const Tabs = () => (
  <div>
    <Button onClick={() => rollToSection("Projects")}>Projects</Button>
    <Button onClick={() => rollToSection("Aboutme")}>About me </Button>
    <Button onClick={() => rollToSection("Career")}>Career</Button>
    <Button onClick={() => rollToSection("Skills")}>Skills</Button>
  </div>
);
export default Tabs;
