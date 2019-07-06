import React from "react";
import { Link } from "react-router-dom";
import GatosSideBar from '../../GatosSideBar'
import Localizer from '../../lib/Localizer'
import translations from './GatosNavBar.translations'
import './GatosNavBar.css'

const Localize = Localizer(translations)

const linkStyle = {
    color: "white",
    display: "block",
    textAlign: "center",
    padding: "14px 12px",
    textDecoration: "none"
}

const divStyle = {
    width: "100%",
    background: "#333"
}

const ulStyle = {
    listStyleType: "none",
    padding: 0,
    marginTop: "6px"
}        

function GatosNavBar() {
  return (
      <div style={{ display: "flex" }} id="gatosnavbar">
        <GatosSideBar pageWrapId={"page-wrap"} outerContainerId={"app"} />

        <div style={divStyle} id="page-wrap">
          <ul style={ulStyle}>
            <img src="/img/black_cat_line_navbar.png" style={{float: "left", height: "3em"}}
                 alt="Black Cat Line by George Bokhua" id="logo"></img>
            <li style={{float: "left"}}><Link style={linkStyle} to="/"><Localize>Busca Gatos</Localize></Link></li>
            <li style={{float: "right"}}><Link style={linkStyle} to="/sube/"><Localize>Subí un gato</Localize></Link></li>
          </ul>
        </div>
      </div>
  );
}

export default GatosNavBar;
