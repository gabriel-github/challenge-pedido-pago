import styled, { css } from "styled-components";

interface ISelectProps {
  width?: number;
  height?: number;
}

export const Container = styled.div<ISelectProps>`
  width: 100%;
  height: 56px;

  border-radius: 8px;
  border: 2px solid #cad6d1;

  padding: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Span = styled.span`
  position: absolute;

  color: #a3b8b0;

  transform: translateY(-28px);
  background-color: #ffffff;

  padding: 0 4px;
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 500;

  line-height: 24px;

  color: #587169;
`;
