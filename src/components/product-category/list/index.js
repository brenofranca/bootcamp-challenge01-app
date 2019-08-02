import React from "react";

import { Container, Items } from "./styles";

import ProductCategoryItem from "../item";

const ProductCategoryList = ({ categories }) => {
  _keyExtractor = (item, index) => String(item.id);

  _onPressItem = item => {};

  _renderItem = ({ item }) => (
    <ProductCategoryItem
      id={item.id}
      title={item.title}
      product={item}
      onPress={this._onPressItem(item)}
    />
  );

  return (
    <Container>
      <Items
        data={categories}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    </Container>
  );
};

export default ProductCategoryList;
