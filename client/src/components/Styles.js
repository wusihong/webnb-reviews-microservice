import styled from 'styled-components';

export const FlexContainer_Row = styled.div`
  display: flex;
  flex-direction: row;
  `;

export const FlexContainer_Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FlexContainer_Row_SpaceBetween = styled(FlexContainer_Row)`
  justify-content: space-between;
`;

export const AppContainer = styled(FlexContainer_Column)`
  width: 450px;
  border: 1px solid #FF585F;
`;

export const AvatarImage = styled.img`
  border-radius: 50%;
  width: 50px;
  height: auto;
`;

export const ReviewContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const HostResponseContainer = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
`;