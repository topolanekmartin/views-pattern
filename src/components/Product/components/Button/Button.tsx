import React, { FC } from "react";
import { StyledProductButton } from "@components/Product/components/Button/Button.style";
import { ButtonProps } from "@material-ui/core";

type ProductButtonProps = ButtonProps;

export const ProductButton: FC<ProductButtonProps> = ({
    variant = "contained",
    color = "primary",
    size = "large",
    children,
    ...buttonProps
}) => (
    <StyledProductButton
        variant={variant}
        color={color}
        size={size}
        {...buttonProps}
    >
        {children}
    </StyledProductButton>
);
