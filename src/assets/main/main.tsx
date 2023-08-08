export const main: string = "#1c1c1c";
export const main2: string = "#f0f0f0";
export const main3: string = "#d9d9d9";

export const text1: string = "#f0f0f0";
export const text2: string = "#303030";
export const text3: string = "#101010";

export const shadow: string = "#0000005b";
export const shadow2: string = "#000000be";

export const card: string = "#D9242D";
export const cardHover: string = "#c81e27";

export const lightGray: string = "#b6b6b6"
export const lightGray2: string = "#cecece"

export const transparentBg: string = "#d9d9d995";
export const transparentBg2: string = "#d9d9d9";

type Device = {
    mobileS: {min: string, max: string, width: string},
    mobileM: {min: string, max: string, width: string},
    mobileL: {min: string, max: string, width: string},
    tablet: {min: string, max: string, width: string},
    laptop: {min: string, max: string, width: string},
    laptopL: {min: string, max: string, width: string},
    desktop: {min: string, max: string, width: string}
}

export const size: Device | any = {
    mobileS: 320,
    mobileM: 375,
    mobileL: 425,
    tablet: 768,
    laptop: 1024,
    laptopL: 1440,
    desktop: 2560
};

const devices = (): Device => {
    let obj: any = {};
    for (let i in size) {
        obj[i] = {min: `(min-width: ${size[i]}px)`, max: `(max-width: ${size[i]}px)`, width: `(width: ${size[i]}px)`};
    }
    return obj;
};

export const device = devices();

/* 
{
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};
*/