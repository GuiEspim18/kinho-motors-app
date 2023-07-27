import { TAboutUs } from "../../types/about-us/about-us";

const calculate = (): number => {
    const date: Date = new Date();
    const currentYear: number = date.getFullYear();
    const result: number = currentYear - 1996
    return result;
}

export const aboutUsContent: TAboutUs = {
    title: "Quem Somos?",
    text: `Kinho Motors é uma oficina automotiva de destaque, liderada pelo apaixonado mecânico Kinho. Com ${calculate()} anos de experiência, sua equipe experiente oferece serviços de manutenção, reparos e personalização, sempre atualizados com as últimas tendências. Com ética, qualidade e atendimento acolhedor, conquistam a confiança e satisfação dos clientes diariamente.`,
    image: {
        src: "/images/image2.png",
        alt: "Oficina Kinho motors"
    }
};