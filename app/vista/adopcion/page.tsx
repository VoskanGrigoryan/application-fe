"use client";

import { BaseShell } from "../../../src/layout/HomeLayout/Shell";
import { Grid, Select, Stack, Text } from "@mantine/core";
import classes from "./Adoption.module.css";
import MyPaper from "@/src/components/generic/paper";
import Image from "next/image";
import { IconAdjustmentsHorizontal, IconVenus } from "@tabler/icons-react";
import MyButton from "@/src/components/generic/button";

const filterOptions = [
  {
    label: "Raza",
    placeholder: "Cualquiera",
    searchable: true,
    data: ["React", "Angular", "Vue", "Svelte"],
  },
  {
    label: "Edad",
    placeholder: "Cualquiera",
    data: ["Cachorro", "Joven", "Adulto", "Mayor"],
  },
  {
    label: "Tamaño",
    placeholder: "Cualquiera",
    data: ["Pequeño", "Mediano", "Grande", "Muy grande"],
  },
  { label: "Sexo", placeholder: "Cualquiera", data: ["Macho", "Hembra"] },
  {
    label: "Largo de pelo",
    placeholder: "Cualquiera",
    data: ["Corto", "Mediano", "Largo", "Rulos"],
  },
  {
    label: "Color",
    placeholder: "Cualquiera",
    data: ["Negro", "Dorado", "Blanco", "Con manchas", "Atigrado", "Otro"],
  },
  { label: "Refugio", placeholder: "Cualquiera", data: ["Otro"] },
];

const FilterForm = () => {
  return (
    <>
      {filterOptions.map((opt) => (
        <Select
          mb={"sm"}
          key={opt.label}
          label={opt.label}
          placeholder={opt.placeholder}
          data={opt.data}
          searchable={opt.searchable}
        />
      ))}
    </>
  );
};

const AdoptionPage = () => {
  return (
    <BaseShell>
      <Grid style={{ marginTop: 20 }}>
        <Grid.Col
          span={{ base: 12, md: 3, lg: 3 }}
          className={classes.filterContainer}
        >
          <FilterForm />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 9, lg: 9 }}>
          <Stack h={"auto"} gap="xs">
            <Grid>
              <Grid.Col span={{ base: 6, md: 2.5, lg: 2.5 }}>
                <Select
                  label={"Ordenar"}
                  placeholder={"Cercano a mi"}
                  data={[
                    "Cercano a mi",
                    "Más reciente",
                    "Más antiguo",
                    "Más adoptados",
                  ]}
                />
              </Grid.Col>
              <Grid.Col
                span={{ base: 6, md: 2.5, lg: 2.5 }}
                style={{ paddingTop: 32 }}
              >
                <MyButton className={classes.mobileOnly} color="violet" fullWidth>
                  <IconAdjustmentsHorizontal size={20} strokeWidth={2} />
                  Filtros
                </MyButton>
              </Grid.Col>
            </Grid>
            <Grid className={classes.adoptionGrid}>
              <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 2.5 }}>
                <MyPaper p={0} className={classes.adoptionCard}>
                  <div className={classes.imageContainer}>
                    <Image
                      src="https://placedog.net/280/280?random"
                      alt="Profile"
                      fill
                      style={{
                        objectFit: "cover",
                      }}
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,..."
                    />
                  </div>

                  <Stack p={8} gap={0} align="center" justify="center">
                    <Text
                      fw={500}
                      size="lg"
                      c={"violet"}
                      style={{ display: "flex", alignItems: "center", gap: 3 }}
                    >
                      Hanna
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "flex-end",
                          position: "relative",
                        }}
                      >
                        <IconVenus
                          size={22}
                          color="var(--mantine-color-pink-5)"
                          strokeWidth={2}
                        />
                      </span>
                    </Text>
                    <Stack gap={0} align="center" justify="center">
                      <Text size="md">Cachorro • Mixto</Text>
                      <Text size="md">7km distancia</Text>
                    </Stack>
                  </Stack>
                </MyPaper>
              </Grid.Col>
            </Grid>
          </Stack>
        </Grid.Col>
      </Grid>
    </BaseShell>
  );
};

export default AdoptionPage;
