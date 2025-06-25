"use client";

import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import classes from "./Register.module.css";
import { Grid, Stack, Text, Title } from "@mantine/core";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useRegisterWizard } from "@/src/stores/registerWizardStore";

const TextForEachStep = [
  {
    title: "Primero elegí si te interesa adoptar o dar en adopción",
    subtitle:
      "No te preocupes, aunque eligas la opción de refugio vas a poder adoptar igual 😁",
  },
  {
    title: "Información personal",
    subtitle:
      "No te preocupes, despues los podemos modificar en caso de que quieras 😊",
  },
  {
    title: "Información del refugio",
    subtitle:
      "Despues podemos modificar estos datos pero tené en cuenta que van a ser controlados para evitar fraudes 😥",
  },
];

export default function RegisterView() {
  const step = useRegisterWizard((state) => state.step);
  const setStep = useRegisterWizard((state) => state.setStep);

  const tipoDeCuenta = useRegisterWizard((state) => state.tipoDeCuenta);
  const setTipoDeCuenta = useRegisterWizard((state) => state.setTipoDeCuenta);

  // const formData = useRegisterWizard((state) => state.formData);

  const currentText = TextForEachStep[step];
  const steps = [
    <StepOne />,
    <StepTwo
      step={step}
      setStep={setStep}
      tipoDeCuenta={tipoDeCuenta}
      setTipoDeCuenta={setTipoDeCuenta}
    />,
    <StepThree step={step}
      setStep={setStep}
      tipoDeCuenta={tipoDeCuenta}
      setTipoDeCuenta={setTipoDeCuenta}/>,
  ];

  return (
    <BaseShell>
      <Grid gutter={0}>
        <Grid.Col
          p={0}
          m={0}
          span={{ base: 12, md: 3, lg: 3, xl: 3 }}
          className={classes.informationPanelLeft}
        >
          <Stack p={24} pt={30}>
            <Title c={"white"} fw={400} order={1} textWrap="balance">
              {currentText.title}
            </Title>
            <Text fw={600} c="white" fz={20}>
              {currentText.subtitle}
            </Text>
          </Stack>

          <div className={classes.footerPanelLeft}>
            <Title>Paso {step + 1}</Title>
          </div>
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 9, lg: 9, xl: 9 }}>
          {steps[step]}
        </Grid.Col>
      </Grid>
    </BaseShell>
  );
}
