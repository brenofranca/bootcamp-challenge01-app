import Icon from "react-native-vector-icons/FontAwesome";
import styled from "styled-components/native";

export const Item = styled.View`
  background-color: #fff;
  border-radius: 4px;
  flex-direction: row;
  height: 100px;
  margin-bottom: 10px;
  padding: 10px;
  flex: 1 auto;
`;

export const Image = styled.Image`
  width: 70px;
  height: 70px;
  margin-top: 5px;
`;

export const Content = styled.View`
  flex-direction: column;
  flex: 2;
  margin-left: 10px;
  padding-vertical: 5px;
  margin-top: 5px;
`;

export const ProductTitle = styled.Text`
  font-family: Helvetica;
  font-size: 13px;
  font-weight: bold;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
`;

export const ProductSymbolQuantity = styled.Text`
  margin-left: 5px;
  font-size: 11px;
  font-weight: bold;
  color: red;
`;

export const ProductQuantity = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: red;
  margin-bottom: 2px;
`;

export const SizeTitle = styled.Text`
  font-size: 11px;
  color: #555;
`;

export const SizeDescription = styled.Text`
  font-size: 11px;
  margin-left: 2px;
  color: #555;
`;

export const Price = styled.Text`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  color: #0b2031;
  letter-spacing: 0;
  text-align: left;
  margin-top: 10px;
`;

export const SizeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductTitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Actions = styled.View`
  align-items: center;
  justify-content: center;
`;
export const ActionDelete = styled.TouchableOpacity`
  padding: 10px;
`;

export const ActionDeleteIcon = styled(Icon)``;
