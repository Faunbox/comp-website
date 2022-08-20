import { Text } from "@nextui-org/react";

import client from "../assets/contentful";

const ProductPage = ({ productDescription, productName }) => {
  return (
    <>
      <Text h1>{productName}</Text>
      {productDescription.content.map((p) =>
        p.content.map((text) => <Text key={text.content}>{text.value}</Text>)
      )}
    </>
  );
};

export default ProductPage;

export async function getStaticProps() {
  const post = await client.getEntry("w2yMYaiKVcvnRsfP6opum");
  return {
    props: {
      ...post.fields,
    },
  };
}
