import React, { useState, useEffect } from "react";

import { StatusBar } from "react-native";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as ProductCategoriesCreators } from "~/store/ducks/product-categories";

import {
  Main,
  Container,
  Header,
  Refresh,
  RefreshIcon,
  Title,
  Cart,
  CartIcon,
  Content
} from "./styles";

import ProductCategoryList from "~/components/product-category/list";

const Home = ({ productCategories, ProductCategoriesRequest }) => {
  useEffect(() => {
    ProductCategoriesRequest();
  }, []);

  return (
    <Main>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#FFF" />

        <Header>
          <Refresh onPress={() => ProductCategoriesRequest()}>
            <RefreshIcon name="history" size={20} color="#FFF" />
          </Refresh>
          <Title>Pizzaria Don Juan</Title>
          <Cart onPress={() => console.tron.log("Cart")}>
            <CartIcon name="shopping-bag" size={20} color="#FFF" />
          </Cart>
        </Header>
        <Content>
          <ProductCategoryList categories={productCategories.data} />
        </Content>
      </Container>
    </Main>
  );
};

const mapStateToProps = state => ({
  productCategories: state.productCategories
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductCategoriesCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
