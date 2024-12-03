import styled from 'styled-components';

export const PhilosophyContainer = styled.div`
  width: 100%;
`;

export const LanguageToggle = styled.div`
  margin-bottom: 1rem;

  input[type="checkbox"] {
    display: none;
  }

  label {
    display: block;
    position: relative;
    width: 62px;
    height: 28px;
    background: ${({ theme }) => theme.colors.gray_1};
    border-radius: 8px;
    cursor: pointer;
  }

  label::before {
    content: "ENG";
    ${({ theme }) => theme.typo.title_24_B};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s;
  }

  #chk1:checked + label {
    background: ${({ theme }) => theme.colors.gray_4};
  }

  #chk1:checked + label::before {
    content: "KOR";
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const PhilosophyContent = styled.div`
  p {
    padding-bottom: 0.25rem;
    ${({ theme }) => theme.typo.body_16_12};
  }

  strong {
    display: block;
    padding-bottom: 0.75rem;
    ${({ theme }) => theme.typo.title_16_B};
  }
`;