import { useEffect, useState } from "react";
import { ProductType } from "@components/Product/types";

export const useProductFetch = (id: number) => {
    const [product, setProduct] = useState<ProductType | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return {
        product,
        isLoading,
        isError,
    };
};
