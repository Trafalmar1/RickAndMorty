import { colors } from "@utils/colors";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Baloo Paaji 2", cursive;
  font-size: 0.8rem;
  cursor: pointer;
  user-select: none;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  padding: 1.8rem 1.5rem;
  border-radius: 0.5em;

  :not(:last-child) {
    margin-bottom: 3em;
  }
`;

const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const Label = styled.label`
  cursor: inherit;
  pointer-events: none;
  font-size: 1.8rem;
  display: block;
  text-overflow: ellipsis;
  flex: 1;
`;

const RemoveButton = styled.a`
  position: relative;
  width: 3.2em;
  height: 3.2em;
  opacity: 0.3;

  margin-left: 2em;

  :before,
  :after {
    position: absolute;
    left: 1.5em;
    content: " ";
    height: 3.3em;
    width: 0.2em;
    background-color: #333;
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }

  :hover {
    opacity: 1;
  }
`;

const CheckMark = styled.span`
  position: relative;
  height: 3.5em;
  width: 3.5em;
  margin-right: 2em;
  background-color: #eee;
  :after {
    content: "";
    position: absolute;
    display: none;
    left: 1.3em;
    top: 0.8em;
    width: 1em;
    height: 1.6em;
    border: solid white;
    border-width: 0 0.3em 0.3em 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const ClickableArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  :hover span {
    background-color: #dfdfdf;
  }

  & input:checked ~ span {
    background-color: ${colors.active};
  }

  & input:checked ~ span:after {
    display: block;
  }
`;

export { Container, ClickableArea, CheckMark, CheckBox, Label, RemoveButton };
