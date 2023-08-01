import styled from "styled-components";
import { main, main3, text1, text3 } from "../../../../assets/main/main";
import { TBlog, TContent } from "../../utils/types/blog/blog.types";
import { Container } from "../../../../assets/css/GlobalStyles";
import { Accordion, AccordionSummary, Typography, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Content = styled.section`
    background: ${main};
    padding: 15px 0px;

    h2, h3 {
        color: ${text1};
        padding: 0;
    }

    h2 {text-align: center;}

    h3 {font-weight: 400;}
`;

const StyledAcordion = styled(Accordion)`
    background: ${main3} !important;
    color: ${text3} !important;
`;

const AccordionDiv = styled.div`
    margin-bottom: 10px;
`;

export const Blog = (props: TBlog): JSX.Element => {

    const title: string = props.title;
    const subTitle: string = props.subTitle;
    const content: Array<TContent> = props.content;

    const populate = (): Array<JSX.Element> => {
        return content.map((element: TContent) => {
            return (
                <AccordionDiv>
                    <StyledAcordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{element.title}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {element.text}
                            </Typography>
                        </AccordionDetails>
                    </StyledAcordion>
                </AccordionDiv>
            );
        })
    }


    return (
        <Content id="blog">
            <Container>
                <h2>{title}</h2>
                <h3>{subTitle}</h3>
                {populate()}
            </Container>
        </Content>
    );
}