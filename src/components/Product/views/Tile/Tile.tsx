import React, { FC } from "react";
import { useProductTile } from "@components/Product/hooks/useProductTile";
import {
    StyledProductTileButton,
    StyledProductTileContainer,
    StyledProductTileImage,
    StyledProductTilePrice,
    StyledProductTileRating,
    StyledProductTileTitle,
} from "./Tile.style";
import { Skeleton } from "@mui/material";

type ProductTileViewProps = ReturnType<typeof useProductTile>;

export const ProductTileView: FC<ProductTileViewProps> = ({
    product,
    isLoading,
    onAddToBasket,
}) => {
    if (isLoading || !product) {
        return (
            <StyledProductTileContainer>
                <Skeleton variant={"rectangular"} width={280} height={370} />
                <Skeleton variant={"rectangular"} width={100} height={20} />
                <Skeleton variant={"text"} width={280} />
                <Skeleton variant={"text"} width={80} />
                <Skeleton variant={"rectangular"} width={180} height={40} />
            </StyledProductTileContainer>
        );
    }

    return (
        <StyledProductTileContainer>
            <StyledProductTileImage src={product.image} />
            <StyledProductTileRating {...product.rating} />
            <StyledProductTileTitle>{product.title}</StyledProductTileTitle>
            <StyledProductTilePrice price={product.price} />
            <StyledProductTileButton onClick={onAddToBasket}>
                {"Add to cart"}
            </StyledProductTileButton>
        </StyledProductTileContainer>
    );
};
