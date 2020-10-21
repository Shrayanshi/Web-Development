import React from "react";
import ReactDOM from "react-dom";
import SocialFollow from "./SocialFollow";
import "./styles.css";

function App() {
    return ( <
        div className = "App" >
        <
        h1 > Social Follow Demo X2 < /h1> <
        SocialFollow / >
        <
        /div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render( < App / > , rootElement);