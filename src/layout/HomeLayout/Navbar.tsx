"use client";

import { useRouter } from "next/navigation";
import { ScrollArea, Text, UnstyledButton } from "@mantine/core";
import classes from "./css/Navbar.module.css";
import {
  IconHome,
  IconCat,
  IconInfoCircle,
  IconContract,
  IconCalendarEvent,
} from "@tabler/icons-react";
import { Footer } from "./Footer";
import { useTransition } from "react";

const mockdata = [
  { label: "Inicio", icon: IconHome, url: "/" },
  { label: "Adoptar", icon: IconCat, url: "/vistas/adopciones" },
  { label: "Eventos", icon: IconCalendarEvent, url: "/vistas/eventos" },
  { label: "Nosotros", icon: IconInfoCircle, url: "/potato" },
  { label: "Contacto", icon: IconContract, url: "/potato" },
];

export function Navbar({ toggle }: { toggle: () => void }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const links = mockdata.map((item) => {
    const Icon = item.icon;
    return (
      <UnstyledButton
        component="a"
        href="#"
        className={classes.link}
        key={item.label}
        onClick={() => {
          startTransition(() => {
            router.push(item.url);
            toggle();
          });
        }}
      >
        <Icon className={classes.linkIcon} stroke={1.5} />
        <Text size="sm">{item.label}</Text>
      </UnstyledButton>
    );
  });

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
      <Footer />
    </nav>
  );
}
