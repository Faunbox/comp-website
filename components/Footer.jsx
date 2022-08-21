import { Container, Text, Grid } from "@nextui-org/react";

const Footer = () => {
  return (
    <Container justify="center">
      <Grid.Container alignItems="center" justify="center" gap={2}>
        <Grid justify="center" xs={4}>
          Krotki opis
        </Grid>
        <Grid justify="center" xs={4}>
          <Container direction="column">
            <Text h4>Nawigacja</Text>
          </Container>
        </Grid>
        <Grid justify="center" xs={4}>
          <Container direction="column">
            <Text>Polityka Prywatności</Text>
            <Text>Polityka Prywatności</Text>
          </Container>
        </Grid>
      </Grid.Container>
      <Container css={{ textAlign: "center" }}>
        <Text small>Created by Filip Sojecki</Text>
      </Container>
    </Container>
  );
};

export default Footer;
