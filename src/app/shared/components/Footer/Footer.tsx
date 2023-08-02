import { styled } from "styled-components";
import { lightGray2, main, shadow, text1 } from "../../../../assets/main/main";
import { Container } from "../../../../assets/css/GlobalStyles";
import { TNavMenu } from "../../utils/types/nav-menu/nav-menu.types";
import { navMenuContent } from "../../utils/moc/nav-menu/nav-menu.moc";
import { Fragment } from "react";
import { Button } from "@mui/material";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 30px 0px;
    background: ${main};
`;

const Iframe = styled.iframe`
    max-width: 300px;
    height: 300px;
    border: 0;
    border-radius: 10px;
    box-shadow: 4px 4px 10px ${shadow};
`;

const StyledContianer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Logo = styled.img`
    width: 200px;
`;

const Devider = styled.span`
    height: 300px;
    width: 1px;
    display: block;
    background: ${lightGray2};
`;

const Ul = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

const StyledButton = styled(Button)`
    color: ${text1} !important;
    width: 100%;
`;

const Hr = styled.hr`
    background: ${lightGray2};
`;

export const Footer = (): JSX.Element => {

    const menu: Array<TNavMenu> = navMenuContent;

    const populate = (): Array<JSX.Element> => {
        return menu.map((element: TNavMenu) => {
            return (
                <Fragment key={element.id}>
                    <li>
                        <StyledButton variant="text" onClick={() => navigate(element.anchor)}>{element.name}</StyledButton>
                    </li>
                </Fragment>
            );
        });
    };

    const navigate = (anchor: string) => {
        const element: Element | null = document.querySelector(anchor);
        element?.scrollIntoView();
    }

    return (
        <StyledFooter>
            <StyledContianer>
                <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0059167278296!2d-46.578064124671855!3d-23.496296378844548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f5da4918c4d%3A0xec0787a75e8c71a8!2sKinho%20Motor&#39;s%20Centro%20Automotivo!5e0!3m2!1spt-BR!2sbr!4v1690990434838!5m2!1spt-BR!2sbr" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
                <Devider />
                <div>
                    <Logo src="/images/footer-img.svg" />
                    <Hr />
                    <Ul>
                        {populate()}
                    </Ul>
                </div>
            </StyledContianer>
        </StyledFooter>
    );
}