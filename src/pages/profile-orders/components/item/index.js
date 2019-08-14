import React from "react";

import { Item, Title, Date, Price } from "./styles";

const ListItem = ({ data }) => {
  return (
    <Item>
      <Title>Pedido #{data.id}</Title>
      <Date>{data.created_at}</Date>
      <Price>R$ {data.price}</Price>
    </Item>
  );
};

export default ListItem;
