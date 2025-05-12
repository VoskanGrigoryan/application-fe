import { Button, ButtonProps } from "@mantine/core";
import { ReactNode } from "react";

interface IMyButton extends ButtonProps {
  children: ReactNode;
  ariaLabel?: string;
  onClick?: () => void;
}

const MyButton = ({
  children,
  size = "sm",
  variant = "gradient",
  radius = "sm",
  ariaLabel,
  onClick,
  ...props
}: IMyButton) => {
  return (
    <Button
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
