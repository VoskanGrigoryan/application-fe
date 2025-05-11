import { Paper, PaperProps } from "@mantine/core";
import { ReactNode } from "react";

interface IMyPaper extends PaperProps {
  children: ReactNode | string;
}

const MyPaper = ({
  children,
  shadow = "md",
  withBorder = true,
  p = "lg",
  ...props
}: IMyPaper) => {
  return (
    <Paper shadow={shadow} withBorder={withBorder} p={p} {...props}>
      {children}
    </Paper>
  );
};

export default MyPaper;
