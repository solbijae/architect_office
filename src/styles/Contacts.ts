import styled from 'styled-components';

export const ContactsContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 100px);
  padding-bottom: 100px;
  width: 1200px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`;