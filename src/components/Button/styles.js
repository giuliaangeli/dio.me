import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
    background: transparent;
    border-radius: 22px;
    position: relative;
    border: none;
    margin: 40px 0;
    
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 300;

    color: #FFF;
    padding: 2px 12px;
    min-width: 80px;
    width: 100%;

    ${({variant}) =>variant !== "primary" && css`
        min-width: 167px;
        height: 33px;

        background: #E4105D;

        &::after {
            content: '',
            position: absolute;
            top: -5px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }
    `}
    

`
