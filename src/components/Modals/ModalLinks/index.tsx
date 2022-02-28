import Link from "next/link";
import { MdOutlineClose } from "react-icons/md";
import {
  Anchor,
  CloseButton,
  Container,
  Content,
  Header,
  HeaderText,
  ModalContent,
} from "./styles";

interface IModalLinksProps {
  id?: string;
  opened: boolean;
  handleCloseModal: () => void;
}

export function ModalLinks({
  id = "modal_links",
  opened,
  handleCloseModal,
}: IModalLinksProps) {
  function handleOutsideClick(e: any) {
    if (e.target.id === id) handleCloseModal();
  }

  return opened ? (
    <Container id={id} onClick={handleOutsideClick}>
      <Content>
        <Header>
          <HeaderText>Categorias</HeaderText>

          <CloseButton onClick={handleCloseModal}>
            <MdOutlineClose size="24" />
          </CloseButton>
        </Header>

        <ModalContent>
          <Link href="/" passHref>
            <Anchor>Colaboradores</Anchor>
          </Link>
          <Link href="/roles" passHref>
            <Anchor>Cargos</Anchor>
          </Link>
        </ModalContent>
      </Content>
    </Container>
  ) : null;
}
