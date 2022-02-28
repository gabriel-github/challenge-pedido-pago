import { IoIosArrowDown } from "react-icons/io";
import { Container, Span, Title } from "./styles";

interface ISelectProps {
  placeholder: string;
  text: string;
  width?: number;
  height?: number;
}

export function Select({ placeholder, text, width, height }: ISelectProps) {
  return (
    <Container width={width} height={height}>
      <Span>{placeholder}</Span>
      <Title>{text}</Title>
      <IoIosArrowDown size="24" color="#587169" />
    </Container>
  );
}
