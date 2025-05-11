"use client";

import { AppShell, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import classes from "./css/AppShell.module.css";
import { IconFilter } from "@tabler/icons-react";
import { useUiStore } from "@/src/stores/useUIStore";
import { usePathname } from "next/navigation";
import AdoptionFilters from "@/src/components/adoptions/AdoptionFilters";
import MyButton from "@/src/components/generic/button";
import useIsMobile from "@/src/hooks/useIsMobile";

export function BaseShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const [opened, { toggle }] = useDisclosure();

  const isFilterDrawerOpened = useUiStore(
    (state) => state.isFilterDrawerOpened
  );
  const setFilterDrawerOpened = useUiStore(
    (state) => state.setFilterDrawerOpened
  );

  const condicionMobileFilterButton =
    pathname === "/vistas/adopciones" && !isFilterDrawerOpened && isMobile;

  return (
    <AppShell
      className={classes.AppShellMain}
      header={{ height: 64 }}
      navbar={{ width: 220, breakpoint: "sm", collapsed: { mobile: !opened } }}
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
      <AppShell.Main
        style={{
          width: isMobile ? "100%" : "calc(100vw - 220px)",
          marginLeft: isMobile ? 0 : 220,
          minHeight: "100vh",
          padding: 44,
          paddingTop: "90px",
          backgroundColor: "#f8f9fa",
        }}
      >
        {children}
      </AppShell.Main>

      {/* Eventos esperan recibir una funcion, no el resultado de esta */}
      <Drawer
        position="left"
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
            maxHeight: "100vh",
            overflowY: "auto",
          },
        }}
      >
        <AdoptionFilters />
      </Drawer>

      {condicionMobileFilterButton && (
        <MyButton
          onClick={() => {
            setFilterDrawerOpened(true);
          }}
          className={classes.MobileFilterButton}
        >
          <IconFilter size={24} stroke={1.5} /> Filtros
        </MyButton>
      )}
    </AppShell>
  );
}
