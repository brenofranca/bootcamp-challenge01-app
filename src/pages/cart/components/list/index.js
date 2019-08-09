import React from "react";
import ListItem from "../item";
import { Container, Items } from "./styles";

const ProductCategoryList = ({ cart }) => {
  _onProductDeletePressed = product => {
    console.tron.log(product);
  };

  _keyExtractor = item => String(item.productPrice.id);

  _renderItem = ({ item }) => (
    <ListItem
      id={item.id}
      product={item}
      onPress={() => this._onProductDeletePressed(item)}
    />
  );

  return (
    <Container>
      <Items
        data={cart.products}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    </Container>
  );
};

export default ProductCategoryList;
