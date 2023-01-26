import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  ${'' /* background-image: url(https://raw.githubusercontent.com/SumitKumar1001/portfoliosvg/master/background.svg); */}
  background-color: black;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100px;
  position: relative;

  span {
    ${'' /* position: absolute; */}
    ${'' /* bottom: 4rem; */}
    color: #fff;
    text-align: center;

    a {
      text-decoration: underline;
      text-align: center;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
          Coded with 💙 by{" "}
          <a
            href="https://github.com/sumit-krk"
            target="_blank"
            rel="noopener noreferrer"
          >
            @sumitkumar
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
