import styled from "styled-components";
import { Container } from "../../../../assets/css/GlobalStyles";
import { main2, shadow, text1, text2, text3 } from "../../../../assets/main/main";
import { TContent, TFindUs } from "../../utils/types/find-us/find-us.types";

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

const Iframe = styled.iframe`
    width: 45%;
    height: 400px;
    border: 0;
    border-radius: 10px;
    box-shadow: 4px 4px 10px ${shadow};
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


export const FindUs = (props: TFindUs): JSX.Element => {

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
        <div id="find-us">
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
    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.0059167278296!2d-46.578064124671855!3d-23.496296378844548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f5da4918c4d%3A0xec0787a75e8c71a8!2sKinho%20Motor&#39;s%20Centro%20Automotivo!5e0!3m2!1spt-BR!2sbr!4v1690990434838!5m2!1spt-BR!2sbr" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></Iframe>
*/