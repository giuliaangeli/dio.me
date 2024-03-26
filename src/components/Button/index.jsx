import React from "react";

import { ButtonContainer } from "./styles";

const Button = ({
  title,
  variant = "primary",
  fontColor = "#ffffff",
  onClick,
}) => {
  return (
    <ButtonContainer variant={variant} fontColor={fontColor} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
