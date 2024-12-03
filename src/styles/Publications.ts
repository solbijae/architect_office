import styled from 'styled-components';

export const PublicationContainer = styled.div`
  width: 100%;
`;

export const PublicationWrap = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: ${({ theme }) => theme.border.gray_1};
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.shadows.card};;

  h3 {
    padding-bottom: 0.75rem;
    ${({ theme }) => theme.typo.title_16_B};
  }
`;

export const PublicationInfo = styled.div`
  ${({ theme }) => theme.typo.body_16_12};
`;

export const InfoData = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr 2fr;
  ${({ theme }) => theme.typo.body_16_15};
`