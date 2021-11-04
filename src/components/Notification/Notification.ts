import { wrap } from "@atlasgroup/react-wrap/lib";
import { NotificationDefaultView } from "@components/Notification/Notification.view";
import { useNotification } from "@components/Notification/useNotification";

export const Notification = wrap(NotificationDefaultView, useNotification);
