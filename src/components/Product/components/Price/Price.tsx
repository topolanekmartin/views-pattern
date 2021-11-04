import React, { FC } from "react";
import { StyledProductPrice } from "@components/Product/components/Price/Price.style";

type ProductPriceProps = {
    price: number;
    locales?: string;
    currency?: string;
};

export const ProductPrice: FC<ProductPriceProps> = ({
    price,
    locales = "en-US",
    currency = "USD",
    ...containerProps
}) => (
    <StyledProductPrice {...containerProps}>
        {new Intl.NumberFormat(locales, {
            style: "currency",
            currency: currency,
        }).format(price)}
    </StyledProductPrice>
);
