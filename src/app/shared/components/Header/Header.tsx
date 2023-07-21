import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { main } from "../../../../assets/main/main";

const StyledHeader = styled.header`
    width: 100%;
    height: 70px;
    background: ${main};
`;

export const Header = (): JSX.Element => {
    return (
        <StyledHeader>
            <Container>

            </Container>
        </StyledHeader>
    );
}