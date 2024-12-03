import styled from 'styled-components';

export const ExhibitionsContainer = styled.div`
  width: 100%;
`;

export const ExhibitionsWrap = styled.div`
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

export const ExhibitionsInfo = styled.div`
  ${({ theme }) => theme.typo.body_16_12};
`;

export const InfoData = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  ${({ theme }) => theme.typo.body_16_15};
  color: #666;
  p:nth-child(1) {
    color: ${({ theme }) => theme.colors.black}
  }
`