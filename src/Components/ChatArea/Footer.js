import React from "react";
import {Attach, Emoji, Record, Send} from "../../Assets/Icons";
import TextField from "../TextFeild";

const Footer = () => {
  return <div className="footer">
    <Attach />
    <Emoji />
    <TextField />
    <Record />
    <Send />
  </div>;
};

export default Footer;
