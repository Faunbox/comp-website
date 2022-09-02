import Image from "next/image";
import { Container, Grid, Text } from "@nextui-org/react";

const HeroSection = () => {
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      direction="row"
      // css={{ backgroundImage: `url(/images/triangle.svg)` }}
    >
      <Grid.Container justify="center" alignItems="center">
        <Grid xs={12} sm={6} direction={"column"}>
          <Text h1> Strony Internetowe</Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita
            corporis perferendis libero. Eius fuga tempore est earum aliquam
            praesentium, quod quibusdam quas, quia distinctio minus animi
            recusandae delectus beatae. Totam modi soluta saepe provident. Nobis
            nesciunt exercitationem, non debitis itaque officiis vel neque,
            atque qui odit libero illum ullam excepturi.
          </Text>
        </Grid>
        <Grid xs={12} sm={6}>
          <Image
            src={"/images/computer.svg"}
            alt="strony internetowe"
            width={500}
            height={500}
            color={"#bea994"}
          />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default HeroSection;
