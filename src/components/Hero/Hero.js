import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
        
          <HeroLeft className="marque">
          {/* <marquee direction="left" scrollamount="20" behavior="slide"> */}
          <h1>Hey there!, I'm Sumit</h1> 
            <h5>Full Stack Web Developer</h5>
            <p>
              {/* I design and code beautifully simple things, and I love what I do. */}
              Let's Discuss, Design and Digitalize Your thoughts.
            </p>
            {/* </marquee> */}
          </HeroLeft>
        
          <HeroRight>
            <Image
              src="https://user-images.githubusercontent.com/88573250/214934073-b897921a-d133-4a43-98a3-98b8868ab49c.png"
            />
          </HeroRight>
        </HeroWrapper>
        <ScrollDown to="projects">
          <ScrollLink>
            Scroll down
            <img
              src="https://img.icons8.com/officexs/512/thick-arrow-pointing-down.png"
              alt="scroll-down"
            />
          </ScrollLink>
        </ScrollDown>
      </HeroContainer>
    </main>
  );
}

export default Hero;
