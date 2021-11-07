import { useProductFetch } from "@components/Product/hooks/useProductFetch";

type UseProductLineArgs = {
    id: number;
};

export const useProductLine = ({ id }: UseProductLineArgs) => {
    const { product, isLoading } = useProductFetch(id);

    return { product, isLoading };
};
