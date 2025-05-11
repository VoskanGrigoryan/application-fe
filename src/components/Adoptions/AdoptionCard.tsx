"use client";

import { Badge, Card, Grid, Group, Image, Text } from "@mantine/core";
import classes from "./AdoptionCard.module.css";
import { useRouter } from "next/navigation";
import MyButton from "../generic/button";

const mockdata = {
  image:
    "https://scontent.faep24-1.fna.fbcdn.net/v/t39.30808-6/483103709_1052712016885188_8609548574706359961_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_ohc=FJ_bOo1z9QcQ7kNvwFAQbr0&_nc_oc=AdmApujd2Qg-c7pYTaqy5VWMh-vckR5lSY-d3mR0sd1dZ6F_vVDN85oMSiYjPqFET3c&_nc_zt=23&_nc_ht=scontent.faep24-1.fna&_nc_gid=4o63X-Kzj_uSm6aCvRk-jw&oh=00_AfJSQ3PE3JiivxxeyulMYiWzUCuk-K9b0nN27-7l1CdHFQ&oe=682379A0",
  title: "Mustag",
  country: "Perro adulto",
  description:
    "Mustag tiene dos años aproximadamente, es super cariñoso, se lleva bien con las personas pero no con los perros. Esta vacunado y castrado",
  badges: [
    { label: "Amistoso", color: "green" },
    { label: "Jugueton", color: "orange" },
    { label: "Le gustan los niños", color: "yellow" },
    { label: "Dormilon", color: "indigo" },
    { label: "Castrado", color: "red" },
  ],
};

export default function AdoptionCard() {
  const router = useRouter();

  const { image, title, description, country, badges } = mockdata;

  const features = badges.map(({ color, label }) => (
    <Badge variant="filled" color={color} key={label}>
      {label}
    </Badge>
  ));

  const potato = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <Grid>
      {potato.map((index: number) => {
        return (
          <Grid.Col span={{ base: 12, md: 6, lg: 4, xl: 3 }} key={index}>
            <Card withBorder radius="md" p="md" className={classes.card}>
              <Card.Section>
                <Image src={image} alt={title} className={classes.image} />
              </Card.Section>

              <Card.Section className={classes.section} mt="md">
                <Group justify="apart">
                  <Text fz="lg" fw={500}>
                    {title}
                  </Text>
                  <Badge size="sm" variant="light">
                    {country}
                  </Badge>
                </Group>
                <Text fz="sm" mt="xs">
                  {description}
                </Text>
              </Card.Section>

              <Card.Section className={classes.section}>
                <Group gap={7} mt={"sm"}>
                  {features}
                </Group>
              </Card.Section>

              <Group mt="xs">
                <MyButton
                  variant="light"
                  style={{ flex: 1 }}
                  onClick={() => {
                    router.push(`/vistas/adopciones/detalle/${index}`);
                  }}
                >
                  Saber mas
                </MyButton>
              </Group>
            </Card>
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
