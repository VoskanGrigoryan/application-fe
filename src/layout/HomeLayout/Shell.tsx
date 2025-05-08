"use client";

import { AppShell, Button, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import classes from "./css/AppShell.module.css";
import { IconFilter } from "@tabler/icons-react";
import { useUiStore } from "@/src/stores/useUIStore";
import { usePathname } from "next/navigation";

export function BaseShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [opened, { toggle }] = useDisclosure();

  const isFilterDrawerOpened = useUiStore(
    (state) => state.isFilterDrawerOpened
  );
  const setFilterDrawerOpened = useUiStore(
    (state) => state.setFilterDrawerOpened
  );

  return (
    <AppShell
      className={classes.AppShellMain}
      header={{ height: 70 }}
      navbar={{
        width: 240,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      aside={{
        width: 300,
        breakpoint: "md",
        collapsed: {
          desktop: false,
          mobile: true,
        },
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} />
      <AppShell.Navbar>
        <Navbar toggle={toggle} />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>

      {/* Eventos esperan recibir una funcion, no el resultado de esta */}
      <Drawer
        position="right"
        opened={isFilterDrawerOpened}
        offset={12}
        radius="md"
        transitionProps={{
          transition: "rotate-left",
          duration: 150,
          timingFunction: "linear",
        }}
        onClose={() => setFilterDrawerOpened(false)}
        title="Filtros de adopcion"
        scrollAreaComponent={(props) => <div {...props} />}
        styles={{
          content: {
            maxHeight: "100dvh",
            overflowY: "auto",
          },
        }}
      >
        {/* Drawer content goes here */}
      </Drawer>

      {pathname === "/vistas/adopciones" && !isFilterDrawerOpened && (
        <Button
          variant="gradient"
          onClick={() => setFilterDrawerOpened(true)}
          aria-label="Abrir filtros"
          style={{
            position: "fixed",
            bottom: 20,
            right: 20,
            zIndex: 1000,
          }}
        >
          <IconFilter size={20} stroke={1.5} /> Filtros
        </Button>
      )}
    </AppShell>
  );
}
