"use client";

import MyPaper from "@/src/components/generic/paper";
import { Grid, Title } from "@mantine/core";
import { IconCat, IconDog, IconHome, IconPaw } from "@tabler/icons-react";
import styles from "./Home.module.css";

const MenuOptions = [
  { title: "Perro", icon: IconDog },
  { title: "Gato", icon: IconCat },
  { title: "Otro", icon: IconPaw },
  { title: "Refugios", icon: IconHome },
];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.bgImage}></div>
      <div className={styles.bgLine}></div>
      <Grid className={styles.grid}>
        <Grid.Col span={12}>
          <div className={styles.headerBox}>
            <Title order={1} c="white" fw={500}>
              Encontrá a tu nuevo mejor amigo
            </Title>
          </div>
        </Grid.Col>
        {MenuOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Grid.Col span={{ base: 6, md: 3, lg: 3 }} key={option.title}>
              <MyPaper className={styles.paper}>
                <Icon
                  size={76}
                  color="var(--mantine-color-green-5)"
                  strokeWidth={1}
                />

                <Title order={4} c="green" fw={400}>
                  {option.title}
                </Title>
              </MyPaper>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
