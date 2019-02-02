import React, { Component } from "react";
import Picture from "./Picture";
import Links from "./Links";
import Aboutme from "./Aboutme";
import Tabs from "./Tabs";

class Header extends Component {
  render() {
    return (
      <div>
        <Picture />
        <Tabs />
        <Aboutme />
        <Links />
      </div>
    );
  }
}

export default Header;
