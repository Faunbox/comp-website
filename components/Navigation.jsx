import { Container, Text, Grid, Button, Navbar } from "@nextui-org/react";
import Link from "next/link";
import { navContent } from "../data/navigation";

const Navigation = () => {
  return (
    <Navbar shouldHideOnScroll variant={"sticky"} className="navigation">
      <Navbar.Brand>
        <Text b h3>
          Sojecki_studio
        </Text>
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" aria-label="toogle-menu" />
      <Navbar.Content hideIn={"xs"}>
        {navContent.map((category) => (
          <Navbar.Link key={category.text} href={category.href}>
            {category.text}
          </Navbar.Link>
        ))}
      </Navbar.Content>
      <Navbar.Collapse css={{ overflowX: "hidden" }}>
        {navContent.map((category, index) => (
          <Navbar.CollapseItem key={category.text}>
            <Link
              color="inherit"
              css={{ minWidth: "100%" }}
              href={category.href}
            >
              {category.text}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
