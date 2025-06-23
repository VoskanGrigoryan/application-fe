"use client";

import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import * as motion from "motion/react-client";
import classes from "./Register.module.css";
import { Text, Title } from "@mantine/core";

import userBlock from "../../../../public/userAdoptionBlock.jpg";
import shelterBlock from "../../../../public/shelterBlock.jpg";

const animatedProps = {
  transition: {
    duration: 1,
    scale: {
      type: "spring" as const,
      duration: 1,
      bounce: 0.4,
    },
  },
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const StepOne = () => {
  return (
    <div className={classes.stepOneContainer}>
      <motion.div
        className={classes.blockCard}
        {...animatedProps}
        style={{ backgroundImage: `url(${userBlock.src})` }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <Title order={2}>Quiero adoptar</Title>
          <Text size="sm">
            Si lo que querés es adoptar un compañero de vida, esta es la opción
            correcta.
          </Text>
        </div>
        <div className={classes.motionAlgo} />
      </motion.div>

      <motion.div
        className={classes.blockCard}
        {...animatedProps}
        style={{ backgroundImage: `url(${shelterBlock.src})` }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <Title order={2}>Soy un refugio</Title>
          <Text size="sm">
            Si lo que querés es dar en adopción animalitos, esta es tu opción.
          </Text>
        </div>
        <div className={classes.motionAlgo} />
      </motion.div>
    </div>
  );
};

export default function RegisterView() {
  return (
    <BaseShell>
      <div className={classes.containerRegister}>
        <Title
          c={"secondary"}
          order={1}
          fw={500}
          textWrap="balance"
        >
          Para seguir primero elegí si te interesa adoptar o dar en adopción
        </Title>
        <Text fw={600} c="dimmed">
          No te preocupes, aunque eligas la opción de refugio vas a poder
          adoptar igual 😁
        </Text>
        <StepOne />
      </div>
    </BaseShell>
  );
}
