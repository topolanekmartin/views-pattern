import React, { FC } from "react";
import { useProductLine } from "@components/Product/hooks/useProductLine";
import {
    StyledProductLineContainer,
    StyledProductLineImage,
    StyledProductLineInformation,
    StyledProductLineTitle,
    StyledProductLineDescription,
    StyledProductLineAvailability,
    StyledProductLineRating,
    StyledProductLinePriceContainer,
    StyledProductLinePrice,
} from "./Line.style";
import { Skeleton } from "@mui/material";

type ProductLineViewProps = ReturnType<typeof useProductLine>;

export const ProductLineView: FC<ProductLineViewProps> = ({
    product,
    isLoading,
}) => {
    if (isLoading || !product) {
        return (
            <StyledProductLineContainer>
                <Skeleton width={80} height={88} variant={"rectangular"} />
                <StyledProductLineInformation style={{ gap: `8px` }}>
                    <Skeleton width={220} variant={"text"} />
                    <Skeleton width={`100%`} variant={"text"} />
                    <Skeleton
                        width={70}
                        variant={"text"}
                        style={{ display: "inline-block" }}
                    />
                    <Skeleton
                        width={120}
                        height={25}
                        variant={"rectangular"}
                        style={{ display: "inline-block" }}
                    />
                </StyledProductLineInformation>
                <StyledProductLinePriceContainer>
                    <Skeleton width={70} variant={"text"} />
                </StyledProductLinePriceContainer>
            </StyledProductLineContainer>
        );
    }

    return (
        <StyledProductLineContainer>
            <StyledProductLineImage src={product.image} />
            <StyledProductLineInformation>
                <StyledProductLineTitle component={"span"}>
                    {product.title}
                </StyledProductLineTitle>
                <StyledProductLineDescription>
                    {product.description}
                </StyledProductLineDescription>
                <StyledProductLineAvailability availability={"in-stock"} />
                <StyledProductLineRating {...product.rating} />
            </StyledProductLineInformation>
            <StyledProductLinePriceContainer>
                <StyledProductLinePrice price={product.price} />
            </StyledProductLinePriceContainer>
        </StyledProductLineContainer>
    );
};
