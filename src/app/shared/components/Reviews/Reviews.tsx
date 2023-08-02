import { styled } from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { ReviewsCard } from "../ReviewsCard/ReviewsCard";
import { TReviews, TReviewsProps } from "../../utils/types/reviews/reviews.types";
import { text3 } from "../../../../assets/main/main";


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
            </div>
        </StyledContainer>
    );
}