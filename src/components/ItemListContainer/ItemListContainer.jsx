import { Flex } from "@chakra-ui/react";
import { ItemCard } from "../ItemCard/ItemCard";

export const ItemListContainer = ({ products }) => {
  return (
    <Flex wrap="wrap" width={"100%"}>
      {products.map((product) => (
        <ItemCard key={product.id} data={product} />
      ))}
    </Flex>
  );
};
