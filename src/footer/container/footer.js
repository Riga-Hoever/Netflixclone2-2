import React from "react";
import Footer from "../styles";
import { footer } from "./footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube
  
 
} from "@fortawesome/free-brands-svg-icons";


export function FooterContainer() {
  return (
    <footer>
      <Footer.Title></Footer.Title>
      <Footer.Break />
      {/* <Footer.Row>
        <FontAwesomeIcon icon={faFacebookF}/>
        <FontAwesomeIcon icon={faInstagram}/>
        <FontAwesomeIcon icon={faTwitter}/>
        <FontAwesomeIcon icon={faYoutube}/>
      </Footer.Row> */}
      <Footer.Row>
        <Footer.Column>
            <Footer.Link1>
              <FontAwesomeIcon icon={faFacebookF}/>
              <FontAwesomeIcon icon={faInstagram}/>
              <FontAwesomeIcon icon={faTwitter}/>
              <FontAwesomeIcon icon={faYoutube}/>
            </Footer.Link1>

           
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
            <Footer.Link href="#">BingeWatch originals</Footer.Link>
           
        </Footer.Column>

        <Footer.Column>
            <Footer.Link2>
              <FontAwesomeIcon icon={faFacebookF}/>
            </Footer.Link2>
          <Footer.Link href="#">Help Centre</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
            <Footer.Link2>
              <FontAwesomeIcon icon={faFacebookF}/>
            </Footer.Link2>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
            <Footer.Link2>
              <FontAwesomeIcon icon={faFacebookF}/>
            </Footer.Link2>
          <Footer.Link href="#">Media Centre</Footer.Link>
          <Footer.Link href="#">Buy Gift Cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </footer>
  );
}
