import { NavMenu } from "../NavMenu/NavMenu";
import { THeader } from "../../utils/types/header/header.types";
import { Fragment, useEffect, useState } from "react";
import { Global, StyledContainer, StyledHeader, StyledImgage } from "./Header.styled"
import { size } from "../../../../assets/main/main";

export const Header = (props: THeader): JSX.Element => {

    const [scroll, setScroll] = useState(false);

    const image: string = props.image;

    const handleScroll = () => {
        if (window.scrollY >= 50 && window.screen.width >= size.laptop) return setScroll(true);
        else return setScroll(false);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <Fragment>
            <Global />
            <StyledHeader>
                <article className={`header-content ${scroll && 'scrolled'}`}>
                    <div className="holder">
                        <div className="logo-container">
                            <StyledContainer >
                                <StyledImgage src={image} alt="" />
                            </StyledContainer>
                        </div>
                        <NavMenu />
                    </div>
                </article>
            </StyledHeader>
        </Fragment>
    );
};