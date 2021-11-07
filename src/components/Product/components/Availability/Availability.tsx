import React, { FC } from "react";
import {
    ProductAvailabilityType,
    ProductType,
} from "@components/Product/types";
import { StyledProductAvailability } from "./Availability.style";

type ProductAvailabilityProps = {
    availability: ProductType["availability"];
};

const ProductAvailabilityTranslates: Record<ProductAvailabilityType, string> = {
    "in-stock": "Skladem",
    "out-of-stock": "Nedostupné",
};

export const ProductAvailability: FC<ProductAvailabilityProps> = ({
    availability,
    ...containerProps
}) => (
    <StyledProductAvailability
        component={"span"}
        availability={availability}
        {...containerProps}
    >
        {ProductAvailabilityTranslates[availability]}
    </StyledProductAvailability>
);
