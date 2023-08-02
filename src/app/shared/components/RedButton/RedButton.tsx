import { Button, styled } from "@mui/material";
import { card, text1 } from "../../../../assets/main/main";
import { TRedButton } from "../../utils/types/red-button/red-button.types";

const StyledButton = styled(Button)`
    background: ${card} !important;
    color: ${text1} !important;
`;

export const RedButton = (props: TRedButton): JSX.Element => {

    const text: string = props.text;
    const redirect: boolean = props.redirect ? props.redirect : false;
    const link: string = props.link ? props.link : "";

    const click = () => {
        if (redirect) redirectTo(link);
        //  else
    }

    const redirectTo = (value: string) => {
        window.open(value, '_blank')?.focus();
    }

    return (
        <StyledButton onClick={click}>{text}</StyledButton>
    );
}