import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  flex-direction: column;
`;

export const Header = styled.header`
  font-weight: bold;
  color: #fff;

  h1 {
    font-size: 45px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 30px;
    margin-bottom: 30px;
  }
`;

export const HeaderForm = styled.div`
  display: flex;
  flex-direction: row;

  form {
    margin-right: 100px;
    display: flex;
    flex-direction: row;

    .search {
      width: 200px;
      height: 40px;
      padding: 5px;
      border: 0;
      border-radius: 3px;
      margin: 0 10px;
    }

    p {
      color: #fff;
      margin-top: 14px;
      margin-left: 5px;
    }
  }

  button {
    height: 40px;
    background: #12db89;
    width: 100px;
    border: 0;
    border-radius: 3px;
    font-size: 18px;
    font-weight: bold;
    margin-left: 50px;
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 80%;
    height: 40px;
    border: 1px solid #000;
    padding: 5px;
    border-radius: 3px;
    margin: 0 10px;
  }

  textarea {
    width: 80%;
    height: 80px;
    border: 1px solid #000;
    padding: 5px;
    border-radius: 3px;
    margin: 0 10px;
  }

  button {
    height: 45px;
    background: #2f55cc;
    width: 140px;
    border: 0;
    border-radius: 3px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    color: #fff;
  }
`;
