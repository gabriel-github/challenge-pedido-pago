import styled from "styled-components";

interface IActiveActionProps {
  active?: boolean;
}

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  z-index: 10;
`;

export const Content = styled.div`
  width: 80%;
  min-width: 328px;
  min-height: 248px;
  background-color: #ffffff;

  padding: 16px 0px 40px 0px;
  box-shadow: 0 8px 24px #a5abb366;

  border-radius: 12px 12px 0 0;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 24px;
`;

export const HeaderText = styled.div`
  font-size: 18px;
  font-weight: 600;

  line-height: 27px;

  color: #34423d;
`;

export const CloseButton = styled.button`
  border: none;

  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #587169;

  cursor: pointer;
`;

export const ModalContent = styled.div`
  padding: 0 8px;
`;

export const Anchor = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 24px;

  cursor: pointer;
`;

export const AnchorText = styled.p<IActiveActionProps>`
  width: 100%;
  font-size: 16px;
  font-weight: 500;

  line-height: 24px;

  color: ${({ active }) => (active ? "#587169" : "#CAD6D1")};

  margin-left: 16px;
`;
