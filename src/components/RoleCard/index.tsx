import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiFilePlus } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button } from "../Button";
import {
  IconWrapper,
  ListRoleItem,
  RoleButtonFooter,
  RoleInfo,
  RoleText,
  RoleTitle,
} from "./styles";

interface IRole {
  name: string;
  departament: string;
  agents_quantity: number;
}

interface IRoleCardProps {
  role: IRole;
  openModalSeeRole: () => void;
}

export function RoleCard({ role, openModalSeeRole }: IRoleCardProps) {
  const [opened, setOpened] = useState(false);
  const { width } = useWindowDimensions();

  function handleToggleCard() {
    setOpened((oldOpened) => !oldOpened);
  }

  return (
    <ListRoleItem opened={opened}>
      <RoleInfo>
        <RoleTitle>Cargo</RoleTitle>
        <RoleText>{role.name}</RoleText>
      </RoleInfo>
      {width && width < 720 && (
        <>
          {opened && (
            <RoleInfo>
              <RoleTitle>Departamento</RoleTitle>
              <RoleText>{role.departament}</RoleText>
            </RoleInfo>
          )}
        </>
      )}

      {width && width > 720 && (
        <RoleInfo>
          <RoleTitle>Departamento</RoleTitle>
          <RoleText>{role.departament}</RoleText>
        </RoleInfo>
      )}

      {width && width < 720 && (
        <>
          {opened ? (
            <IconWrapper onClick={handleToggleCard}>
              <IoIosArrowUp size="22" color="#587169" />
            </IconWrapper>
          ) : (
            <IconWrapper onClick={handleToggleCard}>
              <IoIosArrowDown size="22" color="#587169" />
            </IconWrapper>
          )}
        </>
      )}
      {width && width < 720 && (
        <>
          {opened && (
            <RoleInfo>
              <RoleTitle>Colaboradores</RoleTitle>
              <RoleText>{role.agents_quantity}</RoleText>
            </RoleInfo>
          )}
        </>
      )}

      {width && width > 720 && (
        <RoleInfo>
          <RoleTitle>Colaboradores</RoleTitle>
          <RoleText>{role.agents_quantity}</RoleText>
        </RoleInfo>
      )}

      {width && width < 720 && opened && (
        <RoleButtonFooter onClick={openModalSeeRole}>
          <Button text="Ações" width={287} height={52}>
            <FiFilePlus size="24" color="#1DD195" />
          </Button>
        </RoleButtonFooter>
      )}
      {width && width > 720 && (
        <IconWrapper onClick={openModalSeeRole}>
          <BiDotsVerticalRounded size="24" color="#587169" />
        </IconWrapper>
      )}
    </ListRoleItem>
  );
}
