import { ReactNode } from "react";
import { Container, Text } from "./styles";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  text: string;
  width?: number;
  height?: number;
  borderColor?: string;
}

export function Button({ children, text, ...props }: IButtonProps) {
  return (
    <Container {...props}>
      {children}
      <Text>{text}</Text>
    </Container>
  );
}
