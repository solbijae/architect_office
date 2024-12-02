import styled from 'styled-components';

export const ExhibitionsContainer = styled.div`
  width: 100%;
`;

export const ExhibitionsWrap = styled.div`
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

export const ExhibitionsInfo = styled.div`
  line-height: 1.2;
`;

export const InfoData = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  line-height: 1.5;
  color: #666;
  p:nth-child(1) {
    color: #000
  }
`