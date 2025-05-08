"use client";

import React from "react";
import { Button, Paper, Text, Title } from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import classes from "./Slider.module.css";

interface CardProps {
  image: string;
  title: string;
  type: string;
}

function Card({ image, title, type }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {type}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="primary" color="dark" className={classes.saberMasButton}>
        Saber más
      </Button>
    </Paper>
  );
}

const HomeSlider = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const carousel = (
    <Carousel
      withIndicators
      height="400"
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      slideGap={{ base: 0, sm: "md" }}
      loop
      align="start"
    >
      {images.map((image) => (
        <Carousel.Slide key={image.title} className={classes.fullSlide}>
          <Card {...image} />
        </Carousel.Slide>
      ))}
    </Carousel>
  );

  if (isMobile) {
    return carousel;
  }

  return (
    <Paper
      shadow="sm"
      radius="md"
      withBorder
      p="lg"
      className={`${classes.adopciones_destacadas} ${classes.responsivePaper}`}
    >
      <Title order={3} className={classes.title}>
        Adopciones destacadas
      </Title>
      <div>{carousel}</div>
    </Paper>
  );
};

export default HomeSlider;

const images = [
  {
    image:
      "https://animatch.ca/cdn/shop/files/20241127-adoptions-fic-02_1.jpg?v=1735854937&width=800",
    title: "duke",
    type: "perrito",
  },
  {
    image:
      "https://assets3.thrillist.com/v1/image/3158061/792x1056/scale;webp=auto;jpeg_quality=60.jpg",
    title: "Tito",
    type: "perrito",
  },
  {
    image:
      "https://www.austintexas.gov/sites/default/files/2024-08/wishbone.jpeg",
    title: "Marquitos",
    type: "perrito",
  },
  {
    image:
      "https://www.fearfreehappyhomes.com/wp-content/uploads/2020/08/shutterstock_594021170.jpg",
    title: "Perry y Zoe",
    type: "gatitos",
  },
];
