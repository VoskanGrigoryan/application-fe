"use client";

import MyPaper from "@/src/components/generic/paper";
import { Grid, Title } from "@mantine/core";
import { IconCat, IconDog, IconHome, IconPaw } from "@tabler/icons-react";
import styles from "./Home.module.css";
import * as motion from "motion/react-client";

const MenuOptions = [
  { title: "Perro", icon: IconDog },
  { title: "Gato", icon: IconCat },
  { title: "Otro", icon: IconPaw },
  { title: "Refugios", icon: IconHome },
];

const animatedProps = {
  transition: {
    duration: 1,
    scale: {
      type: "spring" as const,
      duration: 1,
      bounce: 0.3,
    },
  },
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.bgImage}></div>
      <div className={styles.bgLine}></div>
      <Grid className={styles.grid}>
        <Grid.Col span={12}>
          <div className={styles.headerBox}>
            <Title order={1} fw={500} className={styles.headerTitle}>
              Encontrá a tu nuevo mejor amigo
            </Title>
          </div>
        </Grid.Col>
        {MenuOptions.map((option) => {
          const Icon = option.icon;
          return (
            <Grid.Col span={{ base: 6, md: 3, lg: 3 }} key={option.title}>
              <motion.div
                {...animatedProps}
                whileHover={{ scale: .95 }}
                whileTap={{ scale: 0.8 }}
              >
                <MyPaper className={styles.paper}>
                  <Icon
                    size={76}
                    color="var(--mantine-color-primary-5)"
                    strokeWidth={1}
                  />

                  <Title order={4} c="green" fw={400}>
                    {option.title}
                  </Title>
                </MyPaper>
              </motion.div>
            </Grid.Col>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
