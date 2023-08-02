import { styled } from "styled-components";
import { main } from "../../../../assets/main/main";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 30px 0px;
    background: ${main};
`;

export const Footer = (): JSX.Element => {
    return (
        <StyledFooter></StyledFooter>
    );
}