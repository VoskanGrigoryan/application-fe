"use client";

import React from "react";
import { Badge, Group, Text, Card, Image } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import classes from "./Slider.module.css";
import MyButton from "../generic/button";
import useIsMobile from "@/src/hooks/useIsMobile";
import MyPaper from "../generic/paper";

interface CardProps {
  image: string;
  title: string;
  type: string;
  descripcionCorta: string;
}

function CustomCard({ image, title, type, descripcionCorta }: CardProps) {
  return (
    <Card
      shadow="lg"
      padding="md"
      radius="md"
      withBorder
      className={classes.cardRoot}
    >
      <Card.Section style={{ overflow: "hidden" }}>
        <Image
          src={image}
          alt={title}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </Card.Section>

      <div className={classes.cardContent}>
        <div>
          <Group justify="space-between" mt="sm" mb="xs">
            <Text fw={500}>{title}</Text>
            <Badge color="green">{type}</Badge>
          </Group>

          <Text size="sm" c="dimmed">
            {descripcionCorta}
          </Text>
        </div>

        <MyButton mt="md">Saber más</MyButton>
      </div>
    </Card>
  );
}

const HomeSlider = () => {
  const isMobile = useIsMobile();

  const carousel = (
    <Carousel
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%", lg: "25%" }}
      slideGap={{ base: 0, sm: "md" }}
      loop
      withIndicators={false}
      align="start"
    >
      {images.map((image) => (
        <Carousel.Slide key={image.title}>
          <CustomCard {...image} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  const content = <>{carousel}</>;

  return isMobile ? <div>{content}</div> : <MyPaper p="md">{content}</MyPaper>;
};

export default HomeSlider;

const images = [
  {
    image:
      "https://animatch.ca/cdn/shop/files/20241127-adoptions-fic-02_1.jpg?v=1735854937&width=800",
    title: "duke",
    type: "perrito",
    descripcionCorta: "Bla bla bla blablablabla",
  },
  {
    image:
      "https://assets3.thrillist.com/v1/image/3158061/792x1056/scale;webp=auto;jpeg_quality=60.jpg",
    title: "Tito",
    type: "perrito",
    descripcionCorta: "Le gustan las gordas",
  },
  {
    image:
      "https://www.austintexas.gov/sites/default/files/2024-08/wishbone.jpeg",
    title: "Marquitos",
    type: "perrito",
    descripcionCorta: "Es jugueton y se lleva super bien con otros perros",
  },
  {
    image:
      "https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/shutterstock_594021170.jpg",
    title: "Perry y Zoe",
    type: "gatitos",
    descripcionCorta: "Prisioneros de guerra Libaneses",
  },
  {
    image:
      "https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/shutterstock_594021170.jpg",
    title: "Perry y Zoe 2",
    type: "gatitos",
    descripcionCorta: "Prisioneros de guerra Libaneses",
  },
];
