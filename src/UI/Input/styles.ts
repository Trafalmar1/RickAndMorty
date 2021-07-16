import styled, { CSSProp } from "styled-components";

const StyledInput = styled.input<{ color?: CSSProp; margin?: CSSProp }>`
  display: block;

  border-radius: 0.5rem;
  margin: ${(props) => (props.margin ? props.margin : "0 0 2.5rem 0")};
  border: 0.1rem solid gray;
  color: ${(props) => (props.color ? props.color : "black")};

  font-size: 2rem;
  padding: 0.4em 0.7em;
  line-height: normal;
  font-family: "Baloo Paaji 2";
`;

export { StyledInput };
