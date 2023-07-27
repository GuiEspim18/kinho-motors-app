import { Fragment } from "react";
import { Header } from "../shared/components/Header/Header";
import styled from "styled-components";
import { AboutUs } from "../shared/components/AboutUs/AboutUs";

const StyledContent = styled.main`
    background-image: url('/images/background.svg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
`;

export const Home = (): JSX.Element => {
    return (
        <Fragment>
            <Header />
            <StyledContent>
                <AboutUs />
            </StyledContent>
        </Fragment>
    );
}