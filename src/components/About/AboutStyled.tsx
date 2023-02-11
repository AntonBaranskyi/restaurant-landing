import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;

  flex-wrap: wrap;
  background: linear-gradient(
    180deg,
    rgba(255, 148, 1, 0.05) 0%,
    rgba(255, 237, 211, 0) 100%
  );

  margin: 0 auto;
`;

export const Tomato = styled.img`
  height: 619px;
  width: 760px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  padding: 140px 0 0 100px;
`;

export const AboutMainTitle = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  padding-bottom: 24px;

  /* identical to box height, or 125% */

  color: #ff9401;
`;

export const AboutTitle = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 60px;

  padding-bottom: 21px;

  color: #2e2e2e;
`;

export const AboutParagraph = styled.p`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 450;
  font-size: 20px;
  line-height: 160%;
  padding-bottom: 50px;

  /* or 32px */

  color: #3f3232;
`;

export const PlayImg = styled.img`
  position: absolute;
  height: 90px;

  top: 1300px;
  left: 620px;
`;
