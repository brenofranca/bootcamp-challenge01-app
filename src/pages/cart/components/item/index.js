import React from "react";
import {
  ActionDelete,
  ActionDeleteIcon,
  Actions,
  Content,
  Image,
  Item,
  Price,
  ProductQuantity,
  ProductSymbolQuantity,
  ProductTitle,
  ProductTitleContainer,
  SizeContainer,
  SizeDescription,
  SizeTitle
} from "./styles";

const ListItem = ({ onPress, cart }) => {
  return (
    <Item>
      <Image
        source={{ uri: cart.productType.avatar.url }}
        imageStyle={{ borderRadius: 10 }}
      />
      <Content>
        <ProductTitleContainer>
          <ProductTitle>{cart.productType.name}</ProductTitle>
          <ProductSymbolQuantity>x</ProductSymbolQuantity>
          <ProductQuantity>{cart.quantity}</ProductQuantity>
        </ProductTitleContainer>
        <SizeContainer>
          <SizeTitle>Tamanho:</SizeTitle>
          <SizeDescription>
            {cart.productPrice.productSize.name}
          </SizeDescription>
        </SizeContainer>
        <Price>{cart.totalPresentation}</Price>
      </Content>
      <Actions>
        <ActionDelete onPress={() => onPress(product)}>
          <ActionDeleteIcon name="trash" size={25} color="red" />
        </ActionDelete>
      </Actions>
    </Item>
  );
};

export default ListItem;
