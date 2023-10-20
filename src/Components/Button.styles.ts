import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface iButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariant = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const StyledButtonContainer = styled.button<iButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme["green-500"]};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariant[props.variant]};
    `;
  }} */
`;
