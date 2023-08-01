import { useState } from "react";
import styled from "styled-components";
import { TCards } from "../../utils/types/jobs/jobs.types";
import { card, cardHover, main2, shadow, text3 } from "../../../../assets/main/main";
import { BorderedButton } from "../../utils/components/buttons/BorderedButton/BorderedButton";

interface FlipCardInnerProps {
    isflipped: boolean;
}

const FlipCardContainer = styled.div`
  width: 20%;
  height: 360px;
  perspective: 1000px;
  cursor: pointer;
  border-radius: 5px;
  position: relative;
  display: block;
  padding: 5px;   
`;

const FlipCardInner = styled.div<FlipCardInnerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${(props: any) => (props.isflipped ? 'rotateY(180deg)' : 'none')};
`;

const FlipCardFront = styled.div`
  background-color: ${card};
  color: ${text3};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden; 
  border-radius: 5px;
  box-shadow: 4px 4px 10px ${shadow};
  transition: 0.3s;

  &:hover {
    background: ${cardHover};
  }

`;

const FlipCardBack = styled.div`
  background-color: ${main2};
  color: ${text3};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  border-radius: 5px;
  box-shadow: 4px 4px 10px ${shadow};
`;

const Content = styled.div`
    padding: 10px;

    img {
        width: 110px;
        margin: 0 auto;
        display: block;
    }
`;

export const Card = (props: TCards): JSX.Element => {

    const title: string = props.title;
    const text: string = props.text;
    const image: string = props.image;

    const [isFlipped, setIsFlipped] = useState(false);


    const enter = () => setIsFlipped(true);
    const leave = () => setIsFlipped(false);

    return (
        <FlipCardContainer onMouseEnter={enter} onMouseLeave={leave}>
            <FlipCardInner isflipped={isFlipped}>
                <FlipCardFront>
                    <Content>
                        <img src={image} alt="" />
                        <h3>{title}</h3>
                        <BorderedButton text="Ver mais" />
                    </Content>
                </FlipCardFront>
                <FlipCardBack>
                    <Content>
                        <h3>{title}</h3>
                        <hr />
                        <div>
                            <p>{text}</p>
                        </div>
                    </Content>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCardContainer>
    );
}