import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 354px;
  height: 362px;

  background: #fff5ee;
  border-radius: 8px;
  /* border: 1px solid black; */
  margin: 0 54px 72px 0;
`;

export const Image = styled.img`
  width: 330px;
  height: 231px;

  border-radius: 8px;
  margin: 0 auto;
  padding-top: 8px;

  padding-bottom: 5px;
`;

export const Text = styled.p`
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 60px;
  padding: 0 132px 15px 10px;

  color: #2e2e2e;
`;

export const Star = styled.p`
  font-family: "Gilroy";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 60px;

  /* identical to box height, or 375% */

  color: #818181;
`;

export const Price = styled.p`
  font-family: "Gilroy";
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  line-height: 60px;

  /* identical to box height, or 333% */

  color: #ff9401;

  position: relative;
  bottom: 16px;
  left: 20px;
`;

export const StarImg = styled.img`
  position: relative;
  top: 25px;
  left: 2px;
  width: 11px;
  height: 11px;
  display: inline-block;
`;
export const AddButton = styled.div`
  width: 100px;
  height: 26px;
  background: rgba(196, 196, 196, 0.26);
  border-radius: 15px;

  margin: 0 150px 24px 5px;
  cursor: pointer;

  &:hover {
    background: red;
  }
`;

export const AddText = styled.p`
  position: relative;
  bottom: 18px;

  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 60px;

  color: #696969;
`;
