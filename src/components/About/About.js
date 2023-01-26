import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <Image
            src="https://img.icons8.com/color/512/guest-male.png"
            alt="man-svgrepo"
          />
          {/* <div className="AboutBio">
            Hello! My name is <strong> Sumit Kumar </strong> and I am a logical and results-driven Web Developer dedicated to building and optimizing user-focused websites for customers with various business objectives.
          </div> */}
          <div className="AboutBio">
            Growing up, I have seen the invention of new technologies and tools
            to utilize and procure data and information through the electronic
            medium, which triggered my curiosity to learn about technology and
            how applications work in the real world.<br/>I studied Information
            Technology in college and learned a couple of programming languages
            which ignited my passion and ambition to work as a Software
            Developer.
          </div>
          {/* <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div> */}
          {/* <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies> */}
        </div>
      </div>
      <div className="space"></div>
      <div className="Container">
        <div className="SectionTitle">Skills</div>
        <div className="BigCard">
          <div className="AboutBio tagline2">
            I have become confident using the following technologies.
          </div>
          <Technologies>
            {stackList.map((stack, index) => (
              <Tech key={index} className="tech">
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            ))}
          </Technologies>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
