import { GetStaticProps } from "next";
import {
  Content,
  Header,
  HeaderText,
  InputRole,
  InputRoleLabel,
  InputsWrapper,
  ItemText,
  ListItem,
  ListRoles,
  ListTitle,
  NewRole,
  NewRoleSection,
  RoleData,
  RolesHeader,
  RoleTitle,
  SelectDepartmentWrapper,
  Title,
} from "../../../styles/newRole";
import { BackButton } from "../../components/BackButton";
import { CheckBox } from "../../components/Checkbox";
import { Select } from "../../components/Select";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { api } from "../../service/api";

type PermissionsTypes = "read" | "write" | "delete";

interface Rule {
  role: string;
  permissions: PermissionsTypes[];
}

interface IResponseData {
  data: {
    name: string;
    department: string;
    grouprules: Rule[];
  };
}

export default function Role({ data }: IResponseData) {
  const { width } = useWindowDimensions();

  return (
    <Content>
      <Header>
        <BackButton routeOfBack="/roles" />
        <Title>
          {width && width > 720 ? "Cargos e permissões" : "Novo cargo"}
        </Title>
      </Header>

      <NewRole>
        <NewRoleSection>
          <RoleData>
            <RoleTitle>Dados do cargo</RoleTitle>

            <InputsWrapper>
              <SelectDepartmentWrapper>
                <Select placeholder="Departamento" text={data.department} />
              </SelectDepartmentWrapper>

              <InputRoleLabel htmlFor="role">
                <InputRole placeholder={data.name} />
              </InputRoleLabel>
            </InputsWrapper>
          </RoleData>

          <ListRoles>
            <ListTitle>Listagem de cargos</ListTitle>
            <RolesHeader>
              <HeaderText>Cargo</HeaderText>
              <HeaderText>Ler</HeaderText>
              <HeaderText>Editar</HeaderText>
              <HeaderText>Comentar</HeaderText>
            </RolesHeader>

            {data.grouprules.map((item) => (
              <ListItem key={item.role}>
                <ItemText>{item.role}</ItemText>

                <CheckBox
                  key="read"
                  isChecked={item.permissions[0] === "read"}
                />
                <CheckBox
                  key="write"
                  isChecked={item.permissions[1] === "write"}
                />
                <CheckBox
                  key="delete"
                  isChecked={item.permissions[2] === "delete"}
                />
              </ListItem>
            ))}
          </ListRoles>
        </NewRoleSection>
      </NewRole>
    </Content>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get("/role/1");

  return {
    props: {
      data: data.role,
    },
    revalidate: 60 * 60 * 24, //24hours
  };
};
