"use client";

import { Button, Container, Group, Text, Title } from "@mantine/core";
import classes from "../src/styles/Error.module.css";

export default function Error() {
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.label}>500</div>
        <Title className={classes.title}>Ups, sucedió algo malo...</Title>
        <Text size="lg" ta="center" className={classes.description}>
          Hubo un algun error en el servidor. Por favor, intentalo de nuevo más
          tarde.
        </Text>
        <Group justify="center">
          <Button variant="white" size="md">
            Refrescar la pagina
          </Button>
        </Group>
      </Container>
    </div>
  );
}
