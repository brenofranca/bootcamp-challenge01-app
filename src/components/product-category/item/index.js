import React from "react";

import {
  Item,
  Image,
  Content,
  Title,
  Description,
  DescriptionText,
  Time,
  TimeIcon,
  TimeText
} from "./styles";

const ProductCategoryItem = ({ product, navigation }) => {
  return (
    <Item>
      <Image
        source={require("../../../assets/images/Categories/pizza.jpg")}
        imageStyle={{ borderRadius: 10 }}
      />
      <Content>
        <Title>{product.title}</Title>
        <Description>
          <DescriptionText>{product.description}</DescriptionText>
        </Description>
        <Time>
          <TimeIcon name="clock-o" size={15} color="#706e7b" />
          <TimeText>{product.time}</TimeText>
        </Time>
      </Content>
    </Item>
  );
};

export default ProductCategoryItem;
