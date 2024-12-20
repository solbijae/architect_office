import styled from 'styled-components';

export const FooterWrap = styled.div`
  position: absolute;
  bottom: 0;
  width: 1200px;
  margin: 0 auto;
  height: 100px;
  user-select: none;

  p {
    display: flex;
    height: 100px;
    position : relative;
    justify-content: center;
    align-items: center;
    ${({ theme }) => theme.typo.body_12_R}
    color: ${({ theme }) => theme.colors.gray_3};
  }
`;
