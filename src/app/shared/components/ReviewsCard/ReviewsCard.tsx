import { styled } from "styled-components";
import { card, main, text1 } from "../../../../assets/main/main";
import { TReviews } from "../../utils/types/reviews/reviews.types";
import { Button } from "@mui/material";

const Card = styled.div`
    background: ${main};
    color: ${text1};
    padding: 20px;
    max-width: 500px;
    border-radius: 20px;
`;

const Img = styled.img`
    width: 30px;
`;

const FooterCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const StyledButton = styled(Button)`
    background: ${card} !important;
    color: ${text1} !important;
`;

export const ReviewsCard = (props: TReviews): JSX.Element => {

    const name: string = props.name;
    const content: string = props.content;
    const link: string = props.link;
    const stars: number = props.stars;

    const popStars = (): Array<JSX.Element> => {
        let html: Array<JSX.Element> = [];
        for (let i = stars; i > 0; i--) html.push(<Img src="/images/icons/round-star.svg" />);
        return html.map((element: JSX.Element) => element);
    };

    return (
        <Card>
            <h1>{name}</h1>
            <p>"{content}"</p>
            <hr />
            <FooterCard>
                <div>
                    {popStars()}
                </div>
                <StyledButton onClick={() => window.open(link, '_blank')?.focus()}>Ver avaliação</StyledButton>
            </FooterCard>
        </Card>
    );
}