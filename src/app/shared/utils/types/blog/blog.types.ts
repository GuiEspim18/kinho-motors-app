export type TBlog = {
    title: string;
    subTitle: string;
    content: Array<TContent>
};

export type TContent = {
    title: string;
    text: string;
} 