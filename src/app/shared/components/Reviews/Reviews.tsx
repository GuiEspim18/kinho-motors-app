import { styled } from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import { TReviews, TReviewsProps } from "../../utils/types/reviews/reviews.types";
import { text3 } from "../../../../assets/main/main";
import { RedButton } from "../RedButton/RedButton";


type CardDivProps = {
    align: string
}

const Title = styled.div`
    width: 100%;
    text-align: center;

    h2 {
        color: ${text3};
        text-align: center;
    }
`;

const StyledContainer = styled(Container)`
    padding: 20px 0 !important;
`;

const CardDiv = styled.div<CardDivProps>`
    display: flex;
    width: 100%;
    justify-content: ${(props: CardDivProps) => props.align};
    margin-bottom: 20px;
`;

const StyledRedButton = styled(RedButton)`
    margin: 0 auto !important;
`;

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;


export const Reviews = (props: TReviewsProps): JSX.Element => {

    const reviews: Array<TReviews> = props.reviews;

    const populate = (): Array<JSX.Element> => {
        return reviews.map((element: TReviews) => {
            const num: number = reviews.indexOf(element) + 1;
            let align: string = "flex-end";
            if (num % 2 === 0) align = "flex-start";
            return (
                <CardDiv align={align}>
                    <ReviewsCard name={element.name} content={element.content} link={element.link} stars={element.stars}></ReviewsCard>
                </CardDiv>
            );
        });
    };

    return (
        <StyledContainer>
            <div id="reviews">
                <Title>
                    <h2>Avaliações</h2>
                </Title>
                {populate()}
                <ButtonDiv>
                    <StyledRedButton text="Ver mais avaliações" redirect={true} link="https://www.google.com/search?q=Kinho+Motor%27s+Centro+Automotivo+-+Avenida+Professor+Castro+J%C3%BAnior+-+Vila+Sabrina%2C+S%C3%A3o+Paulo+-+SP&sxsrf=AB5stBjwzi82vor5MRpD8u-b7kmv4syd_g%3A1690988800149&ei=AHHKZN75B92b1sQP5tamwA8&oq=kinho+motors+centro+automo&gs_lp=Egxnd3Mtd2l6LXNlcnAiGmtpbmhvIG1vdG9ycyBjZW50cm8gYXV0b21vKgIIADICECZI6nVQ6w5Yi2pwA3gAkAEAmAG2AaAB_h6qAQQwLjI4uAEByAEA-AEBqAIUwgIHECMY6gIYJ8ICEBAAGIoFGOoCGLQCGEPYAQHCAgQQIxgnwgIHECMYigUYJ8ICCxAuGIAEGLEDGIMBwgILEAAYgAQYsQMYgwHCAgsQABiKBRixAxiDAcICERAuGIAEGLEDGIMBGMcBGNEDwgIIEAAYgAQYsQPCAgwQIxiKBRgTGIAEGCfCAgUQLhiABMICERAuGIAEGLEDGIMBGMcBGK8BwgIOEC4YigUYsQMYxwEY0QPCAgsQLhiABBjHARivAcICCBAuGIAEGLEDwgINEC4YigUYxwEYrwEYQ8ICBxAAGIoFGEPCAg4QLhiABBixAxjHARjRA8ICBRAAGIAEwgIHEAAYgAQYCsICCxAuGK8BGMcBGIAEwgIaEC4YrwEYxwEYgAQYlwUY3AQY3gQY4ATYAQLCAgYQABgWGB7iAwQYACBBiAYBugYGCAEQARgBugYGCAIQARgU&sclient=gws-wiz-serp#lrd=0x94ce5f5da4918c4d:0xec0787a75e8c71a8,1,,,,"></StyledRedButton>
                </ButtonDiv>
            </div>
        </StyledContainer>
    );
}