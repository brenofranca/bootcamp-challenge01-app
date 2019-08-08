import React from "react";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as ProductSizesCreators } from "~/store/ducks/product-sizes";

import { Container, Items } from "./styles";

import ProductItem from "../item";

const ProductTypeList = ({ products, ProductSizesRequest }) => {
  _keyExtractor = item => String(item.id);

  _onProductTypePressed = product => ProductSizesRequest(product.id);

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductSizesCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTypeList);
