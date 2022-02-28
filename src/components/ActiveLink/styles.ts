import Link from "next/link";
import styled, { css } from "styled-components";

interface IActiveLinkProps {
  isActive: boolean;
}

export const StyledLink = styled.a<IActiveLinkProps>`
  width: 194px;
  height: 30px;

  position: relative;

  /* background-color: purple; */

  display: flex;
  align-items: flex-start;
  justify-content: center;
  color: ${({ isActive }) => (isActive ? "#34423d" : "#A3B8B0")};

  ${({ isActive }) =>
    isActive
      ? css`
          &::before {
            content: "";
            position: absolute;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: #22e0a1;
          }
        `
      : css`
          &::before {
            content: "";
            position: absolute;
            bottom: -2px;
            width: 100%;
            height: 2px;
            background-color: transparent;
          }
        `}
`;

export const LinkText = styled.p`
  font-size: 14px;
  font-weight: 600;

  line-height: 14px;
`;
