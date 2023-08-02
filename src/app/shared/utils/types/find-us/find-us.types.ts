export type TFindUs = {
    title: string,
    content: Array<TContent>
}

export type TContent = {
    title: string;
    text: string | Array<string>,
    image: string;
}