import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { LinkText, StyledLink } from "./styles";

interface ActiveLinkProps extends LinkProps {
  text: string;
}

export function ActiveLink({ text, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();
  const isActive = asPath === rest.href;

  return (
    <Link {...rest}>
      <StyledLink isActive={isActive}>
        <LinkText>{text}</LinkText>
      </StyledLink>
    </Link>
  );
}
