"use client";

import { BaseShell } from "../../../src/layout/HomeLayout/Shell";
import { Grid, Modal, Select, Stack } from "@mantine/core";
import classes from "./Adoption.module.css";
import { IconAdjustmentsHorizontal } from "@tabler/icons-react";
import MyButton from "@/src/components/generic/button";
import AdoptionCard from "./adoptionCard";
import { useDisclosure } from "@mantine/hooks";

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
          labelProps={{
            style: { color: "var(--mantine-color-secondary-8)" },
          }}
          placeholder={opt.placeholder}
          data={opt.data}
          searchable={opt.searchable}
        />
      ))}
    </>
  );
};

const AdoptionPage = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <BaseShell>
      <Modal opened={opened} onClose={close} title="Filtros">
        <FilterForm />
      </Modal>
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
                <MyButton
                  className={classes.mobileOnly}
                  color="violet"
                  fullWidth
                  onClick={open}
                >
                  <IconAdjustmentsHorizontal size={20} strokeWidth={2} />
                  Filtros
                </MyButton>
              </Grid.Col>
            </Grid>
            <Grid className={classes.adoptionGrid}>
              <AdoptionCard />
            </Grid>
          </Stack>
        </Grid.Col>
      </Grid>
    </BaseShell>
  );
};

export default AdoptionPage;
