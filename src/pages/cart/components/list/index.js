import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as CartCreators } from "~/store/ducks/cart";
import ListItem from "../item";
import { Container, Items } from "./styles";

const ProductList = ({ cart, removeProductOfCart }) => {
  _onProductDeletePressed = ({ productPrice }) =>
    removeProductOfCart(productPrice.id);

  _keyExtractor = ({ productPrice }) => String(productPrice.id);

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

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CartCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
