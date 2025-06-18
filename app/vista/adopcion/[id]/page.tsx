"use client";

import MyPaper from "@/src/components/generic/paper";
import { BaseShell } from "@/src/layout/HomeLayout/Shell";
import classes from "./AdoptionDetail.module.css";
import {
  Anchor,
  Divider,
  Grid,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import MyButton from "@/src/components/generic/button";
import { IconMail, IconMapPin, IconPhone } from "@tabler/icons-react";
import PetDetailCarousel from "@/src/components/carousel/petDetail";

const fontSizes = {
  text: { base: "xs", sm: "sm", md: "md", lg: "lg" },
  title: { base: 18, sm: 22, md: 28, lg: 36 },
};

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <Title order={2} fz={fontSizes.title} fw={400}>
    {children}
  </Title>
);

const TextBlock = ({ label, value }: { label: string; value: string }) => (
  <div>
    <Text tt="uppercase" fw={500} fz={fontSizes.text}>
      {label}
    </Text>
    <Text fz={fontSizes.text}>{value}</Text>
  </div>
);

const BulletRow = ({ items }: { items: (string | React.ReactNode)[] }) => (
  <Text tt="capitalize" fz={fontSizes.text}>
    {items.map((item, i) => (
      <span key={i}>
        {item}
        {i < items.length - 1 && <span style={{ padding: "0 8px" }}>•</span>}
      </span>
    ))}
  </Text>
);

const IconLine = ({
  icon: Icon,
  children,
}: {
  icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <Group gap="xs" align="center">
    <Icon strokeWidth={1.5} />
    {children}
  </Group>
);

const PetDetailsPaper = () => {
  const data = {
    name: "Pepito",
    age: "Adulto",
    sex: "Macho",
    size: "Mediano",
    color: ["Negro", "Blanco", "Atigrado"],
  };

  return (
    <MyPaper className={classes.myPaperResponsive}>
      <Stack gap="md">
        <Title order={1} fz={fontSizes.title} fw={400}>
          {data.name}
        </Title>
        <Text fz={fontSizes.text}>Mestizo • Capital Federal</Text>
        <Divider my="1" />
        <BulletRow
          items={[data.age, data.sex, data.size, data.color.join(" / ")]}
        />
        <Divider my="1" />

        <SectionTitle>Info</SectionTitle>
        <TextBlock label="Caracteristicas" value="Juguetón, activo, cariñoso" />
        <TextBlock label="Pelo" value="Corto" />
        <TextBlock label="Salud" value="Vacunado al día, castrado" />
        <TextBlock label="Se lleva bien con" value="Niños" />
        <TextBlock label="No se lleva bien con" value="Otros perros o gatos" />

        <Divider my="1" />

        <SectionTitle>Conocé a {data.name}</SectionTitle>
        <Text fz={fontSizes.text}>
          Monstruo es un perro extremadamente cariñoso que adora la atención de
          las personas. Su actividad favorita es jugar con juguetes que hacen
          ruido ¡y puedes escucharlo todo el día en su canil! Cuando no está
          jugando, suele acomodar sus mantas para una siesta cómoda. Se lleva
          muy bien con las personas, pero lo ideal sería que viva en un hogar
          sin otros animales.
        </Text>
      </Stack>
    </MyPaper>
  );
};

const PetAdoptionFormAndFAQ = () => (
  <Stack>
    <MyPaper
      style={{
        backgroundColor: "var(--mantine-color-secondary-6)",
        justifyContent: "center",
        display: "flex",
        color: "white",
      }}
    >
      <Stack justify="center" align="center">
        <Grid>
          <Grid.Col>
            <Text size="xl" ta="center" fz={fontSizes.text}>
              ¿Estás pensando en adoptar a Monstruo?
            </Text>
          </Grid.Col>
          <Grid.Col span={{ base: 12 }} className={classes.mobileButtonCol}>
            <MyButton variant="white" fullWidth radius="lg">
              Llená el formulario de adopción
            </MyButton>
          </Grid.Col>
          <Grid.Col span={{ base: 12 }} className={classes.mobileButtonCol}>
            <MyButton variant="white" fullWidth radius="lg">
              Saber más acerca de Monstruo
            </MyButton>
          </Grid.Col>
        </Grid>
      </Stack>
    </MyPaper>
    <ShelterInfoPaper />
  </Stack>
);

const ShelterInfoPaper = () => (
  <MyPaper>
    <Stack gap="md">
      <SectionTitle>Centro de adopción Imaginario</SectionTitle>
      <Text fz={fontSizes.text}>Capital Federal, Buenos Aires</Text>
      <IconLine icon={IconMapPin}>
        <Text  fz={fontSizes.text}>Avenida No Existo 705</Text>
      </IconLine>
      <Divider my="0" />
      <IconLine icon={IconMail}>
        <Anchor href="mailto:refugio.falso@gmail.com" fw={700}  fz={fontSizes.text}>
          refugio.falso@gmail.com
        </Anchor>
      </IconLine>
      <Divider my="0" />
      <IconLine icon={IconPhone}>
        <Anchor href="tel:+541123456789" fw={700}  fz={fontSizes.text}>
          (+54) 9 11 3245-4366
        </Anchor>
      </IconLine>
      <Divider my="0" />
      <MyButton variant="outline">Más sobre nosotros</MyButton>
    </Stack>
  </MyPaper>
);

const PetDetailView = () => (
  <BaseShell className={classes.adoptionDetailContainer}>
    <Grid>
      <Grid.Col >
        <PetDetailCarousel />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 8 }}>
        <PetDetailsPaper />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 4 }}>
        <PetAdoptionFormAndFAQ />
      </Grid.Col>
    </Grid>
  </BaseShell>
);

export default PetDetailView;
