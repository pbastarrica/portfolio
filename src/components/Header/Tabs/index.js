import React from "react";
import styled from "styled-components";

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid black;

  /* The GitHub button is a primary button
   * edit this to target it specifically! */
`;

const Tabs = () => (
  <div>
    <Button href="#sectionA">section A</Button>
  </div>
);
export default Tabs;
