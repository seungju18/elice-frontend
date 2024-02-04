import { styled } from "styled-components";

type ButtonProps = {
  isClicked: boolean;
};

export const Button = styled.button<ButtonProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(240, 241, 243);
  font-weight: normal;
  padding: 0.25rem 0.75rem;
  min-width: 1.875rem;
  border-radius: 1.875rem;
  box-sizing: border-box;
  margin: 0 5px;
  background-color: ${(props) =>
    props.isClicked ? "rgb(82,79,161)" : "rgb(240,241,243)"};
`;
