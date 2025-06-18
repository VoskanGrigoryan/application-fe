import { Paper, PaperProps } from "@mantine/core";
import { ReactNode } from "react";

interface IMyPaper extends PaperProps {
  children: ReactNode | string;
  onClick?: () => void;
}

const MyPaper = ({
  children,
  shadow = "sm",
  withBorder = true,
  p = "lg",
  onClick,
  ...props
}: IMyPaper) => {
  return (
    <Paper shadow={shadow} withBorder={withBorder} p={p} onClick={onClick} {...props}>
      {children}
    </Paper>
  );
};

export default MyPaper;
