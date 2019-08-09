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

const ListItem = ({ onPress, product }) => {
  return (
    <Item>
      <Image
        source={{ uri: product.productType.avatar.url }}
        imageStyle={{ borderRadius: 10 }}
      />
      <Content>
        <ProductTitleContainer>
          <ProductTitle>{product.productType.name}</ProductTitle>
          <ProductSymbolQuantity>x</ProductSymbolQuantity>
          <ProductQuantity>{product.quantity}</ProductQuantity>
        </ProductTitleContainer>
        <SizeContainer>
          <SizeTitle>Tamanho:</SizeTitle>
          <SizeDescription>
            {product.productPrice.productSize.name}
          </SizeDescription>
        </SizeContainer>
        <Price>R$ {product.total}</Price>
      </Content>
      <Actions>
        <ActionDelete onPress={() => onPress(product)}>
          <ActionDeleteIcon name="trash" size={20} color="red" />
        </ActionDelete>
      </Actions>
    </Item>
  );
};

export default ListItem;
