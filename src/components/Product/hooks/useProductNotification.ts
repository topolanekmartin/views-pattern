import { useNotificationContext } from "@contexts/Notification";

export const useProductNotification = () => {
    const notification = useNotificationContext();
    const showMessage = (message: string) => {
        notification.setIsVisible(true);
        notification.setMessage(message);
    };

    return {
        notification,
        showMessage,
    };
};
