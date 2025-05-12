"use client";

import { Badge, Divider, Grid, Group, Image, Text } from "@mantine/core";
import MyPaper from "../generic/paper";
import { IconGenderMale, IconPencil } from "@tabler/icons-react";
import MyButton from "../generic/button";

const badges = [
  { label: "Amistoso", color: "green" },
  { label: "Jugueton", color: "orange" },
  { label: "Le gustan los niños", color: "yellow" },
  { label: "Dormilon", color: "indigo" },
  { label: "Castrado", color: "red" },
];

const BasicPetInfo = () => {
  const features = badges.map(({ color, label }) => (
    <Badge variant="filled" color={color} key={label} style={{ margin: 2 }}>
      {label}
    </Badge>
  ));

  return (
    <Grid>
      <Grid.Col>
        <Divider my="md" label="Quien soy" labelPosition="left" />
        <Group justify="apart">
          <Text size="xl" fw={900}>
            Mustag
          </Text>
          <Badge color="blue" variant="light" style={{ marginTop: 4 }}>
            perro adulto
          </Badge>
          <Badge color="blue" variant="light" style={{ marginTop: 4 }}>
            <Group>
              <Text size="xs" fw={700}>
                Macho
              </Text>
              <IconGenderMale size={"20"} />
            </Group>
          </Badge>
        </Group>
      </Grid.Col>
      <Grid.Col>
        <Divider my="md" label="Un poco sobre mi" labelPosition="left" />
        <Text size="md">
          Mustag tiene dos años aproximadamentee, es super cariñoso y se lleva
          bien con las personas pero no tanto con otros perros. Esta bien
          adiestrado y no hace sus necesidades dentro de casa.
        </Text>
      </Grid.Col>
      <Grid.Col>
        <Divider my="md" label="Caracteristicas" labelPosition="left" />
        {features}
      </Grid.Col>
    </Grid>
  );
};

const BasicOwnerInfo = () => {
  return (
    <Grid>
      <Grid.Col>
        <Divider my="md" label="Datos de contacto" labelPosition="left" />
        <Group justify="apart">
          <Text size="md">Nombre</Text>
          <Text fw={700}>Pedro Picapiedra</Text>
        </Group>
      </Grid.Col>
      <Grid.Col>
        <Group justify="apart">
          <Text size="md">Refugio</Text>
          <Text fw={700}>El refugio de Lourdes</Text>
        </Group>
      </Grid.Col>
      <Grid.Col>
        <Group justify="apart">
          <Text size="md">Ubicacion</Text>
          <Text fw={700}>Caballito, Capital Federal</Text>
        </Group>
      </Grid.Col>
      <Grid.Col>
        <Group justify="apart">
          <Text size="md">Número de telefono</Text>
          <Text fw={700}>+54 11 23880208</Text>
        </Group>
      </Grid.Col>
      <Grid.Col>
        <Group justify="apart">
          <Text size="md">Horarios</Text>
          <Text fw={700}>9AM - 6PM</Text>
        </Group>
      </Grid.Col>
      <Grid.Col>
        <Group justify="apart">
          <Text size="md">Pagina web / Sociales</Text>
        </Group>
      </Grid.Col>
      <Grid.Col>
        <Divider my="md" label="Acciones" labelPosition="left" />
        <MyButton rightSection={<IconPencil size={14} />}>
          Llenar formulario para adopcion
        </MyButton>
      </Grid.Col>
    </Grid>
  );
};

export default function AdoptionDetail() {
  return (
    <MyPaper>
      <Grid gutter={24}>
        <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 3 }}>
          <Image
            width={100}
            height={100}
            src={
              "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/483103709_1052712016885188_8609548574706359961_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FJ_bOo1z9QcQ7kNvwFAQbr0&_nc_oc=AdmApujd2Qg-c7pYTaqy5VWMh-vckR5lSY-d3mR0sd1dZ6F_vVDN85oMSiYjPqFET3c&_nc_zt=23&_nc_ht=scontent.faep24-1.fna&_nc_gid=4o63X-Kzj_uSm6aCvRk-jw&oh=00_AfJSQ3PE3JiivxxeyulMYiWzUCuk-K9b0nN27-7l1CdHFQ&oe=682379A0"
            }
            alt="mascota"
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 5, xl: 5 }}>
          <BasicPetInfo />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 3 }}>
          <BasicOwnerInfo />
        </Grid.Col>
      </Grid>
    </MyPaper>
  );
}
