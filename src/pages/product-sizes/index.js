import React from "react";

import { StatusBar } from "react-native";

import { bindActionCreators } from "redux";

import { connect } from "react-redux";

import { Creators as ProductSizeCreators } from "~/store/ducks/product-sizes";

import {
  Main,
  Container,
  Header,
  Refresh,
  RefreshIcon,
  Title,
  Content,
  LoadingContainer,
  Loading,
  LoadingText
} from "./styles";

import ProductSizeList from "./components/list";

const ProductSize = ({ navigation, productSizes }) => {
  return (
    <Main>
      <Container>
        <StatusBar barStyle="light-content" backgroundColor="#FFF" />

        <Header>
          <Refresh
            onPress={() => {
              navigation.goBack(null);
            }}
          >
            <RefreshIcon name="chevron-left" size={15} color="#FFF" />
          </Refresh>
          <Title>Selecione um tamanho</Title>
        </Header>
        <Content>
          {productSizes.processing ? (
            <LoadingContainer>
              <Loading size={"large"} />
              <LoadingText>Carregando tipos de produto.</LoadingText>
            </LoadingContainer>
          ) : (
            <ProductSizeList products={productSizes.data} />
          )}
        </Content>
      </Container>
    </Main>
  );
};

const mapStateToProps = state => ({
  productSizes: state.productSizes
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...ProductSizeCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductSize);
