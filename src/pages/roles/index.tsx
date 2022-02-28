import { GetServerSideProps } from "next";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiRefreshCcw, FiSearch } from "react-icons/fi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  ButtonPaginateLeft,
  ButtonPaginateRight,
  Content,
  CurrentTab,
  HeaderText,
  IconWrapper,
  Input,
  Label,
  ListRolesData,
  ListRolesSection,
  ListRolesTitle,
  LoadMoreButtonWrapper,
  Paginate,
  PaginateText,
  Pagination,
  Roles,
  RolesHeader,
  RolesSection,
  SearchSection,
  Text,
  Title,
} from "../../../styles/roles";
import { Button } from "../../components/Button";
import { ModalActions } from "../../components/Modals/ModalActions";
import { ModalLinks } from "../../components/Modals/ModalLinks";
import { RoleCard } from "../../components/RoleCard";
import { Tabs } from "../../components/Tabs";
import { useModal } from "../../hooks/useModal";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { api } from "../../service/api";

interface IRole {
  name: string;
  departament: string;
  agents_quantity: number;
}

interface IResponseData {
  data: IRole[];
}

export default function ListRoles({ data }: IResponseData) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rolesPerPage, setRolesPerPage] = useState(6);

  const [openModalLinks, handleOpenModalLinks, handleCloseModalLinks] =
    useModal();

  const [openModalActions, handleOpenModalActions, handleCloseModalActions] =
    useModal();

  const { width } = useWindowDimensions();

  const indexOfLastRole = currentPage * rolesPerPage;
  const indexOfFirstRole = indexOfLastRole - rolesPerPage;

  const currentRoles = data.slice(indexOfFirstRole, indexOfLastRole);

  function nextPage() {
    setCurrentPage((oldCurrentPage) => oldCurrentPage + 1);
  }

  function backPage() {
    setCurrentPage((oldCurrentPage) => oldCurrentPage - 1);
  }

  function loadMore() {
    setRolesPerPage((oldRolesPerPage) => oldRolesPerPage + 3);
  }

  return (
    <Content>
      <ModalLinks
        opened={openModalLinks}
        handleCloseModal={handleCloseModalLinks}
      />
      <ModalActions
        opened={openModalActions}
        handleCloseModal={handleCloseModalActions}
        routePageRedirect="/roles/1"
        modalType="full"
        text="Ver cargos"
      />
      <Title>{width && width < 945 ? "Cargos" : "Organização"}</Title>

      <Roles>
        <RolesSection>
          <SearchSection>
            {width && width < 720 ? (
              <CurrentTab>
                <Text>Cargos</Text>
                <IconWrapper onClick={handleOpenModalLinks}>
                  <BiDotsVerticalRounded color="#587169" />
                </IconWrapper>
              </CurrentTab>
            ) : (
              <Tabs />
            )}

            <Label htmlFor="search">
              <FiSearch size="18" color="#587169" />
              <Input
                id="search"
                placeholder="Pesquise por cargos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </Label>
          </SearchSection>

          <ListRolesSection>
            <ListRolesTitle>Listagem de cargos</ListRolesTitle>

            {width && width > 720 && (
              <RolesHeader>
                <HeaderText>Cargo</HeaderText>
                <HeaderText>Departamento</HeaderText>
                <HeaderText>Colaboradores</HeaderText>
              </RolesHeader>
            )}

            <ListRolesData>
              {currentRoles
                .filter((role) =>
                  role.name
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                )
                .map((role) => (
                  <RoleCard
                    key={`${role.departament} -- ${role.name}`}
                    role={role}
                    openModalSeeRole={handleOpenModalActions}
                  />
                ))}
            </ListRolesData>
          </ListRolesSection>

          <LoadMoreButtonWrapper>
            <Button
              text="Carregar mais"
              disabled={rolesPerPage === data.length}
              onClick={loadMore}
            >
              <FiRefreshCcw size="24" color="#1DD195" />
            </Button>
          </LoadMoreButtonWrapper>

          <Pagination>
            <Paginate>
              <ButtonPaginateLeft
                disabled={currentPage === 1}
                onClick={backPage}
              >
                <IoIosArrowBack size="24" />
              </ButtonPaginateLeft>
              <PaginateText>
                {currentPage} de {Math.ceil(data.length / rolesPerPage)}
              </PaginateText>
              <ButtonPaginateRight
                disabled={currentPage === Math.ceil(data.length / rolesPerPage)}
                onClick={nextPage}
              >
                <IoIosArrowForward size="24" />
              </ButtonPaginateRight>
            </Paginate>
          </Pagination>
        </RolesSection>
      </Roles>
    </Content>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get("/roles");

  return {
    props: {
      data: data.roles,
    },
  };
};
