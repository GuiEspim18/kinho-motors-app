import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { main } from "../../../../assets/main/main";
import { NavMenu } from "../NavMenu/NavMenu";
import { THeader } from "../../utils/types/header/header.types";

const StyledHeader = styled.header`
    width: 100%;
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

export const Header = (props: THeader): JSX.Element => {

    const image: string = props.image;

    return (
        <StyledHeader>
            <StyledContainer>
                <StyledImgage src={image} alt="" />
            </StyledContainer>
            <NavMenu />
        </StyledHeader>
    );
}