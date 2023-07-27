import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { TNavMenu } from "../../utils/types/nav-menu/nav-menu.types";
import { main, text1, transparentBg2 } from "../../../../assets/main/main";
import { Button } from "@mui/material";
import { Fragment } from "react";

const Navs = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 20px 0;
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
`;

const StyledNav = styled.nav`
    top: 0;
    position: sticky;
    background: ${main};
`;

const StyledHr = styled.div`
    border-left: solid 1px ${text1};
    height: 30px !important;
`;

export const NavMenu = (): JSX.Element => {

    const menu: Array<TNavMenu> = [
        {
            id: 0,
            name: "Quem somos"
        },
        {
            id: 1,
            name: "Serviços"
        },
        {
            id: 2,
            name: "Blog"
        },
        {
            id: 3,
            name: "Avaliações"
        },
        {
            id: 4,
            name: "Nos encontre"
        },
        {
            id: 5,
            name: "Contato"
        }
    ];


    const populate = (): Array<JSX.Element> => {
        return menu.map((element: TNavMenu) => {
            if (element.id !== 0) return (<Fragment key={element.id}><StyledHr/><li><Button variant="text">{element.name}</Button></li></Fragment>);
            return (<li key={element.id}><Button variant="text">{element.name}</Button></li>);
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