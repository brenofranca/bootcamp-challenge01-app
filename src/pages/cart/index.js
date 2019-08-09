import React from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EmptyList from "~/components/list-empty";
import { Pages } from "~/routes/index";
import { navigate } from "~/services/navigation";
import { Creators as CartCreators } from "~/store/ducks/cart";
import CartProducts from "./components/list";
import {
  ButtonOrderFinish,
  ButtonOrderFinishIcon,
  ButtonOrderFinishText,
  ButtonProductAdd,
  ButtonProductAddIcon,
  Container,
  Content,
  Footer,
  Header,
  Main,
  Refresh,
  RefreshIcon,
  Title
} from "./styles";

const Cart = ({ cart, navigation, isEmptyCart }) => {
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
          <Title>Carrinho</Title>
        </Header>
        <Content>
          {isEmptyCart ? (
            <EmptyList
              data={{
                message: "Você ainda não possui produtos no seu carrinho.",
                icon: "frown-o",
                color: "#FFF"
              }}
            />
          ) : (
            <CartProducts cart={cart.data} />
          )}
        </Content>
        <Footer>
          <ButtonProductAdd
            onPress={() => navigate(Pages.ProductCategoriesScreen)}
          >
            <ButtonProductAddIcon name="cart-plus" size={17} color="#666" />
          </ButtonProductAdd>
          <ButtonOrderFinish disabled={isEmptyCart} isEmptyCart={isEmptyCart}>
            <ButtonOrderFinishText>Realizar Pedido</ButtonOrderFinishText>
            <ButtonOrderFinishIcon
              name="chevron-right"
              size={12}
              color="#fff"
            />
          </ButtonOrderFinish>
        </Footer>
      </Container>
    </Main>
  );
};

const mapStateToProps = state => ({
  cart: state.cart,
  isEmptyCart: !state.cart.data.total
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...CartCreators }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
