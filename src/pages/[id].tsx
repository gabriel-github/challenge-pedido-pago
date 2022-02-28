import { GetServerSideProps } from "next";
import Image from "next/image";
import { FiUser } from "react-icons/fi";
import {
  Avatar,
  Collaborator,
  CollaboratorDetail,
  CollaboratorDetailSection,
  Content,
  Email,
  Header,
  HeaderTitle,
  Info,
  Name,
  OrganizationalDataSection,
  OrganizationDataItems,
  PersonInformationData,
  PersonInformationItem,
  PersonInformationItemData,
  PersonInformationItemIcon,
  PersonInformationItemText,
  PersonInformationItemTitle,
  PersonInformationItemValue,
  PersonInformationSection,
  PersonInformationTitle,
  SelectInput,
  SelectWrapper,
  Text,
} from "../../styles/collaboratorDetail";
import { BackButton } from "../components/BackButton";
import { api } from "../service/api";

interface IAgent {
  id: number;
  name: string;
  email: string;
  phone: { ddd: string; ddi: string; number: string };
  document: { type: string; number: string };
  birth_date: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: string;
}

interface IResponseAgent {
  agent: IAgent;
}

interface IPhone {
  ddd: string;
  ddi: string;
  number: string;
}

export default function CollaboratorDetails({ agent }: IResponseAgent) {
  return (
    <Content>
      <HeaderTitle>
        <BackButton routeOfBack="/" />

        <Text>Detalhes do colaborador</Text>
      </HeaderTitle>

      <CollaboratorDetail>
        <CollaboratorDetailSection>
          <Header>
            <Collaborator>
              <Avatar>
                <FiUser size="38" color="#587169" />
              </Avatar>

              <Info>
                <Name>{agent.name}</Name>
                <Email>{agent.email}</Email>
              </Info>
            </Collaborator>
          </Header>

          <PersonInformationSection>
            <PersonInformationTitle>
              Informações pessoais
            </PersonInformationTitle>
            <PersonInformationData>
              <PersonInformationItem>
                <PersonInformationItemIcon>
                  <Image
                    src="/assets/id.svg"
                    width="18px"
                    height="18px"
                    alt="Identification"
                  />
                </PersonInformationItemIcon>

                <PersonInformationItemData>
                  <PersonInformationItemTitle>
                    {agent.document.type}
                  </PersonInformationItemTitle>
                  <PersonInformationItemValue>
                    {agent.document.number}
                  </PersonInformationItemValue>
                </PersonInformationItemData>
              </PersonInformationItem>

              <PersonInformationItem>
                <PersonInformationItemIcon>
                  <Image
                    src="/assets/phone-call.svg"
                    width="18px"
                    height="18px"
                    alt="Identification"
                  />
                </PersonInformationItemIcon>

                <PersonInformationItemData>
                  <PersonInformationItemTitle>
                    Telefone
                  </PersonInformationItemTitle>
                  <PersonInformationItemText>
                    {`+${agent.phone.ddi} ${agent.phone.ddd} ${agent.phone.number}`}
                  </PersonInformationItemText>
                </PersonInformationItemData>
              </PersonInformationItem>

              <PersonInformationItem>
                <PersonInformationItemIcon>
                  <Image
                    src="/assets/calendar.svg"
                    width="18px"
                    height="18px"
                    alt="Identification"
                  />
                </PersonInformationItemIcon>

                <PersonInformationItemData>
                  <PersonInformationItemTitle>
                    Nascimento
                  </PersonInformationItemTitle>
                  <PersonInformationItemText>
                    {agent.birth_date}
                  </PersonInformationItemText>
                </PersonInformationItemData>
              </PersonInformationItem>
            </PersonInformationData>
          </PersonInformationSection>

          <OrganizationalDataSection>
            <PersonInformationTitle>
              Dados organizacionais
            </PersonInformationTitle>

            <OrganizationDataItems>
              <SelectWrapper>
                <SelectInput
                  placeholder="Departamento"
                  text={agent.department}
                />
              </SelectWrapper>
              <SelectWrapper>
                <SelectInput placeholder="Cargo" text={agent.role} />
              </SelectWrapper>
              <SelectWrapper>
                <SelectInput placeholder="Unidade" text={agent.branch} />
              </SelectWrapper>
              <SelectWrapper>
                <SelectInput placeholder="Status" text={agent.status} />
              </SelectWrapper>
            </OrganizationDataItems>
          </OrganizationalDataSection>
        </CollaboratorDetailSection>
      </CollaboratorDetail>
    </Content>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<IResponseAgent>("/agent/1");

  const dataFormatted = {
    ...data.agent,
    birth_date: new Intl.DateTimeFormat("pt-BR").format(
      new Date(data.agent.birth_date)
    ),
  };

  return {
    props: {
      agent: dataFormatted,
    },
  };
};
