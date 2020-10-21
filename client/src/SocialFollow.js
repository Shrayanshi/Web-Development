import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
    return ( <
        div className = "social-container" >
        <
        h3 > @LearnBuildTeach < /h3> <
        a href = "https://www.youtube.com/channel/UC0RhatS1pyxInC00YKjjBqQ"
        className = "youtube social" >
        <
        FontAwesomeIcon icon = { faYoutube }
        size = "2x" / >
        <
        /a> <
        a href = "https://www.facebook.com/geeksforgeeks.org/"
        className = "facebook social" >
        <
        FontAwesomeIcon icon = { faFacebook }
        size = "2x" / >
        <
        /a> <
        a href = "https://twitter.com/geeksforgeeks?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
        className = "twitter social" >
        <
        FontAwesomeIcon icon = { faTwitter }
        size = "2x" / >
        <
        /a> <
        a href = "https://www.instagram.com/geeks_for_geeks/?hl=en"
        className = "instagram social" >
        <
        FontAwesomeIcon icon = { faInstagram }
        size = "2x" / >
        <
        /a> < /
        div >
    );
}