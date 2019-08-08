import React from "react";

import { Item, Image, Content, Title, Price } from "./styles";

const ProductItem = ({ onPress, product }) => {
  return (
    <Item onPress={() => onPress(product)}>
      <Image source={{ uri: product.avatar.url }} />
      <Content>
        <Title>{product.productSize.name}</Title>
        <Price>{product.price_presentation}</Price>
      </Content>
    </Item>
  );
};

export default ProductItem;
