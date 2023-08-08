import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { TNavMenu } from "../../utils/types/nav-menu/nav-menu.types";
import { device, text1 } from "../../../../assets/main/main";
import { Button } from "@mui/material";
import { Fragment } from "react";
import { navMenuContent } from "../../utils/moc/nav-menu/nav-menu.moc";

const Navs = styled.ul`
    width: 100%;
    padding: 20px 0;
    margin: 0;
    list-style: none;
    flex-flow:row;

    li {
        flex: 1;

        button {
            color: ${text1};
            width: 100%;


            &:hover {
                background: transparent;
            }
        }
    }

    @media screen and (${device.laptop.max}) {
        padding: 0px;
        display: none;
    }

    @media screen and (${device.laptop.min}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const StyledNav = styled.nav`
    z-index: 1000;
    display: block;

`;

const StyledHr = styled.div`
    border-left: solid 1px ${text1};
    height: 30px !important;
`;

export const NavMenu = (): JSX.Element => {

    const menu: Array<TNavMenu> = navMenuContent;

    const navigate = (anchor: string) => {
        const element: Element | null = document.querySelector(anchor);
        element?.scrollIntoView();
    }


    const populate = (): Array<JSX.Element> => {
        return menu.map((element: TNavMenu) => {
            if (element.id !== 0) return (
                <Fragment key={element.id}>
                    <StyledHr />
                    <li>
                        <Button variant="text" onClick={() => navigate(element.anchor)}>{element.name}</Button>
                    </li>
                </Fragment>
            );
            return (
                <li key={element.id}>
                    <Button variant="text" onClick={() => navigate(element.anchor)}>{element.name}</Button>
                </li>
            );
        });
    };


    return (
        <StyledNav>
            <Container>
                <Navs>
                    {populate()}
                </Navs>
            </Container>
        </StyledNav>
    );
}