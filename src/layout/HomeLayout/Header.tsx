import { AppShell, Burger, Text } from "@mantine/core";
import classes from "./css/Header.module.css";  

export function Header({
  opened,
  toggle,
}: {
  opened: boolean;
  toggle: () => void;
}) {
  return (
    <AppShell.Header className={classes.header}>
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" color="white" />
      <Text fs="italic" className={classes.title}>Patitas Felices</Text >
    </AppShell.Header>
  );
}
