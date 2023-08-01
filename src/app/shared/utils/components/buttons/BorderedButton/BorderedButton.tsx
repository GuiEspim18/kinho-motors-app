import { Button } from "@mui/material";
import { styled } from "styled-components";
import { text1 } from "../../../../../../assets/main/main";
import { TBorderedButton } from "../../../types/bordered-button/bordered-button.types";

const StyledButton = styled(Button)`
    border-color: ${text1} !important;
    color: ${text1} !important;
    width: 100%;
`;

export const BorderedButton = (props: TBorderedButton): JSX.Element => {

    const text: string = props.text;

    return (
        <StyledButton  variant="outlined">{text}</StyledButton>
    );
}