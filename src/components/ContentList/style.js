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

export const ButtonFechar = styled.button`
  font-size: 18px;
  width: 100px;
  height: 40px;
  background: #cc4c4c;
  color: #fff;
  border: 0px;
  border-radius: 3px;
  margin: 0 10px;
  margin-left: 190px;

  &:hover {
    opacity: 0.8px;
  }
`;
export const ButtonRemover = styled.button`
  font-size: 18px;
  width: 30%;
  color: #fff;
  height: 40px;
  background: #2f55cc;
  border: 0px;
  border-radius: 3px;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
`;
