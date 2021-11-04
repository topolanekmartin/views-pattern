import { Box } from "@mui/material";
import { ProductImage } from "@components/Product/components/Image";
import { styled } from "@styled";
import { Typography } from "@material-ui/core";
import { ProductPrice } from "@components/Product/components/Price";
import { ProductButton } from "@components/Product/components/Button";
import { ProductRating } from "@components/Product/components/Rating";

export const StyledProductTileImage = styled(ProductImage)`
    max-width: 100%;
`;

export const StyledProductTileRating = styled(ProductRating)`
    margin: ${({ theme }) => theme.spacing(2, 0, 0)};
`;

export const StyledProductTileTitle = styled(Typography)`
    font-size: 18px;
    text-align: center;
    cursor: pointer;
`;

export const StyledProductTilePrice = styled(ProductPrice)`
    && {
        margin: ${({ theme }) => theme.spacing(1, 0)};
        font-size: 18px;
    }
`;

export const StyledProductTileButton = ProductButton;

export const StyledProductTileContainer = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)}px;
    width: 280px;
    padding: ${({ theme }) => theme.spacing(3, 3)};
    transition: box-shadow
        ${({ theme }) => theme.transitions.duration.standard}ms
        ${({ theme }) => theme.transitions.easing.easeIn};

    &:hover {
        box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
    }
`;
