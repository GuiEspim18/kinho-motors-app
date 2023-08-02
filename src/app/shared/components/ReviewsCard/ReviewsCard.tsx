import { styled } from "styled-components";
import { main, shadow, text1 } from "../../../../assets/main/main";
import { TReviews } from "../../utils/types/reviews/reviews.types";
import { RedButton } from "../RedButton/RedButton";

const Card = styled.div`
    background: ${main};
    color: ${text1};
    padding: 20px;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: 4px 4px 10px ${shadow};
`;

const Img = styled.img`
    width: 30px;
`;

const FooterCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
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
                <RedButton text="Ver avaliação" redirect={true} link={link}></RedButton>
            </FooterCard>
        </Card>
    );
}