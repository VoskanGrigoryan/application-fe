"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";
import classes from "@/src/styles/NotFound.module.css";

export default function NotFound() {
  const router = useRouter();
  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Direccion no encontrata</Title>
          <Text
            c="dimmed"
            size="lg"
            ta="center"
            className={classes.description}
          >
            La pagina que estas tratando de visitar no existe o ha sido movida.
            Comprueba la URL o vuelve a la página de inicio.
          </Text>
          <Group justify="center">
            <Button size="md" onClick={() => router.push("/")}>
              Volver a inicio
            </Button>
          </Group>
        </div>
      </div>
    </Container>
  );
}
