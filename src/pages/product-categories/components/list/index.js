import React from "react";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as ProductTypesCreators } from "~/store/ducks/product-types";

import { Container, Items } from "./styles";

import ProductCategoryItem from "../item";

const ProductCategoryList = ({ categories, ProductTypesRequest }) => {
  _keyExtractor = item => String(item.id);

  _onCategoryPressed = product => ProductTypesRequest(product.id);

  _renderItem = ({ item }) => (
    <ProductCategoryItem
      id={item.id}
      title={item.title}
      product={item}
      onPress={() => this._onCategoryPressed(item)}
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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductTypesCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCategoryList);
