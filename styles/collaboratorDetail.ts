import Image from "next/image";
import styled from "styled-components";
import { Select } from "../src/components/Select";

export const Content = styled.div`
  min-width: 360px;
  max-width: 956px;
  margin: 0 auto;

  padding-bottom: 40px;

  @media (min-width: 361px) {
    width: 100%;
  }
`;

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 41px 0 24px 16px;

  @media (min-width: 720px) {
    width: 100%;

    margin: 50px 0 28px 16px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
  color: #34423d;
  font-weight: 600;
  line-height: 23.2px;

  margin-left: 14px;

  @media (min-width: 720px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

// Collaborator Detail

export const CollaboratorDetail = styled.div`
  min-width: 348px;
  margin: 0 6px;
`;

export const CollaboratorDetailSection = styled.section`
  width: 100%;

  background-color: #ffffff;

  box-shadow: 0 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 16px;

  margin: 0 auto;
`;

export const Header = styled.div`
  width: 100%;
`;

export const Collaborator = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 80px;
  height: 80px;

  background-color: #eaefed;
  border-radius: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Info = styled.div`
  margin-left: 16px;
`;

export const Name = styled.p`
  font-size: 18px;
  font-weight: 600;

  line-height: 27px;

  color: #34423d;
`;

export const Email = styled.p`
  font-size: 14px;
  font-weight: 400;

  line-height: 16.8px;

  color: #587169;
`;

export const PersonInformationSection = styled.div`
  margin-top: 42.75px;
`;

export const PersonInformationTitle = styled.p`
  font-size: 18px;
  font-weight: 600;

  line-height: 27px;

  color: #34423d;
`;

export const PersonInformationData = styled.div`
  margin-top: 24px;

  @media (min-width: 710px) {
    display: flex;
    align-items: center;
  }
`;

export const PersonInformationItem = styled.div`
  width: 316px;
  height: 70px;

  background-color: #f5faf8;

  border-radius: 8px;
  border: 2px solid #cad6d1;
  padding: 16px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  @media (min-width: 361px) {
    width: 100%;
  }

  @media (min-width: 700px) {
    & + div {
      margin-top: 0;

      margin-left: 24px;
    }
  }
`;

export const PersonInformationItemIcon = styled.div`
  width: 38px;
  height: 38px;

  background-color: #cad6d1;
  border-radius: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PersonInformationItemData = styled.div`
  margin-left: 8px;
`;

export const PersonInformationItemTitle = styled.p`
  font-size: 12px;
  font-weight: 400;

  line-height: 14.4px;

  color: #587169;
`;

export const PersonInformationItemValue = styled.p`
  font-size: 14px;
  font-weight: 600;

  line-height: 14px;

  color: #587169;
`;

export const PersonInformationItemText = styled(PersonInformationItemValue)`
  color: #34423d;
`;

export const OrganizationalDataSection = styled.div`
  width: 316px;
  height: 395px;

  margin-top: 40px;

  border-radius: 8px;
  border: 2px solid #eaefed;

  padding: 24px;

  @media (min-width: 361px) {
    width: 100%;
  }

  @media (min-width: 936px) {
    width: 100%;
    height: 235px;
    max-width: 908px;
  }
`;

export const SelectWrapper = styled.div`
  margin-top: 24px;

  @media (min-width: 936px) {
    width: 100%;
    max-width: 418px;
  }
`;

export const SelectInput = styled(Select)``;

export const OrganizationDataItems = styled.div`
  @media (min-width: 936px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }
`;
