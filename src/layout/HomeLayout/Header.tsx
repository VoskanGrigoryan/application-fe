import { AppShell, Burger } from "@mantine/core";
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
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" />
      <div className={classes.title}>Patitas Felices</div>
    </AppShell.Header>
  );
}
