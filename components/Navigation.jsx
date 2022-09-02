import {
  Container,
  Text,
  Grid,
  Switch,
  Navbar,
  useTheme,
} from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { SunIcon } from "./Navigation components/SunIcon";
import { MoonIcon } from "./Navigation components/MoonIcon";
import Link from "next/link";
import { navContent } from "../data/navigation";
import { constans } from "../data/constans";

const Navigation = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <Navbar
      shouldHideOnScroll
      variant={"sticky"}
      className="navigation"
      css={{ background: "$bgc" }}
    >
      <Navbar.Brand>
        <Link href={"/"}>
          <Text b h3 css={{ cursor: "pointer" }}>
            {constans.company_name}
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle showIn="xs" aria-label="toogle-menu" />
      <Navbar.Content hideIn={"xs"} activeColor={"warning"}>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
          iconOn={<MoonIcon filled />}
          iconOff={<SunIcon filled />}
          color={"warning"}
          shadow
        />
        {navContent.map((category) => (
          <Link href={category.href} key={category.text}>
            <Navbar.Link>{category.text}</Navbar.Link>
          </Link>
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
