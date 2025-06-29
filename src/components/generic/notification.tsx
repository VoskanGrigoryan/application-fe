import { Notification } from "@mantine/core";
import { ReactElement } from "react";

const MyNotification = ({
  icon,
  color = "violet",
  radius = "md",
  title,
  body,
}: {
  icon?: ReactElement;
  color?: string;
  radius?: string;
  title: string;
  body: string;
}) => {
  return (
    <Notification
      icon={icon}
      withBorder
      withCloseButton={false}
      color={color}
      radius={radius}
      title={title}
      style={{
        position: "absolute",
        width: 400,
        zIndex: 20,
        bottom: 30,
        right: 30,
      }}
    >
      {body}
    </Notification>
  );
};

export default MyNotification;
