import { wrap } from "@atlasgroup/react-wrap/lib";
import { ProductLineView } from "@components/Product/views/Line";
import { useProductLine } from "@components/Product/hooks/useProductLine";

export const ProductLine = wrap(ProductLineView, useProductLine);
