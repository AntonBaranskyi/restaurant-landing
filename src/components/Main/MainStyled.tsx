import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  width: 1225px;
  margin-bottom: 150px;
`;

export const FoodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  width: 650px;
  margin-left: 190px;
`;

export const RestaurantText = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;

  margin-top: 15px;
  padding-bottom: 16px;

  color: #ff9401;
`;

export const FoodTitle = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 800;
  font-size: 96px;
  line-height: 108px;

  margin-bottom: 25px;
  margin-top: 2px;

  /* or 112% */

  color: #232323;
`;

export const FoodDescr = styled.p`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 450;
  font-size: 20px;
  line-height: 160%;

  margin-bottom: 40px;

  /* or 32px */

  color: #3f3232;
`;

export const FoodBtn = styled.button`
  background: #ff9401;
  border-radius: 31px;
  width: 243px;
  height: 62px;

  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;

  /* identical to box height, or 150% */
  text-transform: capitalize;

  color: #ffffff;

  margin-bottom: 60px;

  box-shadow: 0px 20px 40px rgba(255, 148, 1, 0.15);
`;

export const TitleImg1 = styled.img`
  position: absolute;
  height: 61px;
  width: 62px;

  top: 318px;
  left: 573px;
`;

export const SmileImg = styled.img`
  position: absolute;
  height: 52px;
  width: 52px;

  top: 430px;
  left: 640px;
`;

export const SmileImg2 = styled.img`
  position: absolute;
  height: 52px;
  width: 52px;

  top: 430px;
  left: 698px;
`;

export const Span = styled.span`
  position: relative;
  left: 85px;
`;

export const ImgWrapper = styled.div`
  width: 380px;
`;

export const BigImg = styled.img`
  width: 835px;
  height: 534px;
`;

export const SmallImg1 = styled.img`
  position: absolute;
  width: 186.88px;
  height: 144px;

  top: 545px;
  left: 1488px;

  filter: drop-shadow(0px 20px 40px rgba(255, 151, 2, 0.15));
`;

export const SmallImg2 = styled.img`
  position: absolute;
  width: 186.88px;
  height: 144px;

  top: 650px;
  left: 1309px;

  filter: drop-shadow(0px 20px 40px rgba(255, 151, 2, 0.15));
`;

export const SmallImg3 = styled.img`
  position: absolute;
  width: 186.88px;
  height: 144px;

  top: 545px;
  left: 1101px;

  filter: drop-shadow(0px 20px 40px rgba(255, 151, 2, 0.15));
`;

export const SocialDiv = styled.div`
  display: flex;

  width: 165px;
  height: 35px;
  filter: drop-shadow(0px 10px 40px rgba(255, 148, 1, 0.2));
`;

export const SocialImg = styled.img`
  padding-right: 25px;
  filter: drop-shadow(0px 10px 40px rgba(255, 148, 1, 0.2));
  cursor: pointer;
`;
