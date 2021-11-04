import React, { FC } from "react";
import { Product } from "@components/Product/types";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { StyledProductRatingContainer } from "./Rating.style";

type ProductRatingProps = Pick<Product, "rating">;

export const ProductRating: FC<ProductRatingProps> = ({
    rating,
    ...containerProps
}) => (
    <StyledProductRatingContainer {...containerProps}>
        {Array(Math.floor(rating.rate)).fill(<StarIcon fontSize={"small"} />)}
        {Array(5 - Math.floor(rating.rate)).fill(
            <StarBorderIcon fontSize={"small"} />
        )}
    </StyledProductRatingContainer>
);
