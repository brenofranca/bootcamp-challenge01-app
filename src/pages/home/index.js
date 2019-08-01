import React, { useState } from "react";
import { StatusBar } from "react-native";

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

const Home = ({ navigation }) => {
  return (
    <Main>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#FFF" />

        <Header>
          <Refresh onPress={() => console.tron.log("cart")}>
            <RefreshIcon name="history" size={20} color="#FFF" />
          </Refresh>
          <Title>Pizzaria Don Juan</Title>
          <Cart onPress={() => console.tron.log("cart")}>
            <CartIcon name="shopping-bag" size={20} color="#FFF" />
          </Cart>
        </Header>
        <Content>
          <ProductCategoryList />
        </Content>
      </Container>
    </Main>
  );
};

export default Home;
