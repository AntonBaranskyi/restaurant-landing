import { FC } from "react";
import {
  AboutMainTitle,
  AboutWrapper,
  TextWrapper,
  Tomato,
  AboutTitle,
  AboutParagraph,
  PlayImg,
} from "./AboutStyled";
import tomato from "../../assets/tomato.png";
import { FoodBtn } from "../Main/MainStyled";
import play from '../../assets/Play button.png';

const About: FC = () => {
  return (
    <AboutWrapper>
        <PlayImg src = {play}/>
      <Tomato src={tomato} />

      <TextWrapper>
        <AboutMainTitle>About us</AboutMainTitle>
        <AboutTitle>Simple Way of Eating Delicious</AboutTitle>
        <AboutParagraph>
          Keep healthy food readily available. When you get hungry, you’re more
          likely to eat the first thing you see on the counter or in the
        </AboutParagraph>

        <FoodBtn style={{marginLeft : '140px'}}>Explore our story</FoodBtn>
      </TextWrapper>
    </AboutWrapper>
  );
};

export default About;
