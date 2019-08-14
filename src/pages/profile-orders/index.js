import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as OrdersCreators } from "~/store/ducks/orders";
import ProductCategoryList from "./components/list";
import {
  Cart,
  CartIcon,
  Container,
  Content,
  Header,
  Loading,
  LoadingContainer,
  LoadingText,
  Main,
  Refresh,
  RefreshIcon,
  Title
} from "./styles";

const ProfileOrder = ({ navigation, orders, OrdersRequest }) => {
  useEffect(() => {
    OrdersRequest();
    return;
  }, []);

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
          <Title>Meus Pedidos</Title>
        </Header>
        <Content>
          {orders.processing ? (
            <LoadingContainer>
              <Loading size={"large"} />
              <LoadingText>Carregando categorias de produtos.</LoadingText>
            </LoadingContainer>
          ) : (
            <ProductCategoryList data={orders.data} />
          )}
        </Content>
      </Container>
    </Main>
  );
};

const mapStateToProps = state => ({
  orders: state.orders
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...OrdersCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileOrder);
