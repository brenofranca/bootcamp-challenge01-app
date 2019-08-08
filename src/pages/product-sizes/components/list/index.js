import React from "react";

import {
  Items,
  Container,
  ProductsEmpty,
  ProductsEmptyIcon,
  ProductsEmptyText
} from "./styles";

import ProductItem from "../item";

const ProductList = ({ products }) => {
  _keyExtractor = item => String(item.id);

  _onProductSizePressed = product => console.tron.log(product);

  _renderItem = ({ item }) => (
    <ProductItem
      id={item.id}
      title={item.title}
      product={item}
      onPress={() => this._onProductSizePressed(item)}
    />
  );

  return (
    <Container>
      {!products.length ? (
        <ProductsEmpty>
          <ProductsEmptyIcon name="frown-o" size={30} color="#FFF" />
          <ProductsEmptyText>
            Não foram encontrados tamanhos para esses produtos!
          </ProductsEmptyText>
        </ProductsEmpty>
      ) : (
        <Items
          data={products}
          numColumns={2}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      )}
    </Container>
  );
};

export default ProductList;
