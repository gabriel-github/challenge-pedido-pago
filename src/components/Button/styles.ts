import styled from "styled-components";

interface IButtonProps {
  width?: number;
  height?: number;
  borderColor?: string;
}

export const Container = styled.button<IButtonProps>`
  width: 100%;
  height: 52px;

  border: 2px solid
    ${({ borderColor }) => (borderColor ? borderColor : "#b5f1dd")};
  border-radius: 8px;

  background-color: transparent;

  padding: 14px 24px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;

  text-align: center;

  color: #34423d;
  margin-left: 8px;
`;
