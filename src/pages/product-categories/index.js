import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Pages } from "~/routes/index";
import { navigate } from "~/services/navigation";
import { Creators as ProductCategoriesCreators } from "~/store/ducks/product-categories";
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

const Home = ({ productCategories, ProductCategoriesRequest }) => {
  useEffect(() => {
    ProductCategoriesRequest();
    return;
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
          <Cart onPress={() => navigate(Pages.CartScreen)}>
            <CartIcon name="shopping-bag" size={17} color="#FFF" />
          </Cart>
        </Header>
        <Content>
          {productCategories.processing ? (
            <LoadingContainer>
              <Loading size={"large"} />
              <LoadingText>Carregando categorias de produtos.</LoadingText>
            </LoadingContainer>
          ) : (
            <ProductCategoryList categories={productCategories.data} />
          )}
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
