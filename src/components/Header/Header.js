import styled from "styled-components";

export const Menu = styled.div`
    height: 80px;
    display: flex;
    background-color: #1A202C;
    box-shadow: 0 0 20px 3px;

    > svg {
      position: fixed;
      color: #fff;
      width: 30px;
      height: 30px;
      margin-top: 25px;
      margin-left: 30px;
      cursor: pointer;
    }
`;

export const Login = styled.div`
    p {
      position: absolute;
      right: 55px;
      top: 30px;
      color: #fff;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
    }

    svg {
      position: absolute;
      right: 30px;
      top: 25px;
      color: #fff;
      width: 15px;
      height: 30px;
    }

    p:hover {
      opacity: 0.7;
    }
`;