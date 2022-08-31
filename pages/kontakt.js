import { Text, Container } from "@nextui-org/react";

import client from "../libs/contentful";

export async function getStaticProps() {
  const post = await client.getEntry("w2yMYaiKVcvnRsfP6opum");
  return {
    props: {
      ...post.fields,
    },
  };
}

const ProductPage = ({ productDescription, productName }) => {
  return (
    <Container css={{ textAlign: "center" }}>
      <Text h1>{productName}</Text>
      {productDescription.content.map((p) =>
        p.content.map((text) => <Text key={text.value}>{text.value}</Text>)
      )}
    </Container>
  );
};

export default ProductPage;
