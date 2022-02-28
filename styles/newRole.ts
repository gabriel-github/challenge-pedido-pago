import styled from "styled-components";
import { Select } from "../src/components/Select";

export const Content = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 956px;

  margin: 0 auto;

  padding-bottom: 40px;
`;

export const Header = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin: 40px 0 24px 16px;

  @media (min-width: 720px) {
    margin: 57px 0 24px 16px;

    font-size: 32px;
    line-height: 32px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #34423d;
  font-weight: 600;
  line-height: 24px;

  @media (min-width: 720px) {
    margin-left: 16px;

    font-size: 32px;
    line-height: 32px;
  }
`;

// Role

export const NewRole = styled.div`
  min-width: 348px;
  margin: 0 6px;
`;

export const NewRoleSection = styled.section`
  width: 100%;
  max-width: 956px;
  background-color: #ffffff;

  box-shadow: 0 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 0;

  margin: 0 auto;
`;

export const RoleData = styled.div`
  padding: 0 16px;

  padding-bottom: 40px;
  border-bottom: 2px solid #eaefed;

  @media (min-width: 720px) {
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const RoleTitle = styled.div`
  font-size: 16px;
  font-weight: 600;

  line-height: 16px;

  color: #34423d;

  margin-bottom: 24px;
`;

export const InputsWrapper = styled.div`
  @media (min-width: 361px) {
    width: 100%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 970px) {
    flex-wrap: nowrap;
  }
`;

export const SelectDepartmentWrapper = styled.div`
  width: 316px;
  max-width: 442px;

  @media (max-width: 945px) {
    width: 100%;
    max-width: 100%;
  }

  @media (min-width: 720px) {
    width: 100%;
  }
`;

export const InputRoleLabel = styled.label`
  position: relative;

  background-color: #ffffff;
  color: #cad6d1;

  min-width: 316px;
  max-width: 442px;

  height: 56px;
  border-radius: 8px;
  padding: 20px;

  border: 2px solid #cad6d1;

  display: flex;
  align-items: center;

  margin-top: 24px;

  &::before {
    content: "Cargo";
    position: absolute;

    transform: translateY(-28px);
    background-color: #ffffff;

    padding: 0 2px;
  }

  @media (min-width: 361px) {
    width: 100%;
  }

  @media (max-width: 945px) {
    width: 100%;
    max-width: 100%;
  }

  @media (min-width: 945px) {
    margin-top: 0;
  }
`;

export const InputRole = styled.input`
  width: 100%;

  border: none;
  outline: none;

  &::placeholder {
    font-size: 16px;
    font-weight: 500;

    line-height: 24px;

    color: #587169;
  }
`;

export const ListRoles = styled.div`
  margin-top: 40px;

  padding: 0 16px;
`;

export const ListTitle = styled.p`
  font-size: 16px;
  font-weight: 600;

  line-height: 16px;

  color: #34423d;
`;

export const RolesHeader = styled.div`
  min-width: 316px;
  max-width: 902px;
  height: 49px;
  padding: 16px;

  display: grid;
  grid-template-columns: 102px 46px 46px 66px;

  gap: 8px;

  border: 1px solid #cad6d1;
  border-radius: 8px 8px 0 0;

  margin-top: 24px;

  @media (min-width: 361px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }

  @media (min-width: 1920px) {
    grid-template-columns: 500px 96px 96px 96px;
  }
`;

export const HeaderText = styled.div`
  font-size: 12px;
  font-weight: 600;

  line-height: 16.8px;

  color: #587169;
`;

export const ListItem = styled.div`
  min-width: 316px;
  max-width: 902px;
  height: 68px;
  padding: 16px;

  display: grid;
  grid-template-columns: 102px 46px 46px 66px;

  align-items: center;
  justify-content: space-between;

  gap: 8px;

  border-bottom: 1px solid #eaefed;

  @media (min-width: 361px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }

  @media (min-width: 1920px) {
    grid-template-columns: 500px 96px 96px 96px;
  }
`;

export const ItemText = styled.div`
  font-size: 12px;
  font-weight: 400;

  line-height: 16.8px;

  color: #587169;
`;
