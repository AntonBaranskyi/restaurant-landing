import styled from "styled-components";

export const WrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-right: 110px;
`;

export const FeaturesPhoto = styled.img`
  width: 90px;
  height: 90px;

  padding-bottom: 25px;

  position: relative;
  left: 59px;
`;

export const FeaturesTitle = styled.h2`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;

  padding-bottom: 19px;

  color: #2e2e2e;
`;

export const FeaturesText = styled.p`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 450;
  font-size: 18px;
  line-height: 160%;

  text-align: center;

  color: #3f3232;
`;
