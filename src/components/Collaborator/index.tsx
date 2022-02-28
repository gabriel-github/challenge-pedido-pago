import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiFilePlus } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Button } from "../Button";
import {
  Avatar,
  CollaboratorButtonFooter,
  CollaboratorHeader,
  CollaboratorInfo,
  CollaboratorInfos,
  CollaboratorInfoStatus,
  CollaboratorProfileInfo,
  CollaboratorProfileInfoWrapper,
  CollaboratorText,
  CollaboratorTitle,
  Container,
  IconContainer,
  Name,
  Status,
  StatusText,
  Title,
} from "./styles";

interface Agent {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: "active" | "inactive";
}

interface ICollaboratorProps {
  agent: Agent;
  openModalSeeCollaborator: () => void;
}

export function Collaborator({
  agent,
  openModalSeeCollaborator,
}: ICollaboratorProps) {
  const [opened, setOpened] = useState(false);
  const { width } = useWindowDimensions();

  function handleToggleCard() {
    setOpened(!opened);
  }

  return (
    <Container>
      <CollaboratorHeader>
        {width && width < 945 && <Title>Nome completo</Title>}
        <CollaboratorProfileInfoWrapper>
          <CollaboratorProfileInfo>
            <Avatar src={agent.image} />
            <Name>{agent.name}</Name>
          </CollaboratorProfileInfo>

          {width && width < 945 && (
            <>
              {opened ? (
                <IconContainer>
                  <IoIosArrowUp
                    size="22"
                    color="#587169"
                    onClick={handleToggleCard}
                  />
                </IconContainer>
              ) : (
                <IconContainer>
                  <IoIosArrowDown
                    size="22"
                    color="#587169"
                    onClick={handleToggleCard}
                  />
                </IconContainer>
              )}
            </>
          )}
        </CollaboratorProfileInfoWrapper>
      </CollaboratorHeader>

      <CollaboratorInfos opened={opened}>
        <CollaboratorInfo>
          <CollaboratorTitle>Departamento</CollaboratorTitle>
          <CollaboratorText statusCollaborator={agent.status}>
            {agent.department}
          </CollaboratorText>
        </CollaboratorInfo>
        <CollaboratorInfo>
          <CollaboratorTitle>Cargo</CollaboratorTitle>
          <CollaboratorText statusCollaborator={agent.status}>
            {agent.role}
          </CollaboratorText>
        </CollaboratorInfo>
        <CollaboratorInfo>
          <CollaboratorTitle>Unidade</CollaboratorTitle>
          <CollaboratorText statusCollaborator={agent.status}>
            {agent.branch}
          </CollaboratorText>
        </CollaboratorInfo>
        <CollaboratorInfoStatus>
          <CollaboratorTitle>Status</CollaboratorTitle>
          <Status statusCollaborator={agent.status}>
            <StatusText>{agent.status}</StatusText>
          </Status>
        </CollaboratorInfoStatus>
      </CollaboratorInfos>
      {width && width < 945 ? (
        <CollaboratorButtonFooter
          opened={opened}
          onClick={openModalSeeCollaborator}
        >
          <Button text="Ações" width={287} height={52}>
            <FiFilePlus size="24" color="#1DD195" />
          </Button>
        </CollaboratorButtonFooter>
      ) : (
        <BiDotsVerticalRounded
          size="24"
          color="#587169"
          onClick={openModalSeeCollaborator}
        />
      )}
    </Container>
  );
}
