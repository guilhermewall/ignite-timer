import { StyledButtonContainer, ButtonVariant } from "./Button.styles";

interface iButtonProps {
  variant?: ButtonVariant;
}

const Button = ({ variant = "primary" }: iButtonProps) => {
  return (
    <>
      <StyledButtonContainer variant={variant}>enviar</StyledButtonContainer>
    </>
  );
};

export default Button;
