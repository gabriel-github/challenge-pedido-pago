import { ActiveLink } from "../ActiveLink";
import { Nav } from "./styles";

export function Tabs() {
  return (
    <Nav>
      <ActiveLink href="/" passHref={true} text="Colaboradores" />
      <ActiveLink href="/roles" passHref={true} text="Cargos" />
    </Nav>
  );
}
