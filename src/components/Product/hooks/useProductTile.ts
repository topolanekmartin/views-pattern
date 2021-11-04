import { useProductFetch } from "./useProductFetch";
import { ButtonProps } from "@material-ui/core";
import { useProductNotification } from "@components/Product/hooks/useProductNotification";

type UseProductTileArgs = {
    id: number;
};

export const useProductTile = ({ id }: UseProductTileArgs) => {
    const { product, isLoading } = useProductFetch(id);
    const { showMessage } = useProductNotification();
    const onAddToBasket: ButtonProps["onClick"] = () => {
        showMessage("Product was added to cart!");
    };

    return {
        product,
        isLoading,
        onAddToBasket,
    };
};
