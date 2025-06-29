import userBlock from "../../../../public/userAdoptionBlock.jpg";
import shelterBlock from "../../../../public/shelterBlock.jpg";
import { Text, Title } from "@mantine/core";
import * as motion from "motion/react-client";
import classes from "./Register.module.css";
import { useRegisterWizard } from "@/src/zustand/registerWizardStore";

const animatedProps = {
  transition: {
    duration: 1,
    scale: {
      type: "spring" as const,
      duration: 0.7,
      bounce: 0.2,
    },
  },
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

//Step 0
const StepOne = () => {
  const setStep = useRegisterWizard((state) => state.setStep);
  const setTipoDeCuenta = useRegisterWizard((state) => state.setTipoDeCuenta);

  return (
    <div className={classes.stepOneContainer}>
      <motion.div
        onClick={() => {
          setStep?.(1), setTipoDeCuenta?.(0);
        }}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        className={classes.blockCard}
        {...animatedProps}
        style={{ backgroundImage: `url(${userBlock.src})` }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <Title order={1}>Quiero adoptar</Title>
          <Text size="md" fw={700}>
            Si lo que querés es adoptar un compañero de vida, esta es la opción
            correcta.
          </Text>
        </div>
        <div className={classes.motionAlgo} />
      </motion.div>

      <motion.div
        onClick={() => {
          setStep?.(1), setTipoDeCuenta?.(1);
        }}
        whileHover={{ scale: 0.95 }}
        whileTap={{ scale: 0.9 }}
        className={classes.blockCard}
        {...animatedProps}
        style={{ backgroundImage: `url(${shelterBlock.src})` }}
      >
        <div style={{ position: "relative", zIndex: 1 }}>
          <Title order={1}>Quiero dar en adopción</Title>
          <Text size="md" fw={700}>
            Si queres darle visibilidad a tu refugio y a sus residentes esta es
            tu opción.
          </Text>
        </div>
        <div className={classes.motionAlgo} />
      </motion.div>
    </div>
  );
};

export default StepOne;
