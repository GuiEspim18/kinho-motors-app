export type TContact = {
    title: string,
    content: Array<TContent>
}

export type TContent = {
    title: string;
    text: string | Array<string>,
    image: string;
}