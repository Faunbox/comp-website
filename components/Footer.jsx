import { Container, Text, Grid, Button } from "@nextui-org/react";
import Link from "next/link";
import { constans } from "../data/constans";
import { navContent } from "../data/navigation";

const Footer = () => {
  return (
    <Container justify="center" css={{ textAlign: "center" }}>
      <Grid.Container
        alignItems="center"
        justify="center"
        gap={2}
        direction="column"
        css={{ "@xs": { flexDirection: "row" } }}
      >
        <Grid justify="center" xs={4}>
          <Text>
            <Text b>{constans.company_name}</Text> - od pomysłu po gotowy
            projekt. Tworzymy nowoczesne strony internetowe dopasowane pod Twoj
            biznes.
          </Text>
        </Grid>
        <Grid
          justify="center"
          alignItems="center"
          direction="column"
          css={{ textAlign: "center" }}
          xs={4}
        >
          <Text h4>Nawigacja</Text>
          <Container
            direction="row"
            alignItems="center"
            justify="center"
            display="flex"
            css={{ textAlign: "center" }}
          >
            {navContent.map((category) => (
              <Link href={category.href} key={category.text}>
                <Button light>{category.text}</Button>
              </Link>
            ))}
          </Container>
        </Grid>
        <Grid justify="center" xs={4}>
          <Container direction="column" justify="center" alignItems="center">
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
