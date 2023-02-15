import styled from "styled-components";

export const FooterTag = styled.footer`
  display: flex;
  background: linear-gradient(
    180deg,
    rgba(255, 148, 1, 0.05) 0%,
    rgba(255, 237, 211, 0) 100%
  );
  flex-wrap: wrap;
  width: 100%;
`;

export const FooterImg = styled.img`
  position: absolute;

  width: 205.68px;
  height: 307.76px;
`;

export const CompanyLogo = styled.img`
  width: 110px;
  height: 32px;

  padding-bottom: 23px;
`;

export const CompanyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 280px;
  margin-top: 83px;
  margin-right: 170px;
  padding-bottom: 50px;
`;

export const CompanyImg = styled.img`
  width: 19px;
  height: 14px;
`;

export const CompanyLink = styled.a`
  text-decoration: none;
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 450;
  font-size: 16px;
  line-height: 30px;

  text-transform: capitalize;

  color: #3f3232;
`;

export const FooterItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 200px;
  gap: 100px;
  padding-top: 85px;

  padding-bottom: 50px;
`;

export const FooterColumn = styled.div``;

export const ColumnTitle = styled.h3`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  padding-bottom: 20px;
  text-transform: capitalize;

  color: #2e2e2e;
  text-align: center;
  padding-left: 12px;
`;

export const LinkWrapper = styled.li`
  list-style-type: none;
  padding-bottom: 18px;
`;

export const LinkItem = styled.a`
  text-decoration: none;
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 450;
  font-size: 18px;
  line-height: 30px;
  margin: 20px;

  text-transform: capitalize;

  color: #6a5c5c;

  &:hover {
    color: #a2a2a2;
  }
`;

export const HeartImg = styled.img`
  position: relative;
  width: 117px;
  height: 109px;
  left: 800px;
  bottom: 61px;

  @media (max-width: 1536px) {
    left: 634px;
  }
`;

export const ReservedWrapper = styled.div`
  display: block;
  margin-bottom: 84px;
`;
export const TextReserved = styled.p`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 450;
  font-size: 12px;
  line-height: 120%;

  /* or 14px */

  color: #685d5d;
`;
