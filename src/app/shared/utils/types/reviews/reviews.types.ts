export type TReviews = {
    name: string;
    content: string;
    stars: number;
    link: string;
};

export type TReviewsProps = {
    reviews: Array<TReviews>;
};