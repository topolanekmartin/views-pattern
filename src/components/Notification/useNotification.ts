import { useNotificationContext } from "@contexts/Notification";

export const useNotification = () => {
    const { autoHideDuration, message, isVisible, closeNotification } =
        useNotificationContext();

    return { autoHideDuration, message, isVisible, closeNotification };
};
