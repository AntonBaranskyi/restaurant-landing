import {
  Back2Img,
  BackImg,
  FeaturesSelf,
  FeaturesTitle,
  FeaturesWrapper,
  Wrapper,
} from "./FeaturesStyled";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import food1 from "../../assets/food.png";
import mouth from "../../assets/mouth.png";
import truck from "../../assets/truck.png";
import back from "../../assets/3.png";
import back2 from "../../assets/back2.png";
import uniqid from "uniqid";

export interface IFeatures {
  link: string;
  title: string;
  text: string;
}

const featuresData: IFeatures[] = [
  {
    link: food1,
    title: "Quality Food",
    text: "Keep healthy food readily available. When you get hungry, you’re more likely to",
  },
  {
    link: mouth,
    title: "Super Taste",
    text: "Keep healthy food readily available. When you get hungry, you’re more likely to",
  },
  {
    link: truck,
    title: "Fast Delivery",
    text: "Keep healthy food readily available. When you get hungry, you’re more likely to",
  },
];

const Features: React.FC = () => {
  return (
    <FeaturesWrapper>
      <BackImg src={back} />
      <Back2Img src={back2} />
      <FeaturesSelf>Features</FeaturesSelf>
      <FeaturesTitle>Our Awesome Services</FeaturesTitle>
      <Wrapper>
        {featuresData &&
          featuresData.map(({ link, title, text }) => {
            return (
              <FeaturesItem
                key={uniqid()}
                link={link}
                title={title}
                text={text}
              />
            );
          })}
      </Wrapper>
    </FeaturesWrapper>
  );
};

export default Features;
