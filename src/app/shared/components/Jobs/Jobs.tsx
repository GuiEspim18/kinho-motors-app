import styled from "styled-components";
import { TCards, TJobs } from "../../utils/types/jobs/jobs.types";
import { text3 } from "../../../../assets/main/main";
import { Container } from "../../../../assets/css/GlobalStyles";
import { Card } from "../Card/Card";

const StyledJobsDiv = styled.div`
    width: 100%;

    h2 {
        color: ${text3};
    }
`;

const StyledCards = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 20px;
`;

export const Jobs = (props: TJobs): JSX.Element => {

    const title: string = props.title;
    const jobs: Array<TCards> = props.jobs;

    const populate = (): Array<JSX.Element> => {
        return jobs.map((element) => <Card key={element.title} title={element.title} text={element.text} image={element.image}></Card>)
    }

    return (
        <StyledJobsDiv id="jobs">
            <Container>
                <div>
                    <h2>{title}</h2>
                </div>
                <StyledCards>
                    {populate()}
                </StyledCards>
            </Container>
        </StyledJobsDiv>
    );
}