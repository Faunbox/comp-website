import { Container, Text, Grid, Button } from "@nextui-org/react";
import Link from "next/link";
import CategoryButton from "./Navigation components/CategoryButton";
import { navContent } from "../data/navigation";

const Navigation = () => {
 

  return (
    <Container css={{ textAlign: "center", minHeight: "70px" }}>
      <Grid.Container alignItems={"center"} gap={2}>
        <Grid xs={6} justify="flex-start">
          <Link href="/">
            <Text css={{ cursor: "pointer" }} h2>
              Sojecki_dev
            </Text>
          </Link>
        </Grid>
        <Grid justify="flex-end" xs={3}>
          <Text b>
            Masz pytania? <a href="phoneto:604181632">604181632</a>
          </Text>
        </Grid>
        <Grid justify="flex-end" xs={3}>
          <Text b>
            Wolisz napisać?{" "}
            <a href="mailto:faunbox2@gmail.com">faunbox2@gmail.com</a>
          </Text>
        </Grid>
      </Grid.Container>
      <Grid.Container justify="space-around" alignItems="center">
        {navContent.map((category) => (
          <Grid xs={2} key={category.text}>
            <CategoryButton
              text={category.text}
              href={category.href}
              light={category.light}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default Navigation;
