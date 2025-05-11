import { Paper, Text, Title, UnstyledButton } from "@mantine/core";
import { IconCalendarOff } from "@tabler/icons-react";
import classes from "./Styles.module.css";

export default function EventosCercanos() {
  return (
    <Paper
      shadow="sm"
      radius="md"
      withBorder
      p="lg"
      style={{
        marginTop: 28,
      }}
    >
      <div className={classes.paperContainer}>
        <UnstyledButton component="a" href="#">
          <IconCalendarOff stroke={1.5} className={classes.icon} />
        </UnstyledButton>
        <Text size="md">No hay eventos proximos</Text>
      </div>
    </Paper>
  );
}
