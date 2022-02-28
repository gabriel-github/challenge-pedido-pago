import Image from "next/image";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {
  Avatar,
  HeaderContent,
  BrandWrapper,
  User,
  UserInfo,
  Name,
  UserData,
} from "./styles";

export function Header() {
  const { width } = useWindowDimensions();
  return (
    <HeaderContent>
      {width && width < 1920 && (
        <Avatar>
          <span>G</span>
        </Avatar>
      )}

      <BrandWrapper>
        <Image src="/assets/brand.png" width="42" height="41" alt="Brand" />
      </BrandWrapper>

      <User>
        <Avatar>
          <span>G</span>
        </Avatar>
        <UserInfo>
          <Name>gabriel</Name>
          <UserData>meus dados</UserData>
        </UserInfo>
      </User>
    </HeaderContent>
  );
}
