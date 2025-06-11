"use client";

import { AppShell, Burger, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppShell.module.css";

const NavbarOptions = [
  { label: "Inicio", url: "/" },
  { label: "Adoptar", url: "/vista/adopcion" },
  { label: "Nosotros", url: "/vista/eventos" },
  { label: "Contacto", url: "/potato" },
];

export function BaseShell({ children }: { children: React.ReactNode }) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={classes.header}>
        <Group h="100%" px="md">
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="#fff"
          />
          <Group justify="space-between" visibleFrom="sm" style={{ flex: 1 }}>
            {NavbarOptions.map((option) => {
              return (
                <UnstyledButton
                  key={option.label}
                  className={classes.control}
                  onClick={() => {
                    window.location.href = option.url;
                  }}
                >
                  {option.label}
                </UnstyledButton>
              );
            })}
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            paddingTop: 20,
          }}
        >
          {NavbarOptions.map((option) => (
            <UnstyledButton
              key={option.label}
              className={classes.control}
              style={{ color: "black" }}
              onClick={() => {
                window.location.href = option.url;
              }}
            >
              {option.label}
            </UnstyledButton>
          ))}
        </div>
      </AppShell.Navbar>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
