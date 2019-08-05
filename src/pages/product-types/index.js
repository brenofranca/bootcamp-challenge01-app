import React, { useState, useEffect } from "react";

import { StatusBar } from "react-native";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as ProductTypesCreators } from "~/store/ducks/product-types";

import {
  Main,
  Container,
  Header,
  Refresh,
  RefreshIcon,
  Title,
  Cart,
  CartIcon,
  Content,
  LoadingContainer,
  Loading,
  LoadingText
} from "./styles";

const ProductTypes = ({ productTypes }) => {
  useEffect(() => {}, []);

  return (
    <Main>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#FFF" />

        <Header>
          <Refresh onPress={() => {}}>
            <RefreshIcon name="history" size={20} color="#FFF" />
          </Refresh>
          <Title>Selecione um tipo</Title>
        </Header>
        <Content>
          {productTypes.processing ? (
            <LoadingContainer>
              <Loading size={"large"} />
              <LoadingText>Carregando tipos de produto.</LoadingText>
            </LoadingContainer>
          ) : (
            <LoadingText>Carregando tipos de produto.</LoadingText>
          )}
        </Content>
      </Container>
    </Main>
  );
};

const mapStateToProps = state => ({
  productTypes: state.productTypes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductTypesCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductTypes);
