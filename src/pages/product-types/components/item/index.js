import React from "react";

import { Item, Image, Content, Title } from "./styles";

const ProductItem = ({ onPress, product }) => {
  return (
    <Item onPress={() => onPress(product)}>
      <Image source={{ uri: product.avatar.url }} />
      <Content>
        <Title>{product.name}</Title>
      </Content>
    </Item>
  );
};

export default ProductItem;
