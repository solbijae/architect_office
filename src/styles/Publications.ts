import styled from 'styled-components';

export const PublicationContainer = styled.div`
  width: 100%;
`;

export const PublicationWrap = styled.div`
  padding: 1rem;
  margin-bottom: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 1px 1px 3px 0px #ccc;

  h3 {
    padding-bottom: 0.75rem;
    font-weight: 600;
  }
`;

export const PublicationInfo = styled.div`
  line-height: 1.2;
`;

export const InfoData = styled.div`
  display: grid;
  grid-template-columns: 0.2fr 2fr 2fr;
  line-height: 1.5;
`