import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container } from "../BackButton/styles";

interface IBackButtonProps {
  routeOfBack: string;
}

export function BackButton({ routeOfBack }: IBackButtonProps) {
  const router = useRouter();

  function back() {
    router.push(routeOfBack);
  }

  return (
    <Container onClick={back}>
      <AiOutlineArrowLeft size="20" color="#34423D" />
    </Container>
  );
}
