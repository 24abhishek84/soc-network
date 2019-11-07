import styled from "styled-components";
import { Form } from "react-bootstrap";

export const StyledHeader = styled.span`
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  font-size: 1.25;
  color: #555453;
`;

export const StyledMenuImage = styled.div`
  width: ${(props) => props.width ? props.width : '32px'};
  height: ${(props) => props.height ? props.width : '32px'};
  background-image: url(/assets/imgs/${(props) => props.imgUrl});
  background-position: ${(props) => props.bgPosition};
  background-size: auto;
  background-repeat: no-repeat;
  margin-right: 8px;
  border-radius: 8px;
`;

export const CommonImageDiv = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 8px;
`;

export const StyledListItemLabel = styled.div`
  text-overflow: ellipsis;
  color: #1c1e21;
  font-size: 14px;
  line-height: 18px;
`;

export const StyledUl = styled.ul`
	position: relative;
	list-style-type: none;
	margin: 8px 0 0 0;
	padding: 0;
`;


export const StyledInput = styled(Form.Control)`
  color: #90949c;
`;

export const StyledForm = styled.div`
  background-color: #ece9e7;
`;
