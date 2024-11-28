import styled from 'styled-components';

export const PhilosophyContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 3rem;
`;

export const LanguageToggle = styled.div`
  input[type="checkbox"] {
    display: none;
  }

  label {
    display: block;
    position: relative;
    width: 100px;
    height: 45px;
    background: #d3d3d3;
    border-radius: 60px;
    cursor: pointer;
  }

  label::after {
    content: "";
    position: absolute;
    left: 2.5px;
    top: 50%;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #fff;
    transform: translateY(-50%);
    box-shadow: 1px 3px 4px rgba(0,0,0,0.1);
    transition: all 0.4s;
  }

  label::before {
    content: "ENG";
    font-size: 24px;
    font-family: Arial, Helvetica, sans-serif;
    position: absolute;
    left: 45px;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.4s;
  }

  #chk1:checked + label {
    background: rgba(109, 104, 107);
  }

  #chk1:checked + label::after {
    left: calc(100% - 42.5px);
  }

  #chk1:checked + label::before {
    content: "KOR";
    color: #fff;
    left: 15px;
  }
`;