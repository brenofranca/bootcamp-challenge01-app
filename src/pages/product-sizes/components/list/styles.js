import styled from "styled-components/native";
import Icon from "react-native-vector-icons/FontAwesome";

export const Container = styled.View`
  flex: 1;
`;

export const Items = styled.FlatList``;

export const ProductsEmpty = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductsEmptyText = styled.Text`
  color: #fff;
  text-align: center;
  margin-top: 5px;
  font-size: 11.5px;
`;

export const ProductsEmptyIcon = styled(Icon)``;
