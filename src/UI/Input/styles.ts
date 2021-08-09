import styled, { CSSProp } from "styled-components";

import { size } from "@utils/screenSizes";

const InputWrapper = styled.div<{ margin?: CSSProp }>`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : "0 0 2.5rem 0")};
  font-size: 2rem;
  @media (max-width: ${size.mobile}) {
    font-size: 3rem;
    width: 100%;
  }
`;

const StyledInput = styled.input<{ color?: CSSProp }>`
  display: block;

  border-radius: 0.5rem;
  border: 0.1rem solid gray;
  border: none;
  color: ${(props) => (props.color ? props.color : "black")};
  font-size: inherit;
  padding: 0.6em 0.7em;
  line-height: normal;
  font-family: "Baloo Paaji 2";
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  width: 100%;
  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }
  :focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px 0px inset;
    ::placeholder {
      color: rgba(0, 0, 0, 1);
    }
  }

  @media (max-width: ${size.mobile}) {
    border-width: 0.3rem;
  }
`;

const Options = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: -0.5rem;
  transform: translateY(100%);
  width: 100%;
  max-height: 20rem;
  overflow: hidden;
  margin: 1rem 1rem 0 0;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;

  @media (max-width: ${size.mobile}) {
    max-height: 25rem;
    padding: 2rem;
    border: none;
  }

  z-index: 999;
`;

const OptionsContainer = styled.div`
  overflow: auto;
  ::-webkit-scrollbar {
    width: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background: white;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media (max-width: ${size.mobile}) {
    ::-webkit-scrollbar {
      width: 1rem;
    }
  }
`;

const Option = styled.p`
  font-size: inherit;
  cursor: pointer;
  padding: 1rem;
  --bgcolor: rgba(0, 0, 0, 0.1);
  :hover {
    background-color: var(--bgcolor);
  }
  :focus {
    outline: none;
    background-color: var(--bgcolor);
  }
  @media (max-width: ${size.mobile}) {
    padding: 2rem;
  }
`;

export { StyledInput, InputWrapper, Options, Option, OptionsContainer };
