import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { main2, shadow, text1, text2 } from "../../../../assets/main/main";
import { TContent, TContact } from "../../utils/types/contact/find-us.types";

const Title = styled.div`
    width: 100%;
    text-align: center;
    padding: 30px 0px;

    h2 {
        color: ${text1};
        text-align: center;
        margin: 0;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 0px;
`;

const Card = styled.div`
    width: 25%;
    height: 170px;
    background: ${main2};
    box-shadow: 4px 4px 10px ${shadow};
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
`;

const Icon = styled.img`
    width: 40px;
`;

const P = styled.p`
    color: ${text2};
    font-size: 1rem;
    text-align: center;
    font-weight: 600;
`;

const CardTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    h3 {
        color: ${text2};
        margin: 0;
        font-size: 1.5rem;
    }
`;


export const Contact = (props: TContact): JSX.Element => {

    const title: string = props.title;
    const content: Array<TContent> = props.content;

    const populate = () => {

        return content.map((element: TContent) =>
            <Card>
                <CardTitle>
                    <Icon src={element.image} />
                    <h3>{element.title}</h3>
                </CardTitle>
                <hr />
                {typeof(element.text) === "string" ? <P>{element.text}</P> : element.text.map((element: string) => <P>{element}</P>)}
            </Card>);
    }

    return (
        <div id="contact">
            <Container>
                <Title>
                    <h2>{title}</h2>
                </Title>
                <Content>
                    {populate()}
                </Content>
            </Container>
        </div>
    );
}

/*
    
*/