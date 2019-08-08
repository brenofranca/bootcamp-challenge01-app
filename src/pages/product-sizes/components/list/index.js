import React from "react";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as CartCreators } from "~/store/ducks/cart";
import { Creators as ProductSizesCreators } from "~/store/ducks/product-sizes";

import {
  Items,
  Container,
  ProductsEmpty,
  ProductsEmptyIcon,
  ProductsEmptyText
} from "./styles";

import ProductItem from "../item";

const ProductList = ({ products, addProductToCart, ProductSizesSelected }) => {
  _keyExtractor = item => String(item.id);

  _onProductSizePressed = product => {
    ProductSizesSelected(product);
    addProductToCart({ productPrice: product, quantity: 1 });
  };

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CartCreators, ...ProductSizesCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
