import styled from "styled-components";
import { FiMoon } from "react-icons/fi";

export const HeaderContent = styled.header`
  width: 100%;
  height: 61px;
  padding: 0 16px;

  background-color: #ffffff;
  border-bottom: 2px solid #eaefed;

  display: flex;

  @media (min-width: 1920px) {
    justify-content: space-between;
  }
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;
  background-color: #b5f1dd;

  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  margin: 14.5px 0;

  span {
    font-family: "Poppins";
    font-size: 14px;
  }
`;

export const BrandWrapper = styled.div`
  margin: 10px auto;

  @media (min-width: 1920px) {
    width: 99px;
    height: 100%;

    border-right: 1px solid #eaefed;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const User = styled.div`
  width: 184px;
  height: 100%;

  border-left: 1px solid #eaefed;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1919px) {
    display: none;
  }
`;

export const UserInfo = styled.div`
  margin-left: 10px;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: 600;

  line-height: 14px;

  color: #34423d;
`;

export const UserData = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;

  color: #587169;
`;
