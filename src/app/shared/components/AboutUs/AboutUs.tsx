import { styled } from "styled-components";
import { shadow, text2, transparentBg } from "../../../../assets/main/main";
import { Container } from "../../../../assets/css/GlobalStyles";
import { TAboutUs, TImage } from "../../utils/types/about-us/about-us";

const StyledDiv = styled.div`
    width: 100%;
    padding: 20px 0px;
    background: ${transparentBg};
`;

const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;

    div {
        width: 40%;
    }
`;

const StyledImageDiv = styled.div`
    display: flex;
    justify-content: flex-end;

    img {
        border-radius: 5px;
        box-shadow: 4px 4px 10px ${shadow};
    }
`;

const StyledTextDiv = styled.div`
   h1, p {
        color: ${text2};
    }
`;

export const AboutUs = (props: TAboutUs): JSX.Element => {

    const title: string = props.title;
    const text: string = props.text;
    const image: TImage = props.image;

    return (
        <StyledDiv id="#aboutUs">
            <StyledContainer>
                <StyledTextDiv>
                    <h1>{title}</h1>
                    <p>{text}</p>
                </StyledTextDiv>
                <StyledImageDiv>
                    <img src={image.src} alt={image.alt} />
                </StyledImageDiv>
            </StyledContainer>
        </StyledDiv>
    );
}