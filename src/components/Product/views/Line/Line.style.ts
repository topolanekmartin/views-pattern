import { styled } from "@styled";
import { ProductImage } from "@components/Product/components/Image";
import { Typography } from "@material-ui/core";
import { ProductAvailability } from "@components/Product/components/Availability";
import { ProductRating } from "@components/Product/components/Rating";
import { ProductPrice } from "@components/Product/components/Price";

export const StyledProductLineImage = styled(ProductImage)`
    width: 80px;
    cursor: pointer;
`;

export const StyledProductLineTitle = styled(Typography)<{
    component: any;
}>`
    line-height: normal;
    font-size: 16px;
    font-weight: ${({ theme }) => theme.typography.fontWeightBold};
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
`;

export const StyledProductLineDescription = styled(Typography)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: normal;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.text.secondary};
`;

export const StyledProductLineAvailability = styled(ProductAvailability)`
    margin-top: 2px;
    margin-right: ${({ theme }) => `${theme.spacing(1)}px`};
    vertical-align: middle;
    font-size: 16px;
`;

export const StyledProductLineRating = styled(ProductRating)`
    display: inline-block;
    vertical-align: middle;
`;

export const StyledProductLineInformation = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-width: 0;
    flex: 1;
    gap: ${({ theme }) => `${theme.spacing(1)}px`};
    padding: ${({ theme }) => theme.spacing(1, 0)};
`;

export const StyledProductLinePriceContainer = styled.div`
    align-self: center;
`;

export const StyledProductLinePrice = styled(ProductPrice)``;

export const StyledProductLineContainer = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: ${({ theme }) => `${theme.spacing(2)}px`};
`;
