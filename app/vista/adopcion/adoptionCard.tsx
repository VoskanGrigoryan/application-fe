import MyPaper from "@/src/components/generic/paper";
import { Grid, Stack, Text } from "@mantine/core";
import { IconVenus } from "@tabler/icons-react";
import Image from "next/image";
import classes from "./Adoption.module.css";
import { useRouter } from "next/navigation";

const AdoptionCard = () => {
  const router = useRouter();
  const petId = "1"; // Replace with the actual pet id

  return (
    <Grid.Col span={{ base: 12, md: 6, lg: 3, xl: 2.5 }}>
      <MyPaper
        p={0}
        className={classes.adoptionCard}
        onClick={() => router.push(`/vista/adopcion/${petId}`)}
      >
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
        <div className={classes.violetLine} />

        <Stack p={8} gap={0} align="center" justify="center">
          <Text
            fw={700}
            size="xl"
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
            <Text size="md" c={"dimmed"}>
              7km distancia
            </Text>
          </Stack>
        </Stack>
      </MyPaper>
    </Grid.Col>
  );
};

export default AdoptionCard;
