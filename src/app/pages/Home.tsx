import { Fragment } from "react";
import { Header } from "../shared/components/Header/Header";
import styled from "styled-components";
import { AboutUs } from "../shared/components/AboutUs/AboutUs";
import { aboutUsContent } from "../shared/utils/moc/about-us/about-us.moc";
import { TAboutUs } from "../shared/utils/types/about-us/about-us";
import { Jobs } from "../shared/components/Jobs/Jobs";
import { TJobs } from "../shared/utils/types/jobs/jobs.types";
import { jobsContent } from "../shared/utils/moc/jobs/jobs.moc";
import { Blog } from "../shared/components/Blog/Blog";
import { TBlog } from "../shared/utils/types/blog/blog.types";
import { blogContent } from "../shared/utils/moc/blog/blog.moc";
import { Reviews } from "../shared/components/Reviews/Reviews";
import { TReviews } from "../shared/utils/types/reviews/reviews.types";
import { reviewsContent } from "../shared/utils/moc/reviews/reviews.moc";

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
    const blog: TBlog = blogContent;
    const reviews: Array<TReviews> = reviewsContent;

    return (
        <Fragment>
            <Header image="/images/img-header.svg" />
            <StyledContent>
                <AboutUs title={aboutUs.title} text={aboutUs.text} image={aboutUs.image} />
                <Jobs title={jobs.title} jobs={jobs.jobs} />
                <Blog title={blog.title} subTitle={blog.subTitle} content={blog.content}/>
                <Reviews reviews={reviews}/>
            </StyledContent>
        </Fragment>
    );
}