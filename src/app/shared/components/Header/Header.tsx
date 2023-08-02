import styled, { createGlobalStyle } from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { main, shadow2 } from "../../../../assets/main/main";
import { NavMenu } from "../NavMenu/NavMenu";
import { THeader } from "../../utils/types/header/header.types";
import { Fragment, useEffect, useState } from "react";

const StyledHeader = styled.header`
    width: 100%;
    background: ${main};
    transition: height 0.3s;
    height: 168px;
    padding: 10px 0px;

    .header-content {
        padding: 10px 0px;
        height: 168px;
        top: 0;
        position: fixed;
        width: 100%;
        background: ${main};
        z-index: 9999;
    }

    .holder {
        max-width: 1200px;
        margin: 0 auto;
    }
`;

const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

const StyledImgage = styled.img`
    width: 200px;
`;

const Global = createGlobalStyle`
    .scrolled {
        background: ${shadow2};
        height: 60px !important;
        transition: 0.3s;

        .logo-container {
            width: 100px;
        }

        img {
            width: 100px;
        }

        .holder {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 60px;

            nav {
                flex: 1;
            }
        }
    }
`;

export default (props: THeader): JSX.Element => {

    const [scroll, setScroll] = useState(false);

    const image: string = props.image;

    const handleScroll = () => {
        if (window.scrollY >= 50) return setScroll(true);
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