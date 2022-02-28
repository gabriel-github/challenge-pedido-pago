import styled from "styled-components";

export const Container = styled.button`
  width: 32px;
  height: 32px;

  background-color: #eaefed;

  border: none;
  border-radius: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 720px) {
    width: 36px;
    height: 36px;
  }
`;
