import { css, styled } from "@styled";
import { Typography } from "@material-ui/core";
import { ProductType } from "@components/Product/types";

type StyledProductAvailabilityProps = { component?: any } & Pick<
    ProductType,
    "availability"
>;

export const StyledProductAvailability = styled(
    Typography
)<StyledProductAvailabilityProps>`
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};

    ${({ availability }) =>
        availability === "in-stock" &&
        css`
            color: #65bc4a;
        `};

    ${({ availability }) =>
        availability === "out-of-stock" &&
        css`
            color: #cc0000;
        `};
`;
