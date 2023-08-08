import styled, { createGlobalStyle } from "styled-components";
import { main, device, shadow2 } from "../../../../assets/main/main";
import { Container } from "../../../../assets/css/GlobalStyles";

export const StyledHeader = styled.header`
    width: 100%;
    background: ${main};
    transition: height 0.3s;
    padding: 10px 0px;

    .header-content {
        padding: 10px 0px;
        top: 0;
        position: fixed;
        width: 100%;
        background: ${main};
        z-index: 9999;
    }

    .holder {
        max-width: 1200px;
        margin: 0 auto;
    }

    @media screen and (${device.laptop.max}) {
        height: 0px !important;
        
        .header-content {
           padding: 10px;
        }

        .holder {
            display: flex;
            justify-content: flex-end;

            .logo-container {
                width: 100px;
            }

            img {
                width: 100px;
            }
        }
    }

    @media screen and (${device.laptop.width}) {
        height: 160px;

        .header-content {
           padding: 10px 0px;
        }
        
        .holder {
            display: block;

            .logo-container {
                width: auto;
            }

            img {
                width: auto;
            }
        }
    }

    
`;

export const StyledContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const StyledImgage = styled.img`
    width: 200px;
`;

export const Global = createGlobalStyle`
    @media screen and (${device.laptop.min}) {

        .scrolled {
            background: ${shadow2};
            height: 60px !important;
            transition: 0.3s;

            .logo-container {
                width: 100px !important;
            }

            img {
                width: 100px !important;
            }

            .holder {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                height: 60px;

                nav {
                    flex: 1;
                }

            }

        }
    }

`;