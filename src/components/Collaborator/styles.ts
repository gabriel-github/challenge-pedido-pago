import Image from "next/image";
import styled from "styled-components";

interface IToggleCard {
  opened: boolean;
}

interface ICollaboratorProps {
  statusCollaborator: "active" | "inactive";
}

export const Container = styled.div`
  width: 100%;
  min-width: 319px;
  max-width: 902px;
  background-color: #ffffff;

  border: 2px solid #b5f1dd;
  border-radius: 8px;

  box-shadow: 0 4px 8px #a5abb329;

  padding: 24px 16px;

  & + div {
    margin-top: 8px;
  }

  @media (min-width: 945px) {
    width: 100%;
    border: none;
    box-shadow: none;

    border-bottom: 1px solid #eaefed;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Title = styled.p`
  font-size: 12px;
  font-weight: 600;

  line-height: 16.8px;

  color: #587169;
`;

export const CollaboratorHeader = styled.div`
  width: 100%;

  @media (min-width: 945px) {
    width: 196px;
  }
`;

export const CollaboratorProfileInfoWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 8px;
`;

export const CollaboratorProfileInfo = styled.div`
  display: flex;
`;

export const IconContainer = styled.div`
  cursor: pointer;
`;

export const Avatar = styled(Image).attrs({
  width: "32px",
  height: "32px",
})`
  border-radius: 32px;
`;

export const Name = styled.p`
  width: 158px;

  font-size: 12px;
  font-weight: 600;

  color: #587169;

  margin-left: 8px;

  @media (min-width: 720px) {
    width: 113px;

    display: flex;
    align-items: center;
  }
`;

export const CollaboratorInfos = styled.div<IToggleCard>`
  display: ${({ opened }) => (opened ? "flex" : "none")};

  flex-wrap: wrap;

  @media (min-width: 945px) {
    flex-wrap: nowrap;
    flex: 1;

    display: grid;
    grid-template-columns: 124px 96px 142px 182px;
    gap: 32.5px;
  }
`;

export const CollaboratorInfo = styled.div`
  width: 50%;

  padding: 16px 0;

  @media (min-width: 945px) {
    width: 100%;

    margin-left: 32.5px;
  }
`;

export const CollaboratorTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 16.8px;

  color: #587169;

  @media (min-width: 945px) {
    display: none;
  }
`;

export const CollaboratorText = styled.p<ICollaboratorProps>`
  font-size: 12px;
  font-weight: 400;
  line-height: 16.8px;

  color: ${({ statusCollaborator }) =>
    statusCollaborator === "active" ? "#587169" : "#A3B8B0"};

  margin-top: 2px;
`;

export const CollaboratorInfoStatus = styled.div`
  width: 100%;
  padding: 16px 0;

  @media (min-width: 945px) {
    margin-left: 32.5px;
  }
`;

export const Status = styled.div<ICollaboratorProps>`
  width: 72px;
  height: 24px;
  border-radius: 80px;

  padding: 4px 8px;
  background-color: ${({ statusCollaborator }) =>
    statusCollaborator === "active" ? "#b5f1dd" : "#EAEFED"};

  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 2px;
`;

export const StatusText = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 16.24px;

  color: #34423d;
`;

export const CollaboratorButtonFooter = styled.div<IToggleCard>`
  min-width: 287px;
  margin-top: 16px;

  @media (min-width: 361px) {
    width: 100%;
  }

  display: ${({ opened }) => (opened ? "inline" : "none")};
`;

export const IconWrapper = styled.button`
  border: none;
  background: transparent;
`;
