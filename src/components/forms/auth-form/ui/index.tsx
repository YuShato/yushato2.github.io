import { styled } from 'styled-components';

const StyledErrorMessage = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 12px;
  color: #e91414;
  width: 400px;
  margin-top: 0.25rem;

  &:before {
    content: '❌ ';
    font-size: 10px;
  }
`;

const StyledLabel = styled.label`
  font-weight: 500;
`;

const UiFormStyles = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  form {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }

  input {
    width: 400px;
    height: 38px;
    border-radius: 8px;
  }
`;

const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  position: relative;
  padding-bottom: 15px;
`;

const UiForm = Object.assign(UiFormStyles, {
  Label: StyledLabel,
  Error: StyledErrorMessage,
  Row: FormRow,
});

export default UiForm;
