import { ProductTileView } from "./views/Tile";
import { wrap } from "@atlasgroup/react-wrap/lib";
import { useProductTile } from "@components/Product/hooks/useProductTile";

export const ProductTile = wrap(ProductTileView, useProductTile);
