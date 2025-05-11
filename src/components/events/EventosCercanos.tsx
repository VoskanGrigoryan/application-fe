import { Text, UnstyledButton } from "@mantine/core";
import { IconCalendarOff } from "@tabler/icons-react";
import classes from "./Styles.module.css";
import MyPaper from "../generic/paper";

export default function EventosCercanos() {
  return (
    <MyPaper
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
    </MyPaper>
  );
}
