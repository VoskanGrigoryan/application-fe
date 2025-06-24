import { Button, ButtonProps } from "@mantine/core";
import { ReactNode } from "react";

interface IMyButton extends ButtonProps {
  children: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const MyButton = ({
  children,
  color,
  size = "sm",
  variant = "filled",
  radius = "sm",
  ariaLabel,
  onClick,
  ...props
}: IMyButton) => {
  return (
    <Button
      color={color}
      size={size}
      variant={variant}
      radius={radius}
      aria-label={ariaLabel}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
