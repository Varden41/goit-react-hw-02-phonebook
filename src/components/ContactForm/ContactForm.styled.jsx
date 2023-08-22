import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
`;
export const InputStyled = styled(Field)`
  padding: 10px;
  width: 70%;
  margin-inline: auto;
  margin-bottom: 10px;
`;
export const ErrorMessageStyled = styled(ErrorMessage)`
  text-align: center;
`;
export const LabelStyled = styled.label`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
`;
export const ButtonStyled = styled.button`
  padding: 20px;
  background-color: grey;
  border: 1px solid black;
`;
