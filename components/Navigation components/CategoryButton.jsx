import Link from "next/link";
import { Button, Text } from "@nextui-org/react";

const CategoryButton = ({ text, href, light = true }) => {
  return (
    <Link href={href}>
      {light ? (
        <Button auto light>
          <Text h4>{text}</Text>
        </Button>
      ) : (
        <Button auto ghost>
          <Text h4>{text}</Text>
        </Button>
      )}
    </Link>
  );
};

export default CategoryButton;
