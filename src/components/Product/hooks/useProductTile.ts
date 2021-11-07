import { ButtonProps } from "@material-ui/core";
import { useNotificationContext } from "@contexts/Notification";
import { useProductFetch } from "./useProductFetch";

type UseProductTileArgs = {
    id: number;
};

export const useProductTile = ({ id }: UseProductTileArgs) => {
    const { product, isLoading } = useProductFetch(id);
    const { showMessage } = useNotificationContext();
    const onAddToBasket: ButtonProps["onClick"] = () => {
        showMessage("Product was added to cart!");
    };

    return {
        product,
        isLoading,
        onAddToBasket,
    };
};
