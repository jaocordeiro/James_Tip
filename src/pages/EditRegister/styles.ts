import styled from "styled-components";

export const Container = styled.div``;

export const NameProd = styled.h2`
  margin-bottom: 40px
`;

export const Form = styled.form`
  label {
    font-size: 16px;
    font-weight: bold;
  }
  Input {
    display: block;
    margin-top: 7px;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 70%;
    padding: 5px 3px;
    border: 2px solid #19b978;
    border-radius: 10px;
    color: #fff;
    outline: 0;
    font-size: 15px;
    background-color: #173859;
  }
`;

export const Span = styled.span`
  color: red;
  font-size: 13px;
`

export const Button = styled.button`
  height: 40px;
  width: 100px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  border: 0;
  color: #fff;
  background-color: #1bd85e;
  margin-top: 10px;
`;

