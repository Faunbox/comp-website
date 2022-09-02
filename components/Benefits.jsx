import { Container, Grid, Text } from "@nextui-org/react";

const Benefits = () => {
  return (
    <Container css={{ textAlign: "right" }}>
      <Text h3>Co zyskujesz wspolpracujac z nami?</Text>
      <Grid.Container css={{ textAlign: "center" }}>
        <Grid xs={4} justify="center" alignItems="center">
          Obrazek
        </Grid>
        <Grid xs={8}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio
            adipisci perspiciatis incidunt alias laboriosam, beatae, autem
            eligendi magni ratione doloribus natus explicabo animi sint,
            consequatur suscipit? Ipsa, necessitatibus obcaecati.
          </Text>
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Benefits;
