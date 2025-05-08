import { Avatar, Group, Text, UnstyledButton } from "@mantine/core";
import classes from "./css/Footer.module.css";
import { IconChevronRight } from "@tabler/icons-react";

export function Footer() {
  return (
    <div className={classes.footer}>
      <UnstyledButton className={classes.user}>
        <Group>
          {/* <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
            radius="xl"
            size="sm"
          /> */}

          <Avatar radius="xl" />
          <div style={{ flex: 1 }}>
            {/* <Text size="sm" fw={500}>
              Harriette Spoonlicker
            </Text>
            <Text c="dimmed" size="xs">
              hspoonlicker@outlook.com
            </Text> */}

            <Text size="sm">Iniciar sesión</Text>
          </div>
          <IconChevronRight size={14} stroke={1.5} />
        </Group>
      </UnstyledButton>
    </div>
  );
}
