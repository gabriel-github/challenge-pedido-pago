import styled, { css } from "styled-components";

interface ICheckProps {
  checked: boolean;
}

export const Container = styled.div<ICheckProps>`
  width: 20px;
  height: 20px;

  border: 2px solid #cad6d1;
  border-radius: 6px;

  /* cursor: pointer; */

  ${({ checked }) =>
    checked &&
    css`
      border: none;

      background-color: #1dd195;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #ffffff;
      }
    `}
`;
