import type { GetServerSideProps } from "next";
import { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiRefreshCcw, FiSearch } from "react-icons/fi";
import {
  IoIosArrowBack,
  IoIosArrowDown,
  IoIosArrowForward,
} from "react-icons/io";
import {
  ButtonPaginateLeft,
  ButtonPaginateRight,
  Collaborators,
  CollaboratorsSection,
  Content,
  CurrentTab,
  HeaderText,
  IconWrapper,
  Input,
  Label,
  ListCollaborators,
  ListCollaboratorsSection,
  LoadMoreButtonWrapper,
  Paginate,
  PaginateText,
  Pagination,
  QuantityRegisters,
  QuantityRegisterSelect,
  QuantityRegisterText,
  RolesHeader,
  RolesHeaderWrapper,
  SearchSection,
  Text,
  Title,
  TitleList,
} from "../../styles/home";
import { Button } from "../components/Button";
import { Collaborator } from "../components/Collaborator";
import { ModalActions } from "../components/Modals/ModalActions";
import { ModalLinks } from "../components/Modals/ModalLinks";
import { Tabs } from "../components/Tabs";
import { useModal } from "../hooks/useModal";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { api } from "../service/api";

interface IResponseAgents {
  agent_id: number;
  name: string;
  image: string;
  department: string;
  branch: string;
  role: string;
  status: "active" | "inactive";
}
interface IResponseData {
  items: IResponseAgents[];
}

export default function Home({ items }: IResponseData) {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [collaboratorsPerPage, setCollaboratorsPerPage] = useState(6);

  const [openModalLinks, handleOpenModalLinks, handleCloseModalLinks] =
    useModal();

  const [openModalActions, handleOpenModalActions, handleCloseModalActions] =
    useModal();

  const { width } = useWindowDimensions();

  const indexOfLastCollaborator = currentPage * collaboratorsPerPage;
  const indexOfFirstCollaborator =
    indexOfLastCollaborator - collaboratorsPerPage;

  const currentCollaborators = items.slice(
    indexOfFirstCollaborator,
    indexOfLastCollaborator
  );

  function nextPage() {
    setCurrentPage((oldCurrentPage) => oldCurrentPage + 1);
  }

  function backPage() {
    setCurrentPage((oldCurrentPage) => oldCurrentPage - 1);
  }

  function loadMore() {
    setCollaboratorsPerPage(
      (oldCollaboratorsPerPage) => oldCollaboratorsPerPage + 3
    );
  }

  return (
    <>
      <Content>
        <ModalLinks
          opened={openModalLinks}
          handleCloseModal={handleCloseModalLinks}
        />
        <ModalActions
          opened={openModalActions}
          handleCloseModal={handleCloseModalActions}
          routePageRedirect="/1"
          text="Ver colaborador"
          modalType={width && width < 945 ? "full" : "simple"}
        />
        <Title>{width && width < 945 ? "Colaboradores" : "Organização"}</Title>

        <Collaborators>
          <CollaboratorsSection>
            <SearchSection>
              {width && width < 945 ? (
                <CurrentTab>
                  <ModalLinks
                    opened={openModalLinks}
                    handleCloseModal={handleCloseModalLinks}
                  />
                  <Text>Colaboradores</Text>
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
                  placeholder="Pesquise por nome"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Label>
            </SearchSection>

            <ListCollaboratorsSection>
              <TitleList>Listagem de colaboradores </TitleList>

              <RolesHeaderWrapper>
                {width && width > 945 && (
                  <RolesHeader>
                    <HeaderText>Nome completo</HeaderText>
                    <HeaderText>Departamento</HeaderText>
                    <HeaderText>Cargo</HeaderText>
                    <HeaderText>Unidade</HeaderText>
                    <HeaderText>Status</HeaderText>
                  </RolesHeader>
                )}
              </RolesHeaderWrapper>

              <ListCollaborators>
                {currentCollaborators
                  .filter((collaborator) =>
                    collaborator.name
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((collaborator) => (
                    <Collaborator
                      key={collaborator.agent_id}
                      agent={collaborator}
                      openModalSeeCollaborator={handleOpenModalActions}
                    />
                  ))}
              </ListCollaborators>
            </ListCollaboratorsSection>

            <LoadMoreButtonWrapper>
              <Button
                text="Carregar mais"
                disabled={collaboratorsPerPage === items.length}
                onClick={loadMore}
              >
                <FiRefreshCcw size="24" color="#1DD195" />
              </Button>
            </LoadMoreButtonWrapper>

            <Pagination>
              <QuantityRegisters>
                <QuantityRegisterText>
                  Mostrando {collaboratorsPerPage} de {items.length} registros
                </QuantityRegisterText>
                <QuantityRegisterSelect>
                  {collaboratorsPerPage}
                  <IoIosArrowDown />
                </QuantityRegisterSelect>
              </QuantityRegisters>

              <Paginate>
                <ButtonPaginateLeft
                  disabled={currentPage === 1}
                  onClick={backPage}
                >
                  <IoIosArrowBack size="24" />
                </ButtonPaginateLeft>
                <PaginateText>
                  {currentPage} de{" "}
                  {Math.ceil(items.length / collaboratorsPerPage)}
                </PaginateText>
                <ButtonPaginateRight
                  disabled={
                    currentPage ===
                    Math.ceil(items.length / collaboratorsPerPage)
                  }
                  onClick={nextPage}
                >
                  <IoIosArrowForward size="24" />
                </ButtonPaginateRight>
              </Paginate>
            </Pagination>
          </CollaboratorsSection>
        </Collaborators>
      </Content>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await api.get<IResponseData>("/agents");

  return {
    props: {
      items: data.items,
    },
  };
};
