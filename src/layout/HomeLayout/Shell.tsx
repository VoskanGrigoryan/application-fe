"use client";

import { AppShell, Burger, Group, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppShell.module.css";
import { IconUser } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";

const NavbarOptions = [
  { label: "Inicio", url: "/" },
  { label: "Adoptar", url: "/vista/adopcion" },
  { label: "Nosotros", url: "/vista/eventos" },
  { label: "Donaciones", url: "/potato" },
];

export function BaseShell({
  children,
  style,
  className,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}) {
  const [opened, { toggle }] = useDisclosure();
  const router = useRouter();

  return (
    <AppShell
      className={className}
      style={style}
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header className={classes.header} withBorder={false}>
        <Group h="100%" px="md" py={0} style={{ width: "100%" }}>
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="sm"
            color="#fff"
          />

          {/* NAV LINKS (solo visibles en desktop) */}
          <Group
            visibleFrom="sm"
            style={{ flex: 1, justifyContent: "center" }}
            py={0}
          >
            {NavbarOptions.map((option) => (
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} key={option.label}>
                <UnstyledButton
                  className={classes.control}
                  onClick={() => {
                    window.location.href = option.url;
                  }}
                >
                  {option.label}
                </UnstyledButton>
              </motion.div>
            ))}
          </Group>

          {/* USUARIO */}
          <Group
            className={classes.userIconHeader}
            gap={8}
            onClick={() => router.push(`/vista/auth/login`)}
          >
            <IconUser />
            <Text size="xl">Iniciar sesión</Text>
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

      <AppShell.Main style={{ paddingTop: 100, marginTop: 0 }}>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
