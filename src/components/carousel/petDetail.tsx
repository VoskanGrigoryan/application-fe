import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import "@mantine/carousel/styles.css";

export default function PetDetailCarousel() {
  return (
    <Carousel
      withIndicators
      height={400}
      slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
      slideGap={{ base: 0, sm: "md", align: "center" }}
      align="start"
      dragFree={false}
      loop
    >
      <Carousel.Slide>
        <Image
          src="https://placedog.net/640/640?r"
          alt="Profile"
          fill
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="https://placedog.net/640/640?r"
          alt="Profile"
          fill
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="https://placedog.net/640/640?r"
          alt="Profile"
          fill
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="https://placedog.net/640/640?r"
          alt="Profile"
          fill
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src="https://placedog.net/640/640?r"
          alt="Profile"
          fill
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL="data:image/png;base64,..."
        />
      </Carousel.Slide>
    </Carousel>
  );
}
