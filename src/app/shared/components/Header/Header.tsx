import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { main } from "../../../../assets/main/main";
import { NavMenu } from "../NavMenu/NavMenu";

const StyledHeader = styled.header`
    width: 100%;
    /* height: 70px; */
    padding: 10px 0px;
    background: ${main};
`;

const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledImgage = styled.img`
    width: 200px;
`;

export const Header = (): JSX.Element => {
    return (
        <StyledHeader>
            <StyledContainer>
                <StyledImgage src="/images/img-header.png" alt="" />
            </StyledContainer>
            <NavMenu />
        </StyledHeader>
    );
}