import { Fragment } from "react";
import { Header } from "../shared/components/Header/Header";
import styled from "styled-components";
import { AboutUs } from "../shared/components/AboutUs/AboutUs";
import { aboutUsContent } from "../shared/utils/moc/about-us/about-us.moc";
import { TAboutUs } from "../shared/utils/types/about-us/about-us";
import { Jobs } from "../shared/components/Jobs/Jobs";
import { TJobs } from "../shared/utils/types/jobs/jobs.types";
import { jobsContent } from "../shared/utils/moc/jobs/jobs.moc";

const StyledContent = styled.main`
    background-image: url('/images/background.svg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
`;

export const Home = (): JSX.Element => {

    const aboutUs: TAboutUs = aboutUsContent;
    const jobs: TJobs = jobsContent;

    return (
        <Fragment>
            <Header image="/images/img-header.svg"/>
            <StyledContent>
                <AboutUs title={aboutUs.title} text={aboutUs.text} image={aboutUs.image}/>
                <Jobs title={jobs.title} jobs={jobs.jobs}></Jobs>
            </StyledContent>
        </Fragment>
    );
}