import styled from "styled-components";

export const ContainerL = styled.div`
  background: #ffffff;
  width: 960px;
  height: 150px;
  margin-top: 50px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  a {
    font-size: 18px;
    color: black;
    font-weight: bold;
    margin-bottom: 20px;
    margin-left: 10px;
    margin-top: 15px;
  }
  button {
    height: 40px;
    background: #fff;
    margin-right: 10px;
    margin-top: 15px;
    border: 0px;
  }
`;

export const Conteudo = styled.p`
  margin-left: 10px;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Tags = styled.p`
  font-size: 15px;
  margin-left: 10px;
  font-weight: bold;
`;
