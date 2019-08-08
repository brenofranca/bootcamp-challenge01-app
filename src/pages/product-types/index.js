import React from "react";

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
  Content,
  LoadingContainer,
  Loading,
  LoadingText
} from "./styles";

import ProductTypesList from "./components/list";

const ProductTypes = ({ navigation, productTypes }) => {
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
          <Title>Selecione um tipo</Title>
        </Header>
        <Content>
          {productTypes.processing ? (
            <LoadingContainer>
              <Loading size={"large"} />
              <LoadingText>Carregando tipos de produto.</LoadingText>
            </LoadingContainer>
          ) : (
            <ProductTypesList products={productTypes.data} />
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
