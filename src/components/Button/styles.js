import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  background: transparent;
  position: relative;
  color: ${({ fontColor }) =>
    fontColor}; /* Define a cor da fonte com base na prop fontColor, se fornecida, caso contrário, use branco */
  font-weight: 700;
  font-size: 14px;
  padding: 2px 2px;
  min-width: 120px;
  width: auto;
  border: none;

  ${({ variant }) =>
    variant !== "primary" &&
    css`
      min-width: 167px;
      height: 33px;
      border-radius: 22px;
      width: 100%;
      font-weight: 400;
      font-size: 18px;
      background: #e4105d;

      &::after {
        content: "";
        position: absolute;
        border: 1px solid #e4105d;
        top: -5px;
        left: -6px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
      }
    `}
`;
