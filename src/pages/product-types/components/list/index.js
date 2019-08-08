import React from "react";

import { Container, Items } from "./styles";

import ProductItem from "../item";

const ProductList = ({ products }) => {
  _keyExtractor = item => String(item.id);

  _onProductTypePressed = product => console.tron.log(product.id);

  _renderItem = ({ item }) => (
    <ProductItem
      id={item.id}
      title={item.title}
      product={item}
      onPress={() => this._onProductTypePressed(item)}
    />
  );

  return (
    <Container>
      <Items
        data={products}
        numColumns={2}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    </Container>
  );
};

export default ProductList;
