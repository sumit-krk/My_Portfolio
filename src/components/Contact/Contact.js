import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
import { ContactWrapper, Email } from "./ContactElements";
import {FaTwitter, FaEnvelope, FaPhone} from "react-icons/fa";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <div className="BigCard">
          <Email>
            <div className="Mycontact">
              {/* Email: sumitkumar308786@gmail.com */}
              <ul>
                <li className="item">
                  <a href="mailto:sumitkumar308786@gmail.com" target="_blank" rel="noopener noreferrer" >
                    <FaEnvelope />
                  </a>
                </li>

                <li className="item">
                  <a href="tel:+918229857645" target="_blank" rel="noopener noreferrer" >
                    <FaPhone />
                  </a>
                </li>

                {/* <li className="item">
                  <a href="https://wa.me/8229857645" target="_blank" rel="noopener noreferrer" >
                    <FaWhatsapp />
                  </a>
                </li> */}

                {/* <li className="item">
                  <a href="https://www.facebook.com/profile.php?id=100006733836161" target="_blank" rel="noopener noreferrer" >
                    <FaFacebook />
                  </a>
                </li> */}

                <li className="item">
                  <a href="https://twitter.com/KushSumitMhto" target="_blank" rel="noopener noreferrer" >
                    <FaTwitter />
                  </a>
                </li>

              </ul>
            </div>
            {/* <span>sanjay.sumit10@gmail.com</span> */}
            {/* <a
              className="btn PrimaryBtn"
              href="mailto: sanjay.sumit10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send Mail
            </a> */}
          </Email>
        </div>
        <SocialIcon />
      </div>
    </ContactWrapper>
  );
}

export default Contact;
