import { FormFeedback, Input} from 'reactstrap';
import styled from 'styled-components';

export const InputBoxstyled = styled(Input)`

`;

export const FormFeebackstyled = styled(FormFeedback)`
color: red;
display: ${props => props.error ? 'block' : 'none'};
`;