"use client";

import { AppShell, Burger, Group, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./AppShell.module.css";
import { IconPawFilled, IconUser, IconUserFilled } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import * as motion from "motion/react-client";
import { useEffect } from "react";

const NavbarOptions = [
  { label: "Inicio", url: "/" },
  { label: "Adoptar", url: "/vista/adopcion" },
  { label: "Eventos", url: "/vista/eventos" },
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

  useEffect(() => {
    const body = document.body;
    if (opened) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }

    return () => {
      body.style.overflow = "";
    };
  }, [opened]);

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
      padding="0"
    >
      <AppShell.Header className={classes.header} withBorder={false}>
        <div
          className={classes.logo}
          onClick={() => router.push(`/`)}
        >
          <IconPawFilled size={40} strokeWidth={1} color="var(--mantine-color-secondary-5)" />
        </div>

        <Group
          h="100%"
          px="md"
          py={0}
          justify="space-between"
          style={{ width: "100%" }}
        >
          <Burger
            opened={opened}
            onClick={toggle}
            hiddenFrom="sm"
            size="md"
            color="dark"
          />

          {/* NAV LINKS (solo visibles en desktop) */}
          <Group
            visibleFrom="sm"
            style={{ flex: 1, justifyContent: "center" }}
            gap={60}
          >
            {NavbarOptions.map((option) => (
              <motion.div
                whileHover={{ scale: 0.9 }}
                whileTap={{ scale: 0.8 }}
                key={option.label}
              >
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
          <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.8 }}>
            <Group
              className={classes.userIconHeader}
              gap={8}
              onClick={() => router.push(`/vista/auth/login`)}
            >
              <Text size="xl">Usuario</Text>
              <IconUserFilled size={32} strokeWidth={2} />
            </Group>
          </motion.div>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar
        style={{ backgroundColor: `var(--mantine-color-gray-3)` }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: 20,
          }}
        >
          {NavbarOptions.map((option) => (
            <UnstyledButton
              key={option.label}
              className={classes.control}
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
