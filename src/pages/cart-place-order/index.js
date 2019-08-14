import React, { useState } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EmptyList from "~/components/list-empty";
import { Creators as CartCreators } from "~/store/ducks/cart";
import {
  ButtonOrderFinish,
  ButtonOrderFinishIcon,
  ButtonOrderFinishText,
  Container,
  Content,
  Form,
  Header,
  InputAddress,
  InputCep,
  InputDistrict,
  InputNumber,
  InputObservation,
  Main,
  Refresh,
  RefreshIcon,
  Row,
  Title,
  TotalPrice
} from "./styles";

const CartPlaceOrder = ({ cart, navigation, isEmptyCart, placeOrderCart }) => {
  const [form, setForm] = useState({
    observation: "Teste",
    cep: "60763777",
    address: "Rua 7",
    number: "298",
    district: "Fortaleza",
    state: "CE"
  });

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
          <Title>Realizar Pedido</Title>
          <TotalPrice>{cart.data.totalPresentation}</TotalPrice>
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
            <Form>
              <InputObservation
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Alguma observação ?"
                underlineColorAndroid="transparent"
                value={form.observation}
                onChangeText={text => setForm({ ...form, text })}
              />
              <InputCep
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Qual seu CEP ?"
                underlineColorAndroid="transparent"
                value={form.cep}
                onChangeText={text => setForm({ ...form, text })}
              />
              <Row>
                <InputAddress
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Rua"
                  underlineColorAndroid="transparent"
                  value={form.address}
                  onChangeText={text => setForm({ ...form, text })}
                />
                <InputNumber
                  autoCapitalize="none"
                  autoCorrect={false}
                  placeholder="Nº"
                  underlineColorAndroid="transparent"
                  value={form.number}
                  onChangeText={text => setForm({ ...form, text })}
                />
              </Row>
              <InputDistrict
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Bairro"
                underlineColorAndroid="transparent"
                value={form.district}
                onChangeText={text => setForm({ ...form, text })}
              />
              <ButtonOrderFinish onPress={() => placeOrderCart(form)}>
                <ButtonOrderFinishText>Finalizar</ButtonOrderFinishText>
                <ButtonOrderFinishIcon />
              </ButtonOrderFinish>
            </Form>
          )}
        </Content>
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
)(CartPlaceOrder);
