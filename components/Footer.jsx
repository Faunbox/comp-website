import { Container, Text, Grid, Button } from "@nextui-org/react";
import Link from "next/link";
import { navContent } from "../data/navigation";
import CategoryButton from "./Navigation components/CategoryButton";

const Footer = () => {
  return (
    <Container justify="center">
      <Grid.Container alignItems="center" justify="center" gap={2}>
        <Grid justify="center" xs={4}>
          Sojecki_dev - od pomysłu po gotowy projekt. Tworzymy nowoczesne strony
          internetowe dopasowane pod Twoj biznes.
        </Grid>
        <Grid justify="center" xs={4}>
          <Container direction="column" alignItems="center">
            <Text h4>Nawigacja</Text>
            {navContent.map((category) => (
              <Grid
                xs={2}
                key={category.text}
                justify="center"
                alignItems="center"
              >
                <Link href={category.href}>
                  <Button light>{category.text}</Button>
                </Link>
              </Grid>
            ))}
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
