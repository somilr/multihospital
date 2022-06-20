import { Input, FormFeedBack, FormFeedback } from "reactstrap";
import styled from "styled-components";

export const InputBoxStyle = styled(Input)``;
export const FormFeedBackStyled = styled(FormFeedback)`
  color: red;
  display: ${(props) => (props.errors ? "block" : "none")};
`;
