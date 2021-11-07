import React, {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useCallback,
    useContext,
    useState,
} from "react";

type NotificationContextType = {
    isVisible: boolean;
    message: string;
    autoHideDuration: number;
    setMessage: Dispatch<SetStateAction<string>>;
    setIsVisible: Dispatch<SetStateAction<boolean>>;
    closeNotification: () => void;
    showMessage: (message: string) => void;
};

const defaultValues: NotificationContextType = {
    isVisible: false,
    message: "",
    autoHideDuration: 5000,
    setMessage: () => null,
    setIsVisible: () => null,
    closeNotification: () => null,
    showMessage: () => null,
};

const NotificationContext =
    createContext<NotificationContextType>(defaultValues);

export const useNotificationContext = () => useContext(NotificationContext);

export const NotificationProvider: FC<NotificationContextType> = ({
    children,
}) => {
    const [isVisible, setIsVisible] =
        useState<NotificationContextType["isVisible"]>(false);
    const [message, setMessage] =
        useState<NotificationContextType["message"]>("");
    const closeNotification = useCallback(() => {
        setIsVisible(false);
        setMessage("");
    }, [setIsVisible, setMessage]);
    const showMessage = useCallback((message: string) => {
        setMessage(message);
        setIsVisible(true);
    }, []);

    return (
        <NotificationContext.Provider
            value={{
                ...defaultValues,
                isVisible,
                message,
                setMessage,
                setIsVisible,
                closeNotification,
                showMessage,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};
