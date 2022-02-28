import styled from "styled-components";

interface ICardProps {
  opened?: boolean;
}
export const ListRoleItem = styled.div<ICardProps>`
  width: 319px;
  height: ${({ opened }) => (opened ? "230px" : "65px")};

  border: 2px solid #b5f1dd;
  border-radius: 8px;

  padding: ${({ opened }) => (opened ? "24px 16px" : "0 16px")};

  & + div {
    margin-top: 8px;
  }

  width: 100%;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 720px) {
    width: 100%;
    height: 69px;

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 24px;
    gap: 8px;

    flex-wrap: nowrap;
    border: none;

    border-bottom: 1px solid #eaefed;
  }

  svg {
    margin-left: ${({ opened }) => (opened ? 0 : "auto")};
  }
`;

export const RoleInfo = styled.div`
  width: 46%;

  @media (min-width: 720px) {
    width: 100%;
  }
`;

export const RoleTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16.8px;

  color: #587169;

  @media (min-width: 720px) {
    display: none;
  }
`;

export const RoleText = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;

  color: #587169;

  margin-top: 2px;
`;

export const RoleButtonFooter = styled.div`
  min-width: 287px;
  margin-top: 16px;

  padding-right: 5px;

  @media (min-width: 361px) {
    width: 100%;
  }
`;

export const IconWrapper = styled.button`
  border: none;
  background: transparent;
`;
