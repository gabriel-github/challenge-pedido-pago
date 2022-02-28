import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  min-width: 360px;
  max-width: 956px;

  margin: 0 auto;

  padding-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #34423d;
  font-weight: 600;
  line-height: 24px;

  margin: 41px 0 24px 16px;

  @media (min-width: 945px) {
    font-size: 32px;
    line-height: 32px;
  }
`;

export const Collaborators = styled.div`
  min-width: 348px;
  margin: 0 6px;
`;

export const CollaboratorsSection = styled.section`
  width: 348px;
  padding: 0 24px;

  background-color: #ffffff;

  box-shadow: 0 4px 8px rgba(165, 171, 179, 0.16);
  border-radius: 8px;
  padding: 40px 0;

  @media (min-width: 361px) {
    min-width: 348px;
    width: 100%;
  }
`;

export const SearchSection = styled.div`
  border-bottom: 2px solid #eaefed;

  padding: 0 16px;

  @media (min-width: 945px) {
    padding: 0 30px 0 24px;
    border-bottom: 0;
  }
`;

export const CurrentTab = styled.div`
  width: 316px;
  height: 56px;
  border-radius: 8px;
  padding: 20px;

  border: 2px solid #cad6d1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 361px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  position: relative;

  background-color: #ffffff;
  color: #cad6d1;

  min-width: 316px;
  max-width: 902px;
  height: 56px;
  border-radius: 8px;
  padding: 20px;

  border: 2px solid #cad6d1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 40px 0;

  &::before {
    content: "Pesquisar por";
    position: absolute;

    transform: translateY(-28px);
    background-color: #ffffff;

    padding: 0 4px;
  }

  @media (min-width: 945px) {
    height: 52px;
    margin: 40px 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: none;

  outline: none;

  margin-left: 12px;
`;

export const Text = styled.p`
  color: #587169;

  font-size: 1rem;
  font-weight: 500;
  line-height: 24px;
`;

export const ListCollaboratorsSection = styled.div`
  width: 100%;
`;

export const TitleList = styled.p`
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;

  color: #34423d;

  margin-top: 40px;
  margin-bottom: 24px;

  padding-left: 24px;
`;

export const RolesHeaderWrapper = styled.div`
  width: 100%;

  padding: 0 30px 0 24px;
`;

export const RolesHeader = styled.div`
  min-width: 316px;
  max-width: 902px;
  height: 49px;
  padding: 16px;

  display: grid;
  grid-template-columns: 196px 124px 96px 142px 182px;
  gap: 32.5px;

  border: 1px solid #cad6d1;

  border-radius: 8px 8px 0 0;

  margin-top: 24px;
`;

export const HeaderText = styled.div`
  font-size: 12px;
  font-weight: 600;

  line-height: 16.8px;

  color: #587169;
`;

export const ListCollaborators = styled.div`
  padding: 0 14.5px;
  @media (min-width: 945px) {
    padding: 0 30px 0 24px;
  }
`;

export const LoadMoreButtonWrapper = styled.div`
  margin: 24px 16px 0 16px;

  @media (min-width: 945px) {
    display: none;
  }
`;

export const Pagination = styled.div`
  width: 100%;
  max-width: 902px;
  height: 36px;

  margin-top: 24px;

  padding-left: 24px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 945px) {
    display: none;
  }
`;

export const QuantityRegisters = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityRegisterText = styled.p`
  font-size: 16px;
  font-weight: 400;

  line-height: 24px;

  color: #587169;
`;

export const QuantityRegisterSelect = styled.div`
  width: 78px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #ffffff;
  color: #587169;

  border: 2px solid #cad6d1;
  border-radius: 8px;

  margin-left: 23.5px;

  svg {
    margin-left: 17px;
  }
`;

export const Paginate = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginateText = styled.p`
  font-size: 16px;
  font-weight: 600;

  line-height: 24px;

  color: #587169;

  margin: 0 12px;
`;

export const ButtonPaginate = styled.button`
  width: 48px;
  height: 36px;

  background-color: #ffffff;

  border: 1.4px solid #709085;
  border-radius: 8px 0 0 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #709085;
  }

  &:disabled {
    border: 1.4px solid #cad6d1;
    svg {
      color: #cad6d1;
    }
  }
`;

export const ButtonPaginateLeft = styled(ButtonPaginate)`
  border-radius: 8px 0 0 8px;
`;

export const ButtonPaginateRight = styled(ButtonPaginate)`
  border-radius: 0 8px 8px 0;
`;

export const IconWrapper = styled.button`
  border: none;
  background: transparent;
`;
