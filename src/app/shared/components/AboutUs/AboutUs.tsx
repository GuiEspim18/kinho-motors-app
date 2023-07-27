import { styled } from "styled-components";
import { shadow, text2, transparentBg } from "../../../../assets/main/main";
import { Container } from "../../../../assets/css/GlobalStyles";

const StyledDiv = styled.div`
    width: 100%;
    padding: 20px 0px;
    background: ${transparentBg};

    h1, p {
        color: ${text2};
    }
`;

const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        width: 40%;
    }

    div > img {
        border-radius: 5px;
        box-shadow: 4px 4px 10px ${shadow};
    }

    .imageDiv {
        display: flex;
        justify-content: flex-end;
    }
`;

export const AboutUs = (): JSX.Element => {
    return (
        <StyledDiv>
            <StyledContainer>
                <div>
                    <h1>Quem Somos?</h1>
                    <p>Kinho Motors é uma oficina automotiva de destaque, liderada pelo apaixonado mecânico Kinho. Com mais de 20 anos de experiência, sua equipe experiente oferece serviços de manutenção, reparos e personalização, sempre atualizados com as últimas tendências. Com ética, qualidade e atendimento acolhedor, conquistam a confiança e satisfação dos clientes diariamente.</p>
                </div>
                <div className="image-div">
                    <img src="/images/image2.png" alt="" />
                </div>
            </StyledContainer>
        </StyledDiv>
    );
}