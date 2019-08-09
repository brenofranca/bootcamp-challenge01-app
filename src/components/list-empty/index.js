import React from "react";
import { EmptyContainer, EmptyIcon, EmptyText } from "./styles";

const ListEmpty = ({ data }) => (
  <EmptyContainer>
    <EmptyIcon
      name={data.icon || "frown-o"}
      size={30}
      color={data.color || "#FFF"}
    />
    <EmptyText>
      {data.message || "Não foram encontrados regustros para sua busca!"}
    </EmptyText>
  </EmptyContainer>
);

export default ListEmpty;
