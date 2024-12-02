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
    background: #d3d3d3;
    border-radius: 8px;
    cursor: pointer;
  }

  label::before {
    content: "ENG";
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.4s;
  }

  #chk1:checked + label {
    background: rgba(109, 104, 107);
  }

  #chk1:checked + label::before {
    content: "KOR";
    color: #fff;
  }
`;

export const PhilosophyContent = styled.div`
  p {
    padding-bottom: 0.25rem;
    line-height: 1.2;
  }

  strong {
    display: block;
    padding-bottom: 0.75rem;
    font-weight: 600;
  }
`;