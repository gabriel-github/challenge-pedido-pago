import { BsCheck } from "react-icons/bs";
import { Container } from "./styles";

interface ICheckBoxProps {
  isChecked: boolean;
}

export function CheckBox({ isChecked }: ICheckBoxProps) {
  return <Container checked={isChecked}>{isChecked && <BsCheck />}</Container>;
}
