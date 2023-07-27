import { useState } from "react";
import styled from "styled-components";
import { TCards } from "../../utils/types/jobs/jobs.types";
import { card, main2, text1, text3 } from "../../../../assets/main/main";

interface FlipCardInnerProps {
    isflipped: boolean;
}

const FlipCardContainer = styled.div`
  width: 200px;
  height: 350px;
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
`;

const FlipCardBack = styled.div`
  background-color: ${main2};
  color: ${text3};
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  /* padding: 5px; */
  border-radius: 5px;
`;

const StyleContent = styled.div`
    padding: 10px;

    img {
        width: 110px;
        margin: 0 auto;
        display: block;
    }
`;

export const Card = (props: TCards) => {

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
                    <StyleContent>
                        <img src={image} alt="" />
                        <div>

                        </div>
                        <h3>{title}</h3>
                    </StyleContent>
                </FlipCardFront>
                <FlipCardBack>
                    <StyleContent>
                        <h3>{title}</h3>
                        <div>

                            <p>{text}</p>
                        </div>
                    </StyleContent>
                </FlipCardBack>
            </FlipCardInner>
        </FlipCardContainer>
    );
}