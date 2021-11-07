export type ProductRatingType = {
    rate: number;
    count: number;
};

export type ProductAvailabilityType = "in-stock" | "out-of-stock";

export type ProductType = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: ProductRatingType;
    availability: ProductAvailabilityType;
};
