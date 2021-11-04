import React, { FC } from "react";
import { Grow, Snackbar } from "@material-ui/core";
import { useNotification } from "@components/Notification/useNotification";

type NotificationDefaultViewProps = ReturnType<typeof useNotification>;

export const NotificationDefaultView: FC<NotificationDefaultViewProps> = ({
    isVisible,
    autoHideDuration,
    message,
    closeNotification,
}) => (
    <Snackbar
        TransitionComponent={Grow}
        open={isVisible}
        autoHideDuration={autoHideDuration}
        message={message}
        onClose={closeNotification}
    />
);
