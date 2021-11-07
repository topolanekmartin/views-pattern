import React, { FC } from "react";
import { ProductRatingType } from "@components/Product/types";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { StyledProductRatingContainer } from "./Rating.style";
import { Typography } from "@material-ui/core";

type ProductRatingProps = ProductRatingType;

export const ProductRating: FC<ProductRatingProps> = ({
    rate,
    count,
    ...containerProps
}) => (
    <StyledProductRatingContainer {...containerProps}>
        {Array(Math.floor(rate)).fill(<StarIcon fontSize={"small"} />)}
        {Array(5 - Math.floor(rate)).fill(
            <StarBorderIcon fontSize={"small"} />
        )}
        <Typography
            component={"span"}
            variant={"body2"}
        >{`${count}x`}</Typography>
    </StyledProductRatingContainer>
);
