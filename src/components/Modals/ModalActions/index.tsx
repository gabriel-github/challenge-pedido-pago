import Image from "next/image";
import Link from "next/link";

import { Container, Content, ModalContent, Anchor, AnchorText } from "./styles";

interface IModalActionsProps {
  id?: string;
  opened: boolean;
  text: string;
  handleCloseModal: () => void;
  routePageRedirect: string;
  modalType: "simple" | "full";
}

export function ModalActions({
  id = "modal_actions",
  opened,
  text,
  handleCloseModal,
  routePageRedirect,
  modalType = "simple",
}: IModalActionsProps) {
  function handleOutsideClick(e: any) {
    if (e.target.id === id) handleCloseModal();
  }

  return opened ? (
    <Container id={id} onClick={handleOutsideClick}>
      <Content>
        {modalType === "simple" ? (
          <ModalContent>
            <Link href={routePageRedirect} passHref>
              <Anchor>
                <Image src="/assets/eye.svg" width={24} height={24} alt="Eye" />
                <AnchorText active>{text}</AnchorText>
              </Anchor>
            </Link>
            <Link href="#" passHref>
              <Anchor>
                <Image
                  src="/assets/repeat.svg"
                  width={24}
                  height={24}
                  alt="Eye"
                />
                <AnchorText>excluir</AnchorText>
              </Anchor>
            </Link>
          </ModalContent>
        ) : (
          <ModalContent>
            <Link href={routePageRedirect} passHref>
              <Anchor>
                <Image src="/assets/eye.svg" width={24} height={24} alt="Eye" />
                <AnchorText active>{text}</AnchorText>
              </Anchor>
            </Link>
            <Link href="#" passHref>
              <Anchor>
                <Image
                  src="/assets/edit.svg"
                  width={24}
                  height={24}
                  alt="Eye"
                />
                <AnchorText>editar</AnchorText>
              </Anchor>
            </Link>
            <Link href="#" passHref>
              <Anchor>
                <Image
                  src="/assets/duplicate.svg"
                  width={24}
                  height={24}
                  alt="Eye"
                />
                <AnchorText>duplicar</AnchorText>
              </Anchor>
            </Link>
            <Link href="#" passHref>
              <Anchor>
                <Image
                  src="/assets/repeat.svg"
                  width={24}
                  height={24}
                  alt="Eye"
                />
                <AnchorText>excluir</AnchorText>
              </Anchor>
            </Link>
          </ModalContent>
        )}
      </Content>
    </Container>
  ) : (
    <></>
  );
}
